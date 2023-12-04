import React from "react";
import classes from "./styles.module.css";
import { ProductItem } from "../../types/Products";

interface Props {
  data: ProductItem;
}

const ProductCard: React.FC<Props> = ({ data }: Props) => {
  return (
    <div className={classes.card}>
      <img className={classes.image} src={data.image} alt={data.name} />
      <div className={classes.textBlock}>
        <div className={classes.type}>{data.type}</div>
        <div className={classes.name}>{data.name}</div>
        <div className={classes.price}>{data.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
