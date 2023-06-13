import { Product } from "./Product.model";

export interface Cart extends Product {
    quantity: number;
}