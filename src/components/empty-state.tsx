type Properties = {
  children?: React.ReactNode;
};

export default function EmptyState(properties: Properties) {
  return (
    <div className="rounded-lg border-(--component) border-2 border-dashed h-full w-full px-4 py-4 flex items-center justify-center">
      {properties?.children}
    </div>
  );
};
