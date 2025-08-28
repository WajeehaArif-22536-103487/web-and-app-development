import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function ProductForm({ onAdded }) {
  const [form, setForm] = useState({ name: "", price: "", description: "" });
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleFile = (e) => setFile(e.target.files[0]);

  const handleAdd = async () => {
    if (!form.name) return alert("Name required");
    setLoading(true);
    try {
      let imageUrl = "";
      if (file) {
        const storageRef = ref(storage, `products/${Date.now()}_${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const prog =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setUploadProgress(Math.round(prog));
            },
            (err) => reject(err),
            async () => {
              imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
              resolve(imageUrl);
            }
          );
        });
      }

      await addDoc(collection(db, "products"), {
        name: form.name,
        price: Number(form.price || 0),
        description: form.description || "",
        imageUrl,
        createdAt: serverTimestamp(),
      });

      setForm({ name: "", price: "", description: "" });
      setFile(null);
      setUploadProgress(0);
      onAdded && onAdded();
    } catch (e) {
      console.error(e);
      alert("Upload failed: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="border rounded-xl px-3 py-2"
      />
      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        type="number"
        className="border rounded-xl px-3 py-2 w-28"
      />
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="border rounded-xl px-3 py-2 min-w-[220px]"
      />
      <input type="file" accept="image/*" onChange={handleFile} />
      {uploadProgress > 0 && (
        <div className="text-sm">Uploading: {uploadProgress}%</div>
      )}
      <button
        onClick={handleAdd}
        disabled={loading}
        className="rounded-xl px-4 py-2 bg-purple-600 text-white"
      >
        {loading ? "Saving..." : "Add"}
      </button>
    </div>
  );
}
