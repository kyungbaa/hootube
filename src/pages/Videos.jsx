import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], async () => {
    return fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
      .then((res) => res.json())
      .then((data) => data.items);
  });

  return (
    <>
      Videos{keyword ? `🔍${keyword}` : `🔥`}
      {isLoading && <p>Loading....</p>}
      {error && <p>Something is worng. </p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
