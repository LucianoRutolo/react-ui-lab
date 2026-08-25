import HeaderIcon from "@/assets/react-ui-lab-header-icon.png";

export const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-gray-800 px-2 py-1 flex justify-between items-center z-10">
      <img className="h-16" src={HeaderIcon} />
      <nav>
        <ul></ul>
      </nav>
    </header>
  );
};
