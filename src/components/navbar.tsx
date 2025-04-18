import Link from "next/link"

export default function Navbar() {
  return (
    <header className="navbar px-4 py-4 flex">
      <div className="flex-1">
        <Link href="/" className="text-xl">Pandora</Link>
      </div>
      <nav className="flex">
        <ul className="menu menu-horizontal">
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
