import { useEffect, useState } from "react";
import { Youtube_Video_Api } from "../Constant/YoutubeVideoAPI";
import { VideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
export const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(Youtube_Video_Api);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        );
      })}
    </div>
  );
};
