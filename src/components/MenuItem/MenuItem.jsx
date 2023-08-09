import styles from "./menuItem.module.css";

export const MenuItem = ({ id, imgSrc, imgAlt, name, description, price }) => {
  const addToCart = () => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let subtotal = JSON.parse(localStorage.getItem("subtotal"));

    const itemIsPresent = () => {
      let present = false;

      cartItems.map((item) => {
        if (item.id === id) present = true;
      });

      return present;
    };

    const newItem = { menuItemId: id, name: name, price: price, quantity: 1, note: ""};

    if (!cartItems) {
      cartItems = [newItem];
      subtotal = price;
    } else if (cartItems && !itemIsPresent()) {
      cartItems = [...cartItems, newItem];
      subtotal = parseInt(subtotal) + parseInt(price);
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("subtotal", JSON.stringify(subtotal));
    alert("Item added");
  };

  return (
    <div className={styles.container}>
      <img className={styles.img} src={imgSrc} alt={imgAlt} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <h4 className={styles.price}>${price}</h4>
      <button
        className={styles.btn}
        onClick={() => {
          addToCart();
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default MenuItem;
