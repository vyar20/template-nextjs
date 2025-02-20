'use client';

import Google from '@/components/icons/google';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import type { FC, ReactNode } from 'react';

type SignInWithGoogleProps = {
  children?: ReactNode;
};

const SignInWithGoogle: FC<SignInWithGoogleProps> = () => {
  const onClickHandler = () => signIn('google');
  return (
    <Button full startElement={<Google />} onClick={onClickHandler}>
      Sign In With Google
    </Button>
  );
};

export default SignInWithGoogle;
