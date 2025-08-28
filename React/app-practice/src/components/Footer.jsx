export default function Footer() {
  return (
    <footer className="border-t py-10 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between px-4">
        <p className="text-gray-500">© {new Date().getFullYear()} LuxeHomes</p>
        <div className="flex gap-4 text-gray-500">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
