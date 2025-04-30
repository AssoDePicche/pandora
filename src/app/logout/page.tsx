'use client';

import AuthGuard from '@/components/auth-guard';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('token');

    router.push('/login');
  }, [router]);

  return <AuthGuard></AuthGuard>;
};
