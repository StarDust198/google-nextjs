import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SearchInfoProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  time: string;
  total: string;
}
