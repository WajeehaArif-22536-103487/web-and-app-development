import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  // Import styles

function Post() {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");

  async function HandlePost(e) {
    e.preventDefault();
    try {
      const data = await addDoc(collection(db, "Post"), {
        title: title,
        description: des,
      });

      if (data) {
        toast.success("✅ Post created successfully!");
        setTitle("");
        setDes("");
      }
    } catch (err) {
      toast.error("❌ Failed to create post");
      console.log(err);
    }
  }

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={HandlePost}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={des}
          onChange={(e) => setDes(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Toast container for notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Post;
