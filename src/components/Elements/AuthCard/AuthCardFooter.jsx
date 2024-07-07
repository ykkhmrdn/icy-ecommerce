import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";

const AuthCardFooter = ({ type }) => {
  return (
    <Typography variant="small" className="flex justify-center mt-6">
      {type === "login"
        ? "Don't have an account? "
        : "Already have an account? "}
      {type === "login" && (
        <Link to="/register">
          <Typography
            variant="small"
            className="ml-1 font-bold text-congress-blue-900"
          >
            Register
          </Typography>
        </Link>
      )}
      {type === "register" && (
        <Link to="/login">
          <Typography
            variant="small"
            className="ml-1 font-bold text-congress-blue-900"
          >
            Login
          </Typography>
        </Link>
      )}
    </Typography>
  );
};

AuthCardFooter.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AuthCardFooter;
