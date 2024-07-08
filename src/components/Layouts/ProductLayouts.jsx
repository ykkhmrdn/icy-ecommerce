import { CartCard } from "../Fragments/Cart";
import ProductListLayout from "./ProductListLayouts";


export function ProductLayouts() {
  return (
    <>
    <div className="flex flex-col-reverse justify-center gap-6 mx-auto md:flex-row">
    <CartCard />
    <ProductListLayout />
    </div>
    </>
  );
}