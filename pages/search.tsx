import Head from 'next/head';
import { SearchHeader } from '../components/SearchHeader/SearchHeader';

function Search() {
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
