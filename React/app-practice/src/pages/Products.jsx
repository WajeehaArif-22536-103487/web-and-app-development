import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Card from "../components/Card";

export default function Products({ previewOnly = false }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) =>
      setProducts(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    );
    return () => unsub();
  }, []);

  const items = previewOnly ? products.slice(0, 4) : products;
  if (!items.length)
    return (
      <div className="max-w-6xl mx-auto px-4 text-gray-500">
        No products yet.
      </div>
    );

  return (
    <section className="py-10 max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((p) => (
          <Card key={p.id}>
            <div className="aspect-video bg-gray-100 rounded-xl mb-3 overflow-hidden grid place-items-center">
              {p.imageUrl ? (
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-gray-400">No Image</div>
              )}
            </div>
            <div className="font-semibold">{p.name}</div>
            <div className="text-sm text-gray-500">{p.description}</div>
            <div className="font-bold mt-1">${Number(p.price).toFixed(2)}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
