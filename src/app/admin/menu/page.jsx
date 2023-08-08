"use client";
import { useState, useEffect } from "react";
import ProductInfo from "@/components/ProductInfo/ProductInfo";
import styles from "./adminMenu.module.css";

const AdminMenu = () => {
  const [searchKey, setSearchKey] = useState("");

  let [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("http://localhost:3000/api/menuItem")
      .then((response) => response.json())
      .then((data) => {
        let categoryGroups = [];
        let fetchedProducts = [];

        categoryGroups = data.data;
        categoryGroups.map((categoryGroup) => {
          fetchedProducts = [...fetchedProducts, ...categoryGroup.data];
        });
        setProducts(fetchedProducts);
      })

      .catch((err) => console.log(err));
  };

  useEffect(() => getProducts(), []);

  const updateProducts = (updatedProduct, index) => {
    let updatedProducts = [...products];
    updatedProducts[index] = updatedProduct;
    setProducts(updatedProducts);
  };

  const saveProducts = () => {
    products.map((product) => {
      fetch("http://localhost:3000/api/menuItem", {
        method: "PATCH",
        body: JSON.stringify({
          id: product.id,
          name: product.name,
          description: product.description,
          categoryGroup: product.categoryGroup,
          price: product.price,
          image: "img-menu-item.png",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  };

  const removeItem = (id) => {
    const items = products;
    const result = items.filter((item) => item.id !== id);
    setProducts(result);
  };

  const addProduct = () => {
    fetch("http://localhost:3000/api/menuItem", {
      method: "POST",
      body: JSON.stringify({
        name: "Name of product",
        description: "Description of product",
        categoryGroup: "burger",
        price: 20,
        image: "img-menu-item.png",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .then(getProducts)
      .catch((err) => {
        console.log(err.message);
      });
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
          <button className={styles.save_btn} onClick={saveProducts}>
            Save Changes
          </button>
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
