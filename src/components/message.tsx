type Properties = Readonly<{
  children?: React.ReactNode;
}>;

export default function Component(properties: Properties) {
  if (!properties.children) {
    return null;
  }

  return (
    <div className="mb-4 text-sm rounded-lg dark:bg-(--background)" role="alert">
      {properties.children}
    </div>
  );
};
