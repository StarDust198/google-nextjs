import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import {
  ImageResult,
  PaginationButtons,
  SearchHeader,
  SearchInfo,
  SearchResult,
} from '../components';
import {
  FoundItem,
  FoundResult,
  ImageItem,
} from '../interfaces/searchResults.interface';
import response from '../testResponse.json';
import responseImages from '../testResponseImages.json';

function Search({ results, term, searchType }: SearchProps) {
  // console.log(results);
  return (
    <>
      <Head>
        <title>{`GoogleNext: results for ${term}`}</title>
      </Head>
      <div>
        {/* Search Header */}
        <SearchHeader />

        {/* Search results */}
        {searchType === 'image' ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 gap-6 my-6">
            {results.items?.map((item) => (
              <ImageResult key={item.link} result={item as ImageItem} />
            ))}
          </div>
        ) : (
          <div className="search-container">
            <SearchInfo
              time={results.searchInformation.formattedSearchTime}
              total={results.searchInformation.formattedTotalResults}
            />
            {results.items?.map((item) => (
              <SearchResult key={item.link} result={item as FoundItem} />
            ))}
          </div>
        )}
        <div className="search-container">
          <PaginationButtons />
        </div>
      </div>
    </>
  );
}

export default Search;

export const getServerSideProps: GetServerSideProps<SearchProps> = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>
) => {
  const term = typeof context.query.term === 'string' ? context.query.term : '';
  const startIndex = context.query.start || '1';
  const searchType = context.query.searchType ? 'image' : '';
  const mock = false;

  const data = mock
    ? context.query.searchType
      ? responseImages
      : response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${term}${
          searchType ? '&searchType=image' : ''
        }&start=${startIndex}`
      ).then((response) => response.json());
  return {
    props: {
      term,
      searchType,
      results: data,
    },
  };
};

interface SearchProps extends Record<string, unknown> {
  term: string;
  searchType: string;
  results: FoundResult;
}
