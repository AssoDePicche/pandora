export default function Input({ type, name, placeholder }) {
  return (
    <input type={type} name={name} placeholder={placeholder} required className="input input-lg" />
  );
}
