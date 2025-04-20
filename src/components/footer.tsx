export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full p-4 md:flex md:items-center md:justify-between md:p-6">
      <aside>Copyright &copy; {year}. All rights reserved.</aside>
    </footer>
  );
}
