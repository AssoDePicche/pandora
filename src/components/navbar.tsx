'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

export default function Component() {
  const pathname = usePathname();

  const routes = new Map<string, string[]>([
    ['/', ['/login', 'Sign In']],
    ['/login', ['/signup', 'Sign Up']],
    ['/signup', ['/login', 'Login']],
  ]);

  const href = routes.has(pathname) ? routes.get(pathname) : ['/logout', 'Sign Out'];

  return (
    <header className="navbar px-4 py-4 flex w-full">
      <div className="flex-1">
        <Link href="/" className="text-xl">Pandora</Link>
      </div>
      <nav className="flex">
        <ul className="menu menu-horizontal">
          <li>
            <Link href={`${href[0]}`}>{`${href[1]}`}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
