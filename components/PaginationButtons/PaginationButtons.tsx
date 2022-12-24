import { useRouter } from 'next/router';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

export const PaginationButtons = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;

  return (
    <div className="text-blue-700 flex px-9 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex > 10 && (
        <Link
          className="flex flex-col items-center hover:underline"
          href={`/search?term=${router.query.term}${
            router.query.searchType
              ? `&searchType=${router.query.searchType}`
              : ''
          }&start=${startIndex - 10}`}
        >
          <ChevronLeftIcon className="h-5" />
          <p>Previous</p>
        </Link>
      )}
      {startIndex < 90 && (
        <Link
          className="flex flex-col items-center hover:underline"
          href={`/search?term=${router.query.term}${
            router.query.searchType
              ? `&searchType=${router.query.searchType}`
              : ''
          }&start=${startIndex + 10}`}
        >
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </Link>
      )}
    </div>
  );
};
