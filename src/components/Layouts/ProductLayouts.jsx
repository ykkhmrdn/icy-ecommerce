import { ProductListCard} from "../Elements/Products/ProductsCard";

const products = [
  {
    img: "/images/Nike Dunk.jpg",
    name: "Nike Dunk Low Retro White Black",
    price: "Rp 1,300,000",
  },
  {
    img: "/images/Nike Air Jordan.jpg",
    name: "Nike Air Jordan Mid Red Panda",
    price: "Rp 1,800,000",
  },
  {
    img: "/images/Nike Cortez.jpg",
    name: "Nike Cortez Classic Leather",
    price: "Rp 1,600,000",
  },
  {
    img: "/images/Nike Mid Blazer.jpg",
    name: "Nike Blazer Mid '77 Vintage",
    price: "Rp 1,300,000",
  },
  {
    img: "/images/Nike Defy.jpg",
    name: "Nike Defy All Day",
    price: "Rp 700,000",
  },
  {
    img: "/images/Nike Air Force.jpg",
    name: "Nike Air Force 1 Triple White",
    price: "Rp 1,350,000",
  },
];

const ProductLayout = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
        {products.map(({ img, name, price }, index) => (
          <ProductListCard key={index} img={img} name={name} price={price}/>
        ))}
      </div>
    </div>
  );
};


export default ProductLayout;
