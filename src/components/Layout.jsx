import PropTypes from "prop-types";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
