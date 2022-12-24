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
import response from '../response.json';
import responseImages from '../responseImages.json';

function Search({ results, term, searchType }: SearchProps) {
  // console.log(results, searchType);

  return (
    <>
      <Head>
        <title>{`GoogleNext: results for ${term}`}</title>
        {/* <title>Search Results</title> */}
      </Head>
      <div>
        {/* Search Header */}
        <SearchHeader />

        {/* Search results */}
        {searchType === 'image' ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 gap-4 mt-4">
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
  const mock = true;

  const data = mock
    ? context.query.searchType
      ? responseImages
      : response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${term}&searchType=${searchType}&start=${startIndex}`
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
