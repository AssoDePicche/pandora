type Properties = {
  type?: string;
  children?: React.ReactNode;
};

export default function Button(properties: Properties) {
  return (
    <button type={properties?.type} className="font-medium px-4 py-3 text-sm text-center hover:cursor-pointer bg-(--component) rounded-lg flex items-center justify-center gap-3">
      {properties?.children}
    </button>
  );
}
