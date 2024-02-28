import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.scss";

export default function Navbar({ handleclick, destinations, activeSection }) {
  const { i18n, t } = useTranslation();
  return (
    <nav className={styles.navbar}>
      <ul>
        {destinations.map(({ key, id, title, ref }) => {
          return (
            <li
              key={key}
              ref={ref}
              className={`App-link ${activeSection === id ? styles.active : ""}`}
              onClick={(e) => handleclick(ref)}
            >
              {t(title).toUpperCase()}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  handleclick: PropTypes.func.isRequired,
  destinations: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      ref: PropTypes.object.isRequired,
    }).isRequired
  ).isRequired,
  activeSection: PropTypes.number.isRequired,
};
