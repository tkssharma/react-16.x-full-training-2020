import React from 'react';
import Video from './video';
import './videos.scss';

export default function Videos({ type, videos, onVideoClick }) {
    return (
        <div className="videos-grid">
            {videos.map(video => (
                <Video
                    key={video.id}
                    video={video}
                    onVideoClick={onVideoClick}
                />
            ))}
        </div>
    )
}
