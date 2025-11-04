import { motion } from 'framer-motion';
import { ResumeHeader } from '../../features/resume-header';
import { Experience } from '../../features/experience';
import { ProjectsShowcase } from '../../features/projects-showcase';
import { SkillsGrid } from '../../features/skills-grid';
import { Education } from '../../features/education';
import { Hackathons } from '../../features/hackathons';
import { About } from '../../features/about';
import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.resume}>
        <ResumeHeader />
        <div className={styles.mainContent}>
          <Experience />
          <SkillsGrid />
          <ProjectsShowcase />
          <Hackathons />
          <Education />
          <About />
        </div>
      </div>
    </motion.div>
  );
};
