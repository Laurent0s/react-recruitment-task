import StatsItemCSS from "./StatsItem.module.scss";

export const StatsItem = ({
  statName,
  stat,
}: {
  statName?: string;
  stat?: string | number;
}) => {
  return (
    <div
      className={`${StatsItemCSS.stat} flex justify-between font-medium text-left`}
    >
      <p>{statName}</p>
      <p>{stat}</p>
    </div>
  );
};
