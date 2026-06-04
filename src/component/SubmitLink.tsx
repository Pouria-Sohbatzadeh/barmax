import { Link } from "react-router";
import Button from "./Button";

interface Props {
  path: string,
  txt: string
}

const SubmitLink = ({path, txt}: Props) => {
  return (
    <Link to={path}>
      <Button type="button" className="gap-3 pt-[14px] pb-[14px]">
        <div className="p-[2px]  border border-white rounded-md flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 text-white"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <span>{txt}</span>
      </Button>
    </Link>
  );
};

export default SubmitLink;
