import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import { UserProps } from './User.props';

export const User = ({ className, ...props }: UserProps) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {session.user?.image && (
          <Image
            src={session.user.image}
            alt="User Image"
            height={40}
            width={40}
            onClick={() => signOut()}
            className={`rounded-full p-1 hover:bg-gray-200 cursor-pointer ${className}`}
          />
        )}
      </>
    );
  }
  return (
    <>
      <button
        onClick={() => signIn()}
        className={`bg-blue-500 text-white font-medium px-6 py-2 rounded-md hover:brightness-105 hover:shadow-md whitespace-nowrap ${className}`}
      >
        Sign In
      </button>
    </>
  );
};
