export interface SearchInfo {
  formattedSearchTime: string;
  formattedTotalResults: string;
  // searchTime: number;
  // totalResults: string;
}

export interface FoundItem {
  link: string;
  formattedUrl: string;
  title: string;
  htmlSnippet: string;
}

export interface FoundResult {
  searchInformation: SearchInfo;
  items: FoundItem[];
}
