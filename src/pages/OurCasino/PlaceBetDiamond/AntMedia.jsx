import { WebPlayer } from "@antmedia/web_player";
import { useEffect, useRef } from "react";

const AntMedia = ({ server, streamKey }) => {
  const bigVideo = useRef(null);
  const embeddedPlayerRef = useRef(null);

  useEffect(() => {
    if (server && streamKey) {
      const playOrderLocal = ["webrtc", "hls", "dash"];
      embeddedPlayerRef.current = new WebPlayer(
        {
          streamId: streamKey,
          httpBaseURL: server,
          videoHTMLContent:
            '<video id="video-player" class="video-js vjs-default-skin vjs-big-play-centered"  playsinline style="width:100%;height:100%;object-fit:cover"></video>',
          playOrder: playOrderLocal,
        },
        bigVideo.current
      );

      embeddedPlayerRef.current
        .initialize()
        .then(() => {
          embeddedPlayerRef.current.play();
        })
        .catch((error) => {
          console.error("Error while initializing embedded player: " + error);
        });
    }
  }, [server, streamKey]);

  useEffect(() => {
    if (bigVideo.current) {
      const videoElement = document.getElementById("videoPlayer");

      if (videoElement.style.display === "none") {
        videoElement.style.display = "block";
      }
    }
  }, [bigVideo]);

  return (
    <div
      id="videoPlayer"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        // display: "none",
      }}
      ref={bigVideo}
    ></div>
  );
};

export default AntMedia;
