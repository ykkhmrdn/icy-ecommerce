import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Input,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function NavItem({ children }) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        color="blue-gray"
        className="flex items-center gap-2 font-medium text-blue-gray-700"
      >
        {children}
      </Typography>
    </li>
  );
}

function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <>
      <Navbar shadow={false} fullWidth className="border-0">
        <div className="container flex items-center justify-between mx-auto">
          <Typography color="blue-gray" className="text-lg font-bold">
            Material Tailwind
          </Typography>
          <ul className="items-center hidden gap-6 ml-10 lg:flex">
            <NavItem>
              <RectangleStackIcon className="w-5 h-5" />
              Pages
            </NavItem>
            <NavItem>
              <UserCircleIcon className="w-5 h-5" />
              Account
            </NavItem>
            <NavItem>
              <Squares2X2Icon className="w-5 h-5" />
              Blocks
            </NavItem>
            <NavItem>
              <CommandLineIcon className="w-5 h-5" />
              Docs
            </NavItem>
          </ul>
          <div className="items-center hidden gap-4 lg:flex">
            <Link to="/login">
              <Button variant="text">Log in</Button>
            </Link>
            <Link to={"/products"}>
              <Button color="gray">buy now</Button>
            </Link>
          </div>
          <IconButton
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="inline-block ml-auto lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="w-6 h-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="w-6 h-6" />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className="container px-2 pt-4 mx-auto mt-3 border-t border-blue-gray-50">
            <ul className="flex flex-col gap-4">
              <NavItem>
                <RectangleStackIcon className="w-5 h-5" />
                Pages
              </NavItem>
              <NavItem>
                <UserCircleIcon className="w-5 h-5" />
                Account
              </NavItem>
              <NavItem>
                <Squares2X2Icon className="w-5 h-5" />
                Blocks
              </NavItem>
              <NavItem>
                <CommandLineIcon className="w-5 h-5" />
                Docs
              </NavItem>
            </ul>
            <div className="flex items-center gap-4 mt-6 mb-4">
              <Link to="/login">
                <Button variant="text">Log in</Button>
              </Link>
              <Link to={"/products"}>
                <Button color="gray">buy now</Button>
              </Link>
            </div>
          </div>
        </Collapse>
      </Navbar>
      <header className="p-8 bg-white">
        <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
          <div className="container px-4 mx-auto text-center">
            <Typography className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary">
              Exciting News! Introducing our latest innovation
            </Typography>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
            >
              Get ready to experience a new level of{" "}
              <span className="leading-snug text-green-500 ">performance</span>{" "}
              and{" "}
              <span className="leading-snug text-green-500">functionality</span>
              .
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
              The time is now for it to be okay to be great. For being a bright
              color. For standing out.
            </Typography>
            <div className="grid w-full mt-8 place-items-start md:justify-center">
              <div className="flex flex-col w-full gap-4 mb-2 md:flex-row">
                <Input color="gray" label="Enter your email" size="lg" />
                <Button color="gray" className="w-full px-4 md:w-[12rem]">
                  get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Home;
