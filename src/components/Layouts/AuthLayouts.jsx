import PropTypes from "prop-types";

const AuthLayout = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto">
      {children}
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
