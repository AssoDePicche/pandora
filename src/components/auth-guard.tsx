'use client';

import { useEffect, useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';

type Properties = Readonly<{
  children?: React.ReactNode;
}>;

export default function Component(properties: Properties) {
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.replace('/login');

      return;
    }

    if (pathname === '/signup' || pathname === '/login') {
      router.replace('/home');

      return;
    }

    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return <div className="text-2xl font-bold">Loading...</div>;
  }

  return <>{properties?.children}</>
}
