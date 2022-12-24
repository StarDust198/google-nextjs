import { useRef, MouseEvent } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon, MicrophoneIcon } from '@heroicons/react/20/solid';
import { Header, Footer } from '../components';

export default function Home() {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const search = (e: MouseEvent): void => {
    e.preventDefault();
    const term = searchRef.current?.value.trim();
    if (!term) return;
    router.push(`/search?term=${term}&searchType=`);
  };

  const randomSearch = async (e: MouseEvent): Promise<void> => {
    e.preventDefault();
    const term = await fetch(
      'https://random-word.ryanrk.com/api/en/word/random'
    ).then((res) => res.json());
    if (!term[0]) return;
    router.push(`/search?term=${term[0]}&searchType=`);
  };

  return (
    <>
      <Head>
        <title>Google Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <form className="flex flex-col items-center mt-40">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="Google logo"
          width={300}
          height={100}
        />
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
          <MagnifyingGlassIcon className="h-5 text-gray-500 mr-3" />
          <input
            ref={searchRef}
            type="text"
            className="grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-8 justify-center">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn" onClick={randomSearch}>
            {"I'm Feeling Lucky"}
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </>
  );
}
