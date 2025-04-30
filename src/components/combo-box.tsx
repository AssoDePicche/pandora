export const Option = ({ value, children }) => (
  <option value={value}>{children}</option>
);

type Properties = {
  name: string;
  children?: React.ReactNode;
};

export default function Component(properties: Properties) {
  return (
    <select name={properties.name} className="bg-(--background) rounded-lg border-(--component) border-2 border-solid w-full px-4 py-3 text-base focus:outline-none">
      {properties?.children}
    </select>
  );
};
