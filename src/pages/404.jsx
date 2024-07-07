// import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="grid h-screen px-8 mx-auto text-center place-items-center">
      <div>
        <ExclamationTriangleIcon className="w-20 h-20 mx-auto" />
        <Typography
          variant="h1"
          className="mt-10 !text-3xl !leading-snug md:!text-4xl text-congress-blue-950"
        >
          {error.statusText || error.message} <br /> It looks like something
          went wrong.
        </Typography>
        <Typography className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          Don&apos;t worry, our team is already on it.Please try refreshing the
          page or come back later.
        </Typography>
        <Link to="/">
          <Button className="w-full px-4 md:w-[8rem] bg-congress-blue-950">
            back home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
