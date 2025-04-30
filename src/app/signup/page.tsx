'use client';

import { useState } from 'react';

import Form from 'next/form';

import Link from 'next/link';

import { useRouter } from 'next/navigation';

import AuthGuard from '@/components/auth-guard';

import Button from '@/components/button';

import Message from '@/components/message';

import Paragraph from '@/components/paragraph';

import TextField from '@/components/text-field';

import Title from '@/components/title';

import Hermes from '@/services/hermes';

export default function Signup() {
  const [message, setMessage] = useState(null);

  const router = useRouter();

  async function submit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    try {
      const data = new FormData(event.currentTarget);

      let response = await Hermes.post('http://localhost:3000/signup', {
        username: data.get("username"),
        email: data.get("email"),
        password: data.get("password")
      });

      if (201 !== response.status) {
        setMessage(response.error);

        return;
      }

      response = await Hermes.post('http://localhost:3000/login', {
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
      setMessage(error.message);
    }
  }

  return (
    <AuthGuard>
      <Form className="flex flex-col gap-y-4" onSubmit={submit}>
        <Title>Sign Up</Title>

        <TextField type="text" name="username" placeholder="Username" />

        <TextField type="email" name="email" placeholder="Email" />

        <TextField type="Password" name="password" placeholder="Password" />

        <Button type="submit">Sign Up</Button>

        <Paragraph>
          Already have an account? <Link href="/login" className="underline">Login</Link>
        </Paragraph>

        <Message>{message}</Message>
      </Form>
    </AuthGuard>
  );
}
