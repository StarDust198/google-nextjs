import cn from 'classnames';
import { SearchHeaderOptionProps } from './SearchHeaderOption.props';

export const SearchHeaderOption = ({
  title,
  selected,
  Icon,
  className,
  ...props
}: SearchHeaderOptionProps) => {
  return (
    <div
      className={cn(
        'flex space-x-1 items-center border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 cursor-pointer pb-3',
        { 'text-blue-500 border-blue-500': selected },
        className
      )}
      {...props}
    >
      <Icon className="h-6" />
      <p>{title}</p>
    </div>
  );
};
