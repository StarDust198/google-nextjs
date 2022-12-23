import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'node:querystring';
import { SearchHeader } from '../components/SearchHeader/SearchHeader';
import { SearchInfo } from '../components/SearchInfo/SearchInfo';
import response from '../response.json';

function Search({ results, term }: { results: any; term: string }) {
  console.log(results);

  return (
    <>
      <Head>
        <title>GoogleNext: results for {term}</title>
      </Head>
      <div>
        {/* Search Header */}
        <SearchHeader />

        {/* Search results */}
        <SearchInfo
          time={results.searchInformation.formattedSearchTime}
          total={results.searchInformation.formattedTotalResults}
        />
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
      term: context.query.term,
      results: data,
    },
  };
};
