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
    } else {
      let newFiles = []
      for(let file of videoFileNames) {
        let {path, filter} = file 
        if(activeFilters.includes(filter)) {
          newFiles.push(file)
        }
      }
      setActiveFiles(newFiles);

    }

  }, [activeFilters]);

  return (
    <div className="videos-main">
      {activeFiles.map((file) => {
        let filter = Math.floor(Math.random() * 3) + 1;
        return <Video url={file.path} key={file.path} filter={filter} />;
      })}
    </div>
  );
};
