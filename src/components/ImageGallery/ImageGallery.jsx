import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';
import styles from './ImageGallery.module.css';

export const ImageGallery = ({items, openModal}) => {
  const {gallery} = styles;

  return (
    <ul className={gallery}>
      {items.map(item => <ImageGalleryItem key={nanoid()} itemData={item} openModal={openModal}/>)}
    </ul>
  )
}

export default ImageGallery;
