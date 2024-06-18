import { Loader } from "../../Widgets/Loader/Loader";

export const PageLoader = () => {
  return (
    <div className="page-loader-con flex hidden justify-center items-center bg-zinc-900 top-0 absolute w-full h-full">
      <Loader />
    </div>
  );
};
