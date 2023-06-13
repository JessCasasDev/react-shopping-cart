import React from "react";
import ProductPrice from "../UI/ProductPrice";
import { Product } from "../utils/models/Product.model";
import styles from "./CollectionItem.module.css";

type CollectionItemProp = {
  item: Product;
  onClick: (id: string) => void;
};

export default function CollectionItem({ item, onClick }: CollectionItemProp) {
  const image = require(`../assets/images/${item.images[0].thumbnail}`);

  const handleClick = () => {
    onClick(item.id);
  };

  return (
    <div onClick={handleClick} className={styles["item"]}>
      <div className={styles["item-main"]}>
        <div className={styles["item-image"]}>
          <img src={image} alt={item.title} />
        </div>
        <h2 className={styles["item-title"]}>{item.title}</h2>
      </div>
      <div className={styles["item-price-container"]}>
        <ProductPrice product={item} />
      </div>
    </div>
  );
}
