import { useCart } from "../context/CartContext";

const Navbar = ({ onCartClick }) => {
    const { totalItems } = useCart();

    return (
        <nav className="navbar">
            <div className="logo">
                ShopCart
            </div>

            <button
                className="cart-button"
                onClick={onCartClick}
            >
                🛒 Cart

                {totalItems > 0 && (
                    <span className="cart-count">
                        {totalItems}
                    </span>
                )}
            </button>
        </nav>
    );
};

export default Navbar;