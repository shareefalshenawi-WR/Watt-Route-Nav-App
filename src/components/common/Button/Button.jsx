import { motion } from "framer-motion";
import styles from "./Button.module.css";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  className = "",
  ...props
}) => {
  return (
    <motion.button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
