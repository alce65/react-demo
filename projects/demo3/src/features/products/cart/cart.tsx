
import { useSelector } from "react-redux";
import type { RootState } from "src/store";

export const Cart: React.FC = () => {

const {products} =  useSelector((state: RootState) => state.cart);

  return (
    <div>
      <h1>Cart</h1>
      <p>This is the cart page.</p>
      {/* Cart content will go here */}
        <ul>
            {products.map((product) => (
            <li key={product.id}>
                {product.name} - ${product.price}
            </li>
            ))}
        </ul>
    </div>
  ); 
}
