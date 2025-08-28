function Point({ label, variant, onClick }) {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Point;
