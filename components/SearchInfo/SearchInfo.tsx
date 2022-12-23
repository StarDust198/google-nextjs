import cn from 'classnames';
import { SearchInfoProps } from './SearchInfo.props';

export const SearchInfo = ({
  time,
  total,
  className,
  ...props
}: SearchInfoProps) => {
  return (
    <p className={`text-sm text-gray-600 mb-5 mt-3 ${className}`} {...props}>
      About {total} results ({time} seconds)
    </p>
  );
};
