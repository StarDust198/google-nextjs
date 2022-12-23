import cn from 'classnames';
import { SearchInfoProps } from './SearchInfo.props';

export const SearchInfo = ({
  time,
  total,
  className,
  ...props
}: SearchInfoProps) => {
  return (
    <div className="w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52" {...props}>
      <p className="text-sm text-gray-600 mb-5 mt-3">
        About {total} results ({time} seconds)
      </p>
    </div>
  );
};
