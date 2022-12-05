import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const { channelTitle, description, title, thumbnails, publishedAt } =
    video.snippet;
  const [descriptionOn, setDescriptionOn] = useState(false);

  const onDescription = () => {
    setDescriptionOn(true);
  };

  const outDescription = () => {
    setDescriptionOn(false);
  };

  return (
    <li
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <div
        className="w-full relative"
        onMouseEnter={onDescription}
        onMouseLeave={outDescription}
      >
        <img
          src={thumbnails.medium.url}
          alt={title}
          className="w-full rounded-2xl"
        />
        {descriptionOn && (
          <div className="bg-black/80 w-full h-full absolute top-0 p-5 rounded-2xl ">
            <p className="line-clamp-5">{description}</p>
          </div>
        )}
      </div>
      <div className="px-3">
        <p className="text-sm font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-xs opacity-80">{channelTitle}</p>
        <p className="text-xs opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
