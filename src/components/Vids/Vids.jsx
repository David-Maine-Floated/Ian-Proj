import { useFilters } from "../../contexts/filterContext";
import { Video } from "../video/Video";
import videoFileNames from "../../videoFileNames"
import { useState, useEffect } from "react";

export const Vids = () => {
  const [activeFiles, setActiveFiles] = useState([]);
  const activeFilters = useFilters()


  useEffect(() => {
    if (activeFilters.length === 0) {
      setActiveFiles(videoFileNames);
    }
  }, [activeFilters]);

  return (
    <div className="videos-main">
      {activeFiles.map((file) => {
        let tag = Math.floor(Math.random() * 3);
        return <Video url={file} key={file} tag={tag} />;
      })}
    </div>
  );
};
