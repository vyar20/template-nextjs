'use client';

import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import type { FC, ReactNode } from 'react';

type SignOutProps = {
  children?: ReactNode;
};

const SignOut: FC<SignOutProps> = () => {
  const onClickHandler = () => signOut();
  return (
    <Button full startElement={<LogOut />} onClick={onClickHandler}>
      Sign Out
    </Button>
  );
};

export default SignOut;
