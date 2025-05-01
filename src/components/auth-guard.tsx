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

  const skip = ['/login', '/signup'];

  useEffect(() => {
    const authenticated = null !== localStorage.getItem('token');

    if (authenticated && skip.includes(pathname)) {
      router.replace('/home');
    } else if (authenticated || !authenticated && skip.includes(pathname)) {
      setIsLoading(false);
    } else {
      router.replace('/login');
    }
  }, [router]);

  if (isLoading) {
    return <div className="text-2xl font-bold">Loading...</div>;
  }

  return <>{properties?.children}</>
}
