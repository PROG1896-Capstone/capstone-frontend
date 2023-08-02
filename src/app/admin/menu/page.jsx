"use client";
import { useState, useEffect } from "react";
import ProductInfo from "@/components/ProductInfo/ProductInfo";
import styles from "./adminMenu.module.css";

const AdminMenu = () => {
  const [searchKey, setSearchKey] = useState("");

  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/menuItem")
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((err) => console.log(err));
  }, []);

  const updateProducts = (updatedProduct, index) => {
    let updatedProducts = [...products];
    updatedProducts[index] = updatedProduct;
    setProducts(updatedProducts);
  };

  const removeItem = (id) => {
    const items = products;
    const result = items.filter((item) => item.id !== id);
    setProducts(result);
  };

  const [productKey, setProductKey] = useState(5000);

  const addProduct = () => {
    const newProduct = {
      id: productKey,
      name: `Product ${productKey}`,
      description: "Description of product",
      role: "burger",
      price: 20,
    };
    setProducts([...products, newProduct]);
    setProductKey(productKey + 1);
  };

  return (
    <div className={styles.page}>
      <div className={styles.search_box}>
        <input
          className={styles.search}
          type="text"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Search"
        />
        <div className={styles.btns}>
          <button className={styles.add_btn} onClick={addProduct}>
            Add Item
          </button>
          <button className={styles.save_btn}>Save Changes</button>
        </div>
      </div>
      <div className={styles.table}>
        <h3 className={styles.heading}>Item Name</h3>
        <h3 className={styles.heading}>Description</h3>
        <h3 className={styles.heading}>Category</h3>
        <h3 className={styles.heading}>Price</h3>
        <h3 className={styles.heading}>Image</h3>
        <div className={styles.products}>
          {products
            .filter((product) =>
              product.name.toLowerCase().includes(searchKey.toLowerCase())
            )
            .map((product, index) => (
              <ProductInfo
                key={product.id}
                productData={product}
                updateProducts={(updatedProduct) =>
                  updateProducts(updatedProduct, index)
                }
                remove={() => removeItem(product.id)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
