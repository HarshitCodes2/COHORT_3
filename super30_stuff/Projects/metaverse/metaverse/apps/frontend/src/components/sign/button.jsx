import PropTypes from "prop-types";

export const Button = ({ onClick, children }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-black-200 border border-grey-800 py-3 text-xl rounded hover:bg-black-900"
      >
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
