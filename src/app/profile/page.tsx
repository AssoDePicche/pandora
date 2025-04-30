'use client';

import { useEffect, useState } from 'react';

import config from '@/config';

import AuthGuard from '@/components/auth-guard';

import Paragraph from '@/components/paragraph';

import Title from '@/components/title';

import Hermes from '@/services/hermes';

export default function Page() {
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return new Date(date).toLocaleDateString(config.language, options);
  }

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

  return (
    <AuthGuard>
      <div className="flex items-center justify-center gap-x-4 h-full w-full">
        <div>
          <Title>{profile.username}'s Profile</Title>

          <Paragraph>E-mail: {profile.email}</Paragraph>

          <Paragraph>Created At: {formatDate(profile.createdAt)}</Paragraph>

          <Paragraph>Language: {config.language}</Paragraph>
        </div>
      </div>
    </AuthGuard>
  );
}
