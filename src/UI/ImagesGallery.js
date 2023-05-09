import { useState } from "react";
import styles from "./ImagesGallery.module.css";

export default function ImagesGallery({ images }) {
  const [mainPicture, setMainPicture] = useState(images[0].original);
  const [imageSelectedIndex, setImageSelectedIndex] = useState(0);
  
  const changeImageHandler = (event) => {
    const index = +event.target.id;
    const image = images[index].original;
    setImageSelectedIndex(index);
    setMainPicture(image);
  };

  function getImageClassNames(index) {
    const ngClass =
      imageSelectedIndex === index
        ? styles["image-gallery-option-image--selected"]
        : "";
    return `${styles["image-gallery-option-image"]} ${ngClass}`;
  }

  return (
    <div className={styles["image-gallery"]}>
      <div className={styles["image-gallery-main"]}>
        <img src={require(`../assets/images/${mainPicture}`)} alt="Gallery" />
      </div>
      <div className={styles["image-gallery-options"]}>
        {images.map((image, i) => (
          <div key={`image_${i}`}>
            <img
              id={i}
              onClick={changeImageHandler}
              className={getImageClassNames(i)}
              src={require(`../assets/images/${image.thumbnail}`)}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
