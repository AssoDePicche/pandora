type Properties = Readonly<{
  children?: React.ReactNode;
}>;

export default function Component(properties: Properties) {
  return <h1 className="text-4xl font-bold mb-4">{properties?.children}</h1>;
}
