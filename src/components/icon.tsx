type Properties = Readonly<{
  style: string;
  children: React.ReactNode;
}>;

export default function Component(properties: Properties) {
  return (
    <span className={`material-icons-${properties.style}`}>
      {properties.children}
    </span>
  );
}
