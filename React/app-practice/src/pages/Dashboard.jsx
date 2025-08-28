import ProductForm from "../components/ProductForm";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Card from "../components/Card";
import InlineEdit from "../components/InlineEdit";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) =>
      setProducts(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    );
    return () => unsub();
  }, []);

  const handleUpdate = async (id, data) => {
    await updateDoc(doc(db, "products", id), data);
  };
  const handleDelete = async (id) => {
    if (!confirm("Delete product?")) return;
    await deleteDoc(doc(db, "products", id));
  };

  return (
    <section className="py-10 max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <ProductForm />
      </div>
      <div className="grid gap-4">
        {products.map((p) => (
          <Card
            key={p.id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div className="flex-1">
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-gray-500">
                ${p.price?.toFixed?.(2) || "0.00"}
              </div>
              <div className="text-sm text-gray-500">{p.description}</div>
            </div>
            <div className="flex items-center gap-2">
              <InlineEdit
                value={p.name}
                onSave={(v) => handleUpdate(p.id, { name: v })}
              />
              <InlineEdit
                type="number"
                value={p.price}
                onSave={(v) => handleUpdate(p.id, { price: Number(v) })}
              />
              <button
                onClick={() => handleDelete(p.id)}
                className="rounded-xl px-3 py-2 border text-red-600"
              >
                Delete
              </button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
