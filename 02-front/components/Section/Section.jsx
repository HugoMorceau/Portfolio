import { PropTypes } from "prop-types";
import { forwardRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import Construction from "../Construction/Construction";
import styles from "./Section.module.scss";

const Section = forwardRef(function Section(props, ref) {
  const { id, title, inConstruction, setActiveSection, scrollDirection, children } = props;
  const { t } = useTranslation();

  const [observerRef, inView] = useInView({
    threshold: 1,
  });
  const [bottomObserverRef, bottomInView] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (scrollDirection === "down" && inView) {
      setActiveSection(id);
    } else if (scrollDirection === "up" && bottomInView) {
      setActiveSection(id);
    }
  }, [inView, bottomInView, setActiveSection, id, scrollDirection]);

  return (
    <section ref={ref} className={styles.section}>
      <div ref={observerRef}></div>
      {title === "Home" ? null : <h2 className={styles.sectionTitle}>{t(title).toUpperCase()}</h2>}
      {inConstruction && <Construction title={"Section"} />}
      {children}
      <div ref={bottomObserverRef}></div>
    </section>
  );
});

// PropTypes
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  inConstruction: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  setActiveSection: PropTypes.func.isRequired,
};

export default Section;
