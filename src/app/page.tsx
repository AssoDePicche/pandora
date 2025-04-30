import Link from 'next/link';

import Paragraph from '@/components/paragraph';

import Title from '@/components/title';

export default function Page() {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <Title>Your inventory at your fingertips</Title>
          <Paragraph>
            Pandora provides software that makes life as easy as possible for entrepreneurs in the new world. <Link href="/signup" className="underline">Sign up</Link> and start managing your business in just a few clicks.
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
