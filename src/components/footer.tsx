export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 md:flex md:items-center md:justify-between md:p-6">
      <aside>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</aside>
    </footer>
  );
}
