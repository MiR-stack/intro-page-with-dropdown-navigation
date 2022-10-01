import Navbar from "./navbar/navbar";
import PropTypes from "prop-types";
import "./pageLayout.scss";

const PageLayout = ({ children }) => {
  return (
    <div className="page_layout">
      <Navbar />
      <div className="container">{children}</div>
    </div>
  );
};

export default PageLayout;

PageLayout.propTypes = {
  children: PropTypes.any,
};
