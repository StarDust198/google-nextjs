export interface SearchInfo {
  formattedSearchTime: string;
  formattedTotalResults: string;
}

interface Item {
  link: string;
  title: string;
}

export interface FoundItem extends Item {
  formattedUrl: string;
  htmlSnippet: string;
}

export interface ImageItem extends Item {
  displayLink: string;
  image: {
    contextLink: string;
  };
}

export interface FoundResult {
  searchInformation: SearchInfo;
  items: FoundItem[] | ImageItem[];
}
