import { User } from './User';

type Props = {};

export const Header = (props: Props) => {
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <User />
      </div>
    </header>
  );
};
