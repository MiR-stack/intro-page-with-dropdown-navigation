import PropTypes from "prop-types";

const Transparent_Bg = ({ triger, handleTriger }) => {
  const style = {
    height: "100vh",
    width: "100%",
    backgroundColor: "rgba(0,0,0,.5)",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex:1,
    display:triger?'block':'none'
  };

  return <div style={style} onClick={handleTriger}></div>;
};

export default Transparent_Bg;

Transparent_Bg.propTypes = {
  triger: PropTypes.bool.isRequired,
  handleTriger: PropTypes.func.isRequired,
};
