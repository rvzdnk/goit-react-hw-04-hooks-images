import React from 'react';
import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({itemData, openModal}) => {
  const {item,  item_pic} = styles;
  const {webformatURL, tags, largeImageURL} = itemData;

  return (
    <li className={item}>
      <img className={item_pic} src={webformatURL} alt={tags} onClick={() => openModal(largeImageURL, tags)}/>
    </li>
  )
}


export default ImageGalleryItem;
