import { motion } from "framer-motion";
import styles from "./Card.module.css";

const Card = ({ children, className = "", hoverable = true, ...props }) => {
  return (
    <motion.div
      className={`${styles.card} ${
        hoverable ? styles.hoverable : ""
      } ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={
        hoverable
          ? { y: -10, boxShadow: "0 12px 40px rgba(30, 69, 82, 0.2)" }
          : {}
      }
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
