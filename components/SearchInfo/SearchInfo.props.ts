import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SearchInfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  time: string;
  total: string;
}
