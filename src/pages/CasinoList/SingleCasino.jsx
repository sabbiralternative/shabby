import { useEffect, useState } from "react";

const SingleCasino = () => {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setUrl(localStorage.getItem("casinoUrl"));
    }, 100);
  }, []);
  return (
    <>
      <iframe
        src={url}
        title="casino video"
        style={{ border: "0px", height: "100vh", width: "100vw" }}
      ></iframe>
    </>
  );
};

export default SingleCasino;
