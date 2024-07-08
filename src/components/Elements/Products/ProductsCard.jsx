import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

export function ProductListCard({ img, name, price }) {
  return (
    <Card>
      <CardHeader shadow={false} floated={false} className="h-48">
        <img
          src={img}
          alt={img}
          className="object-cover w-full h-full min-w-[280px]"
        />
      </CardHeader>
      <CardBody>
        <div className="flex flex-col items-start justify-between gap-2 mb-2">
          <Typography className="font-bold text-congress-blue-800">
            {name}
          </Typography>
          <Typography className="font-bold text-congress-blue-950">
            {price}
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="shadow-none bg-blue-gray-900/10 text-blue-gray-900 hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

ProductListCard.propTypes = {
  img: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
};

export default ProductListCard;
