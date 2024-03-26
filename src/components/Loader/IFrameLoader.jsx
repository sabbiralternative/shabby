import { FaSpinner } from "react-icons/fa";

const IFrameLoader = ({bgColor, spinnerColor}) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: bgColor,
      }}
    >
      <FaSpinner className="animate-spin" size={30} color={spinnerColor} />
    </div>
  );
};

export default IFrameLoader;
