// type Props = {}

export const Footer = () => {
  return (
    <footer className="absolute left-[50%] translate-x-[-50%] bottom-0 pb-6 text-sm text-gray-600 whitespace-nowrap">
      <p>Copyright &copy; {new Date().getFullYear()} Sergey Zhilinskiy</p>
    </footer>
  );
};
