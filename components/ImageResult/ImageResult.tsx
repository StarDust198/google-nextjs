import cn from 'classnames';
import { ImageResultProps } from './ImageResult.props';

export const ImageResult = ({
  result: {
    link,
    title,
    displayLink,
    image: { contextLink },
  },
  className,
  ...props
}: ImageResultProps) => {
  return (
    <div className={cn('group', className)} {...props}>
      <a href={contextLink}>
        <img
          src={link}
          alt={title}
          className="group-hover:shadow-xl max-w-[90vw] h-60 w-full object-contain"
        />
      </a>
      <a href={contextLink}>
        <h2 className="group-hover:underline max-w-[90vw] truncate text-xl">
          {title}
        </h2>
      </a>
      <a href={contextLink}>
        <p className="group-hover:underline max-w-[90vw] text-gray-600">
          {displayLink}
        </p>
      </a>
    </div>
  );
};
