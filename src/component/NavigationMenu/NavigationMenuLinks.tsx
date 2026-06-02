import { Link } from "react-router";

interface LinkData {
  path: string;
  txt: string;
  icon: React.ElementType;
}

interface Props {
  LinksData: LinkData[];
  isOpen: boolean
}
const NavigationMenuLinks = ({ LinksData, isOpen }: Props) => {
  return (
    <>
      {LinksData.map((linkData) => {
        const Icon = linkData.icon;

        return (
          <li
            key={linkData.path}
            className={`p-2 rounded-[10px] hover:bg-[#657af7] group cursor-pointer ${isOpen ? "" : "flex justify-center"}`}
          >
            <Link to={linkData.path} className={`w-full flex items-center gap-2 ${isOpen ? "" : "flex justify-center"}`}>
              <Icon className="size-5 group-hover:text-[#f7efc8]" />
              {isOpen && <span>{linkData.txt}</span>}

            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavigationMenuLinks;
