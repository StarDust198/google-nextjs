import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PaginationButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  startIndex: number;
}
