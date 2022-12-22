import { FormEvent, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  MicrophoneIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { User } from '../User/User';

export const SearchHeader = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const search = (e: FormEvent): void => {
    e.preventDefault();
    const term = searchRef.current?.value.trim();
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full items-center p-6">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="Google logo"
          width={120}
          height={40}
          onClick={() => router.push('/')}
          className="cursor-pointer"
        />
        <form
          onSubmit={search}
          className="flex border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 grow max-w-3xl items-center"
        >
          <input
            type="text"
            className="w-full focus:outline-none"
            defaultValue={router.query.term}
            ref={searchRef}
          />
          <XMarkIcon
            onClick={() => {
              if (searchRef.current) searchRef.current.value = '';
            }}
            className="h-7 cursor-pointer sm:mr-3 text-gray-500"
          />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
          <MagnifyingGlassIcon className="h-6 hidden sm:inline-flex text-blue-500" />
          <button hidden />
        </form>
        <User className="ml-auto" />
      </div>
    </header>
  );
};
