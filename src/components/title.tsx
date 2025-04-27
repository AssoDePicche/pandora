type Properties = {
  children?: React.ReactNode;
};

export default function Title(properties: Properties) {
  return <h1 className="text-4xl font-bold">{properties?.children}</h1>;
}
