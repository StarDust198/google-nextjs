import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FoundItem } from '../../interfaces/searchResults.interface';

export interface SearchResultProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  result: FoundItem;
}
