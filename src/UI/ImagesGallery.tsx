import React from "react";
import { useState } from "react";
import { Images } from "../utils/models/Product.model";
import styles from "./ImagesGallery.module.css";

export default function ImagesGallery({ images }: { images: Images[] }) {
  const [mainPicture, setMainPicture] = useState<string>(images[0].original);
  const [imageSelectedIndex, setImageSelectedIndex] = useState<number>(0);

  const changeImageHandler = (event: React.MouseEvent<HTMLImageElement>) => {
    if (event.target) {
      const index = +(event.target as HTMLImageElement).id;
      const image = images[index].original;
      setImageSelectedIndex(index);
      setMainPicture(image);
    }
  };

  function getImageClassNames(index: number) {
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
          <div key={`image_${image.thumbnail}`}>
            <img
              id={`${i}`}
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
