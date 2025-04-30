'use client';

import { useState, FormEvent } from 'react';

import Form from 'next/form';

import Link from 'next/link';

import { useRouter } from 'next/navigation';

import AuthGuard from '@/components/auth-guard';

import Button from '@/components/button';

import Message from '@/components/message';

import Paragraph from '@/components/paragraph';

import TextField from '@/components/text-field';

import Title from '@/components/title';

import Hermes from '@/services/hermes.tsx';

export default function Page() {
  const [message, setMessage] = useState(null);

  const router = useRouter();

  async function submit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    try {
      const data = new FormData(event.currentTarget);

      const response = await Hermes.post('http://localhost:3000/login', {
        email: data.get('email'),
        password: data.get('password')
      });

      if (200 !== response.status) {
        setMessage(response.error);

        return;
      }

      localStorage.setItem('token', response.payload.token);

      router.push('/home');
    } catch (error) {
      setMessage('Backend service unavailable');
    }
  }

  return (
    <AuthGuard>
      <Form className="flex flex-col gap-y-4" onSubmit={submit}>
        <Title>Login</Title>

        <TextField type="email" name="email" maxlength={255} placeholder="Email" />

        <TextField type="password" name="password" minlength={8} placeholder="Password" />

        <Button type="submit">Login</Button>

        <Paragraph>
          Already have an account? <Link href="/signup" className="underline">Sign Up</Link>
        </Paragraph>

        <Message>{message}</Message>
      </Form>
    </AuthGuard>
  );
}
