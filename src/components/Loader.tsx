import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#3B82F6" size={50} />
    </div>
  );
};
export default Loader;
