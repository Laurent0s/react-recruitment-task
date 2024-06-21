import { NavLink } from "react-router-dom";
import { NavigationItem } from "../../components/NavigationItem/NavigationItem";

export const Navigation = ({ name }: { name?: string }) => {
  return (
    <div className="flex gap-2">
      <NavLink to="/">
        <NavigationItem text="Home" />
      </NavLink>
      <NavigationItem text="/" />
      <NavigationItem text={name} />
    </div>
  );
};
