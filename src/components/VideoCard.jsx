import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';

export default function VideoCard({ video, type }) {
  const navigate = useNavigate();
  const { channelTitle, description, title, thumbnails, publishedAt } =
    video.snippet;
  const [descriptionOn, setDescriptionOn] = useState(false);
  const isList = type === 'list';
  const onDescription = () => {
    setDescriptionOn(true);
  };

  const outDescription = () => {
    setDescriptionOn(false);
  };

  return (
    <li
      className={isList ? 'flex gap-1 ml-5 mb-2' : ''}
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
          className={isList ? 'w-full rounded-lg' : 'w-full rounded-2xl'}
          src={thumbnails.medium.url}
          alt={title}
        />
        {descriptionOn && (
          <div
            className={
              isList
                ? 'bg-black/80 w-full h-full absolute top-0 p-5 rounded-lg  line-clamp-1'
                : 'bg-black/80 w-full h-full absolute top-0 p-5 rounded-2xl '
            }
          >
            <p className={isList ? 'line-clamp-3' : 'line-clamp-5'}>
              {description}
            </p>
          </div>
        )}
      </div>
      <div className={isList ? 'px-1 w-2/3' : 'px-3 w-2/3'}>
        <p className="text-sm font-semibold my-2 line-clamp-2">{title}</p>
        <p
          className={
            isList ? 'text-sm font-semibold mb-1' : 'text-xs opacity-80'
          }
        >
          {channelTitle}
        </p>
        <p className="text-xs opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
