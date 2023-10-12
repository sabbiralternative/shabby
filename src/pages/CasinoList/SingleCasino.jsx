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
        width="100%"
        height={window.innerWidth * (9 / 16)}
        style={{ border: "0px" }}
      ></iframe>
    </>
  );
};

export default SingleCasino;
