import { FaSpinner } from "react-icons/fa";

const ImageUploadMessage = ({ imageUploadMessage }) => {
  return (
    <div
      className="Modal-Background "
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="card-add-bank"
        style={{
          position: "relative",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          maxWidth: "200px",
        }}
      >
        <span style={{ marginBottom: "4px" }}> {imageUploadMessage}</span>
        <FaSpinner className="animate-spin" size={30} color="black" />
      </div>
    </div>
  );
};

export default ImageUploadMessage;
