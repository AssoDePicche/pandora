export default function Button({ type, children }) {
  return (
    <button type={type} className="font-medium px-4 py-2 text-center hover:cursor-pointer bg-(--component) rounded">
      {children}
    </button>
  );
}
