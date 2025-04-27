type Properties = {
  children?: React.ReactNode;
};

export default function Paragraph(properties: Properties) {
  return <p className="py-6 text-base">{properties?.children}</p>;
}
