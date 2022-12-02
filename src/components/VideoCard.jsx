import React from 'react';
import { formatAgo } from '../util/date';

export default function VideoCard({ video }) {
  const { channelTitle, liveBroadcastContent, title, thumbnails, publishedAt } =
    video.snippet;

  return (
    <li>
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="w-full rounded-2xl"
      />
      <div className="px-3">
        <p className="text-sm font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-xs opacity-80">{channelTitle}</p>
        <p className="text-xs opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
