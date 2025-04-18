export default function Alert({ children }) {
  if (!children) {
    return null;
  }

  return (
    <div className="mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-(--background) dark:text-red-400" role="alert">
      {children}
    </div>
  );
};
