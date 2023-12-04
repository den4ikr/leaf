import React from "react";
import classes from "./styles.module.css";
import ArrowBackIcon from "../../icons/ArrowBackIcon";
import products from "../../constants/products";
import ProductCard from "../../components/ProductCard";

const MenuPage: React.FC = () => {
  return (
    <div className={classes.root}>
      <div>
        <ArrowBackIcon />
        <h3 className={classes.title}>Продукція</h3>
      </div>
      <div className={classes.row}>
        {products.map((product) => (
          <div key={product.name} className={classes.rowItem}>
            <ProductCard data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
