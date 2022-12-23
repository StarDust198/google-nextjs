import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FoundItem } from '../../interfaces/searchResults.interface';

export interface SearchResultProps
  extends Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      'title'
    >,
    FoundItem {}
