import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = ({ onClose }) => {
    const {
        cart,
        totalItems,
        totalPrice
    } = useCart();

    return (
        <div className="cart-panel">

            <div className="cart-header">
                <h2>Your Cart</h2>

                <button onClick={onClose}>
                    ✕
                </button>
            </div>

            {cart.length === 0 ? (
                <div className="empty-cart">
                    <h3>Your cart is empty</h3>
                    <p>Add some products to get started.</p>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </div>

                    <div className="cart-summary">

                        <div>
                            <span>Total Items</span>
                            <span>{totalItems}</span>
                        </div>

                        <div>
                            <span>Total Price</span>

                            <strong>
                                ${totalPrice.toFixed(2)}
                            </strong>
                        </div>

                        <button className="checkout-button">
                            Checkout
                        </button>

                    </div>
                </>
            )}

        </div>
    );
};

export default Cart;