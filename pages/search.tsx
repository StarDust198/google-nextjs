import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { SearchHeader, SearchInfo, SearchResult } from '../components';
import { FoundItem, FoundResult } from '../interfaces/searchResults.interface';
import response from '../response.json';

function Search({ results, term }: SearchProps) {
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
        <div className="w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
          <SearchInfo
            time={results.searchInformation.formattedSearchTime}
            total={results.searchInformation.formattedTotalResults}
          />
          {results.items.map(
            ({ link, formattedUrl, title, htmlSnippet }: FoundItem) => (
              <SearchResult
                key={link}
                link={link}
                formattedUrl={formattedUrl}
                title={title}
                htmlSnippet={htmlSnippet}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Search;

export const getServerSideProps: GetServerSideProps<SearchProps> = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>
) => {
  const mock = true;

  const term = typeof context.query.term === 'string' ? context.query.term : '';

  const data = mock
    ? response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${term}${
          context.query.searchType && '&searchType=image'
        }`
      ).then((response) => response.json());
  return {
    props: {
      term,
      results: data,
    },
  };
};

interface SearchProps extends Record<string, unknown> {
  term: string;
  results: FoundResult;
}
