import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./button.scss";

interface ButtonProps {
  number?: number;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  isCurrentPage?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: IconProp;
}

export const Button: React.FC<ButtonProps> = ({
  number,
  isFirstPage,
  isLastPage,
  isCurrentPage,
  onClick,
  icon,
}) => {
  return (
    <button
      className={`page_button h-8 w-8 ${isFirstPage ? "disabled_button" : ""} ${
        isLastPage ? "disabled_button" : ""
      } ${isCurrentPage ? "current_button" : "bg-transparent"}`}
      onClick={onClick}
      disabled={isFirstPage || isLastPage}
    >
      {number ? number : ""}
      {icon ? <FontAwesomeIcon icon={icon} /> : ""}
    </button>
  );
};
