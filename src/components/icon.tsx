type Properties = {
  style: string;
  children: React.ReactNode;
};

export default function Icon(properties: Properties) {
  return (
    <span className={`material-icons-${properties.style}`}>
      {properties.children}
    </span>
  );
}
