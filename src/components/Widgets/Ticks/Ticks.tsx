import { truncate } from "../../../utilities/misc";

export const Ticks = ({ ticks }: { ticks: string[] }) => {
  return ticks.map((tick: string) => {
    return (
      <>
        <span className="tick dot w-1 h-1 bg-zinc-500 rounded-full"></span>
        <span className="tick text-xs text-zinc-500">{truncate(tick, 9)}</span>
      </>
    );
  });
};
