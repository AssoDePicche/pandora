'use client';

import Link from 'next/link';

import EmptyState from '@/components/empty-state';

import AuthGuard from '@/components/auth-guard';

export default function Page() {
  return (
    <AuthGuard>
      <Link href="/profile">
        <EmptyState>
          Dashboard coming soon. Checkout your profile by now.
        </EmptyState>
      </Link>
    </AuthGuard>
  );
};
