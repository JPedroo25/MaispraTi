import { useCart } from "./context/CartContext";

const products = [
  { id: 1, name: "Produto 1", price: 50 },
  { id: 2, name: "Produto 2", price: 80 },
  { id: 3, name: "Produto 3", price: 120 },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Preço: R$ {product.price}</p>
            <button onClick={() => addToCart(product)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
