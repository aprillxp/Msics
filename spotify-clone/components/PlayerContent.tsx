"use client";

import { Song } from "@/types/types";

import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";

interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  return (
    <div className="grid grid-cols md:grid-cols-3 h-full">
      <div
        className="
        flex
        w-full
        justify-start
      "
      >
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>

      <div
        className="
          flex
          md:hidden
          col-auto
          
        "
      ></div>
    </div>
  );
};

export default PlayerContent;
