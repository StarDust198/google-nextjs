import { useSession, signIn, signOut } from 'next-auth/react';
import { UserProps } from './User.props';

export const User = ({ className, ...props }: UserProps) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {session.user?.image && (
          <img
            src={session.user?.image}
            alt="User Image"
            onClick={() => signOut()}
            className={`w-10 h-10 rounded-full p-1 hover:bg-gray-200 cursor-pointer whitespace-nowrap ${className}`}
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
