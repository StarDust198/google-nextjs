import { DetailedHTMLProps, HTMLAttributes, FC, SVGProps } from 'react';

export interface SearchHeaderOptionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  selected: boolean;
  Icon: FC<SVGProps<SVGSVGElement>>;
}
