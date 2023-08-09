import { useState } from "react";
import styles from "./productInfo.module.css";
import ProductInfo from "./ProductInfo";

const ProductInfoDisplay = ({addToUpdateProductsArr, products, setMenuImage, searchKey }) => {
  return (
    <div className={styles.products}>
      {products
        .filter((product) =>
          product.name.toLowerCase().includes(searchKey.toLowerCase())
        )
        .map((product) => (
          <ProductInfo
            key={product.id}
            productData={product}
            addToUpdateProductsArr={addToUpdateProductsArr}
            setMenuImage={setMenuImage}
            remove={() => removeItem(product.id)}
          />
        ))}
    </div>
  );
};

export default ProductInfoDisplay;
