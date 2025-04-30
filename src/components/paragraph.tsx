type Properties = {
  children?: React.ReactNode;
};

export default function Component(properties: Properties) {
  return <p className="text-base">{properties?.children}</p>;
}
