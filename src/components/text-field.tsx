type Properties = {
  type: string;
  name: string;
  minlength?: number;
  maxlength?: number;
  placeholder?: string;
};

export default function TextField(properties: Properties) {
  return (
    <input type={properties.type} name={properties.name} placeholder={properties?.placeholder} minLength={properties?.minlength} maxLength={properties?.maxlength} required className="rounded-lg border-(--component) border-2 border-solid w-full px-4 py-3 text-base focus:outline-none" />
  );
}
