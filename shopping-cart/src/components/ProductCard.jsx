import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <img
                src={product.image}
                alt={product.title}
                className="product-image"
            />

            <div className="product-info">
                <span className="product-category">
                    {product.category}
                </span>

                <h3>{product.title}</h3>

                <div className="product-bottom">
                    <span className="product-price">
                        ${product.price.toFixed(2)}
                    </span>

                    <button onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;