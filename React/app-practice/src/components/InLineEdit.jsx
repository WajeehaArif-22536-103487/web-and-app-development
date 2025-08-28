import { useEffect, useState } from "react";
export default function InlineEdit({ value, onSave, type = "text" }) {
  const [val, setVal] = useState(value ?? "");
  useEffect(() => setVal(value ?? ""), [value]);
  return (
    <div className="flex items-center gap-2">
      <input
        type={type}
        className="border rounded-xl px-3 py-2 w-28"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button
        onClick={() => onSave(val)}
        className="rounded-xl px-3 py-2 bg-gray-900 text-white"
      >
        Save
      </button>
    </div>
  );
}
