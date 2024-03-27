import { useEffect, useRef } from "react";
import "./video.css";

export const Video = ({ url, tag }) => {
  const videoRef = useRef(null);


  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src={`/Video/${url}`}
        type="video/mp4"
        autoPlay
        onEnded={handleVideoEnded}
        muted
        className="fit-video"
        controls
      ></video>
    </div>
  );
};
