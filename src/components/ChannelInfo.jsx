import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(['channel', id], () =>
    youtube.channelImageURL(id)
  );
  return (
    <div className="flex my-4 mb-8 items-center">
      {url && <img src={url} alt={name} className="w-8 h-8 rounded-full" />}
      <p className="text-lg font-medium ml-3">{name}</p>
    </div>
  );
}
