import { useLoaderData } from "react-router-dom";
import ImagesGallery from "../UI/ImagesGallery";
import cartIcon from "../assets/images/icon-cart.svg";

import styles from "./CollectionDetail.module.css";
import data from "../assets/data/data.json";
import ProductPrice from "../UI/ProductPrice";
import QuantityButton from "../UI/QuantityButton";
import { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import { Product } from "../utils/models/Product.model";
import React from "react";

export function loader({ params }: any) {
  const product = data.data.find(
    (product: Product) => product.id === params.productId
  );
  return { product };
}
export default function CollectionDetail() {
  const { product } = useLoaderData() as { product: Product };
  const [quantity, setQuantity] = useState(0);
  const cartContext = useContext(CartContext);

  const addtoCartHandler = () => {
    cartContext.addProduct(product.id, quantity);
    setQuantity(0);
  };

  const increaseHandler = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const decreaseHandler = () => {
    setQuantity((quantity) => {
      if (quantity > 1) {
        return quantity - 1;
      }
      return 0;
    });
  };
  return (
    <main className={styles["container"]}>
      <section>
        <ImagesGallery images={product.images} />
      </section>
      <section>
        <p className={styles["company-name"]}>SNEAKER COMPANY</p>
        <h1 className={styles["product-name"]}>{product.title}</h1>
        <div>
          <p className={styles["product-description"]}>{product.description}</p>
          <ProductPrice product={product} />
        </div>
        <div className={styles["product-add-to-cart"]}>
          <QuantityButton
            decrease={decreaseHandler}
            increase={increaseHandler}
            quantity={quantity}
          />
          <button
            className={styles["product-add-to-cart-button"]}
            onClick={addtoCartHandler}
          >
            <div>
              <img src={cartIcon} alt="Add to Cart" />
            </div>
            <div> Add to cart</div>
          </button>
        </div>
      </section>
    </main>
  );
}
