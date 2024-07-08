import { Typography } from "@material-tailwind/react";
import NavbarMenu from "../components/Fragments/NavbarMenu";
import { ProductLayouts } from "../components/Layouts/ProductLayouts";


export function ProductListSection() {
  
  return (
    <>
      <NavbarMenu />
      <section className="px-8 py-10">
        <div className="mx-auto mb-16 text-center">
          <Typography className="text-lg font-medium">
            Discover Your Perfect Pair
          </Typography>
          <Typography variant="h1" className="my-4 text-4xl">
            Find What You Need
          </Typography>
          <Typography className="!font-normal text-gray-500 mx-auto max-w-2xl">
            Enhance your footwear collection with our specialized search. Find
            shoes by style, comfort, or brand to perfectly match your needs.
          </Typography>
        </div>
       <ProductLayouts />
      </section>
    </>
  );
}

export default ProductListSection;
