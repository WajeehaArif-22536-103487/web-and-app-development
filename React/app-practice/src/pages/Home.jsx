import { Link } from "react-router-dom";
import Products from "./Products";

export default function Home() {
  return (
    <>
      <section className="py-16 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        <img
          className="rounded-2xl object-cover w-full h-96"
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
          alt="interior"
        />
        <div>
          <h1 className="text-4xl font-bold">
            Get personalized home interiors
          </h1>
          <p className="mt-4 text-gray-600">
            Beautiful, functional designs crafted for your lifestyle.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-block bg-purple-600 text-white px-5 py-3 rounded-xl"
          >
            Explore Products
          </Link>
        </div>
      </section>
      <Products previewOnly />
    </>
  );
}
