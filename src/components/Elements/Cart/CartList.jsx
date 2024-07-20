import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useCart } from "./CartContext";

const CartList = () => {
  const { cart } = useCart();
  return (
    <Card>
      <CardBody>
        <div className="flex items-center justify-between gap-8 mb-4">
          <Typography variant="h5" color="blue-gray" className="">
            Cart List
          </Typography>
          <Typography
            as="a"
            href="#"
            variant="small"
            color="blue"
            className="font-bold"
          >
            View all
          </Typography>
        </div>
        <div className="divide-y divide-gray-200">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 py-2 pl-2 pr-8"
            >
              <div className="flex flex-col gap-1">
                <Typography
                  variant="small"
                  color="gray"
                  className="font-semibold"
                >
                  {item.name}
                </Typography>
                <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500">
                  {item.price}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default CartList;