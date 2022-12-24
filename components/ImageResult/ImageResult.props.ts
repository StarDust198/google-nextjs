import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ImageItem } from '../../interfaces/searchResults.interface';

export interface ImageResultProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  result: ImageItem;
}
