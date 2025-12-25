import { motion } from "framer-motion";
import styles from "./Section.module.css";

const Section = ({
  children,
  className = "",
  background = "default",
  id = "",
  ...props
}) => {
  return (
    <section
      id={id}
      className={`${styles.section} ${styles[background]} ${className}`}
      {...props}
    >
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
