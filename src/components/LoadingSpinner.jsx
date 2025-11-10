import { MoonLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <MoonLoader color={"#8F00FF"} />
    </div>
  );
};
export default LoadingSpinner;
