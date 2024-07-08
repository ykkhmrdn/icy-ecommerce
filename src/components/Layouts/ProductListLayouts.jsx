import { ProductListCard } from "../Elements/Products/ProductsCard";
import { useCart } from "../Elements/Cart/CartContext";

export const product = [
  {
    id: 1,
    img: "/images/Nike Dunk.jpg",
    name: "Nike Dunk Low Retro White Black",
    price: 300000,
  },
  {
    id: 2,
    img: "/images/Nike Air Jordan.jpg",
    name: "Nike Air Jordan Mid Red Panda",
    price: 1800000,
  },
  {
    id: 3,
    img: "/images/Nike Cortez.jpg",
    name: "Nike Cortez Classic Leather",
    price: 1600000,
  },
  {
    id: 4,
    img: "/images/Nike Mid Blazer.jpg",
    name: "Nike Blazer Mid '77 Vintage",
    price: 1300000,
  },
  {
    id: 5,
    img: "/images/Nike Defy.jpg",
    name: "Nike Defy All Day",
    price: 700000,
  },
  {
    id: 6,
    img: "/images/Nike Air Force.jpg",
    name: "Nike Air Force 1 Triple White",
    price: 1350000,
  },
];

const ProductListLayout = () => {
  const { handleAddToCart } = useCart();
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
        {product.map((productItem) => (
          <ProductListCard
            key={productItem.id}
            {...productItem}
            handleAddToCart={() => handleAddToCart(productItem)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListLayout;
