import cn from 'classnames';
import Parser from 'html-react-parser';
import { SearchResultProps } from './SearchResult.props';

export const SearchResult = ({
  link,
  formattedUrl,
  title,
  htmlSnippet,
  className,
  ...props
}: SearchResultProps) => {
  return (
    <div className={cn('max-w-xl mb-8', className)} {...props}>
      <div className="group">
        <a href={link} className="text-sm truncate">
          {formattedUrl}
        </a>
        <a href={link} className="group-hover:underline decoration-blue-800">
          <h2 className="text-xl font-medium text-blue-800 truncate">
            {title}
          </h2>
        </a>
      </div>
      <p className="text-gray-600">{Parser(htmlSnippet)}</p>
    </div>
  );
};
