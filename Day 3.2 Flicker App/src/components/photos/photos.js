import React from 'react';
import './photo';
import './photos.scss';
import Photo from './photo';

export default function Photos({ type, photos, onImageClick }) {
    return (
        <div className="photos-grid">
            {photos.map(photo => (
                <Photo
                    key={photo.id}
                    type={type}
                    photo={photo}
                    onImageClick={onImageClick}
                />
            ))}
        </div>
    )
}
