import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Github, MapPin } from 'lucide-react';
import styles from './ResumeHeader.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const ResumeHeader = () => {
  return (
    <motion.div
      className={styles.header}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.headerContent}>
        <motion.img
          src="/logo-without-bg.png"
          alt="MM Logo"
          className={styles.logo}
          variants={itemVariants}
        />
        <motion.h1 className={styles.name} variants={itemVariants}>
          Михайлов Максим
        </motion.h1>
        <motion.p className={styles.title} variants={itemVariants}>
          TechLead • Backend-разработчик <br/>В разработке с 2018 года
        </motion.p>
        <motion.div className={styles.contactInfo} variants={itemVariants}>
          <motion.div className={styles.contactItem} whileHover={{ x: 4 }}>
            <div className={styles.contactIcon}>
              <Mail size={18} strokeWidth={2} />
            </div>
            <span>mmdev2003@gmail.com</span>
          </motion.div>
          <motion.div className={styles.contactItem} whileHover={{ x: 4 }}>
            <div className={styles.contactIcon}>
              <Phone size={18} strokeWidth={2} />
            </div>
            <span>+7 (922) 011-35-39</span>
          </motion.div>
          <motion.div className={styles.contactItem} whileHover={{ x: 4 }}>
            <div className={styles.contactIcon}>
              <MessageCircle size={18} strokeWidth={2} />
            </div>
            <a href="https://t.me/mm_navigator" className={styles.resetLink}>
              t.me/gommgo
            </a>
          </motion.div>
          <motion.div className={styles.contactItem} whileHover={{ x: 4 }}>
            <div className={styles.contactIcon}>
              <Github size={18} strokeWidth={2} />
            </div>
            <a href="https://github.com/mmdev2003" className={styles.resetLink}>
              github.com/mmdev2003
            </a>
          </motion.div>
          <motion.div className={styles.contactItem} whileHover={{ x: 4 }}>
            <div className={styles.contactIcon}>
              <MapPin size={18} strokeWidth={2} />
            </div>
            <span>Санкт-Петербург, Россия</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
