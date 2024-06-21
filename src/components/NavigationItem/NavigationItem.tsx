import NavigationCSS from "./NavigationItem.module.scss";

export const NavigationItem = ({ text }: { text?: string }) => {
  return (
    <h2
      className={`${NavigationCSS.nav_text} text-base font-bold text-left capitalize`}
    >
      {text}
    </h2>
  );
};
