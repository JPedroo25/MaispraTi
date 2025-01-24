import { useCart } from "./context/CartContext";

const Cart = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return <p>Seu carrinho está vazio.</p>;
  }

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - R$ {item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>
        Total: R${" "}
        {cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )}
      </p>
    </div>
  );
};

export default Cart;
