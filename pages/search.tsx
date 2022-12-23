import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'node:querystring';
import { SearchHeader } from '../components/SearchHeader/SearchHeader';
import response from '../response.json';

function Search({ results }: { results: any }) {
  console.log(results);

  return (
    <>
      <Head>
        <title>Google Next Search</title>
      </Head>
      <div>
        {/* Search Header */}
        <SearchHeader />

        {/* Search results */}
      </div>
    </>
  );
}

export default Search;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>
) => {
  const mock = true;

  const data = mock
    ? response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && '&searchType=image'
        }`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
};
