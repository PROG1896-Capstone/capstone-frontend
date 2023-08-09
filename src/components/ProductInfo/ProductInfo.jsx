import { useState } from "react";
import styles from "./productInfo.module.css";

const ProductInfo = ({ productData, addToUpdateProductsArr, remove, setMenuImage}) => {

  let info = productData;

  const [updateMode, setUpdateMode] = useState(false);

  return (
    <div className={styles.info}>
      <input
        className={styles.text}
        type="text"
        value={info.name}
        onChange={(e) => {
          info.name = e.target.value;
          // updateProducts(info);
        }}
        disabled={!updateMode}
      />
      <input
        className={styles.text}
        type="text"
        value={info.description}
        onChange={(e) => {
          info.description = e.target.value;
          // updateProducts(info);
        }}
        disabled={!updateMode}
      />
      <select
        className={styles.select}
        value={info.categoryGroup}
        onChange={(e) => {
          info.categoryGroup = e.target.value;
          // updateProducts(info);
        }}
        disabled={!updateMode}
      >
        <option value="burger">Burger</option>
        <option value="sandwich">Sandwich</option>
      </select>
      <div className={styles.container}>
        <h4 className={styles.dollar_sign}>$</h4>
        <input
          className={styles.text}
          type="text"
          value={info.price}
          onChange={(e) => {
            info.price = e.target.value;
            // updateProducts(info);
          }}
          disabled={!updateMode}
        />
      </div>
      <input
        className={styles.file}
        type="file"
        checked={info.file}
        onChange={(e) => {
          info.fileName = e.target.value;
          info.file = e.target.files[0]
          // setMenuImage(e.target.files)
          // updateProducts(info);
        }}
        disabled={!updateMode}
      />
      <div className={styles.btns}>
        <button
          className={styles.edit}
          onClick={() => {
            updateMode ? addToUpdateProductsArr(info) : null
            //push the data to an array
            setUpdateMode(!updateMode) //Disabling edit mode
          }}
        >
          {updateMode ? "Save" : "Edit"}
        </button>
        <button className={styles.delete} onClick={remove}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
