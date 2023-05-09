import styles from "./ProductPrice.module.css";

export default function ProductPrice({product}) {
    
  return (
    <div>
      <div className={styles["product-price"]}>
        {product.finalPrice}
        {product.discountPercentage !== null ? (
          <span className={styles["product-price-tag-discount"]}>
            {product.discountPercentage}
          </span>
        ) : (
          <></>
        )}
      </div>
      {product.discountPercentage !== null ? (
        <div className={styles["product-price-discount"]}>{product.price}</div>
      ) : (
        <></>
      )}
    </div>
  );
}
