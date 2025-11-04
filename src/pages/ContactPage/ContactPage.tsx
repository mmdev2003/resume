import { motion } from 'framer-motion';
import styles from './ContactPage.module.css';

export const ContactPage = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1>Contact Me</h1>
      <p>Contact form and information will be here</p>
    </motion.div>
  );
};
