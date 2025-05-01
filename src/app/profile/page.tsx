'use client';

import { FormEvent, useEffect, useState } from 'react';

import Form from 'next/form';

import config from '@/config';

import AuthGuard from '@/components/auth-guard';

import Button from '@/components/button';

import ComboBox, { Option } from '@/components/combo-box';

import Paragraph from '@/components/paragraph';

import Title from '@/components/title';

import Hermes from '@/services/hermes';

export default function Page() {
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return new Date(date).toLocaleDateString(config.language, options);
  }

  const languages = ['en-US', 'pt-BR'];

  const [profile, setProfile] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await Hermes.get('http://localhost:3000/users/me');

        console.log(response)

        setProfile(response.payload);
      } catch (error) {
        setMessage('Failed to load profile');
      } finally {
        setIsLoading(false);
      }
    }

    fetchProfile();
  }, []);

  if (isLoading) {
    return (
      <AuthGuard>
        <>Loading...</>
      </AuthGuard>
    );
  }

  if (message) {
    return (
      <AuthGuard>
        <>{message}</>
      </AuthGuard>
    );
  }

  if (!profile) {
    return (
      <AuthGuard>
        <>No profile available</>
      </AuthGuard>
    );
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
  }

  return (
    <AuthGuard>
      <Form className="flex flex-col gap-y-4">
        <Title>{profile.username}'s Profile</Title>

        <Paragraph>Email: {profile.email}</Paragraph>

        <Paragraph>Member since {formatDate(profile.createdAt)}</Paragraph>

        <div className="flex items-center gap-x-4">
          <span>Language:</span>
          <ComboBox>
          {
            languages.map((language) => (
              <Option key={language}>{language}</Option>
            ))
          }
          </ComboBox>
        </div>

        <Button type="submit">Save Changes</Button>
      </Form>
    </AuthGuard>
  );
}
