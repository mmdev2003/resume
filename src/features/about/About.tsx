import { motion } from 'framer-motion';
import { Target, Rocket, BookOpen, Users } from 'lucide-react';
import styles from './About.module.css';

const highlights = [
  {
    icon: Target,
    title: 'Философия работы',
    description: 'Качественный код — это искусство. Каждая строчка должна быть понятной, каждая архитектура — элегантной, каждое решение — обоснованным.'
  },
  {
    icon: Rocket,
    title: 'Мотивация',
    description: 'Вдохновляют сложные задачи, которые требуют нестандартного подхода. Особенно интересны проекты на стыке ИИ и реальных бизнес-потребностей.'
  },
  {
    icon: BookOpen,
    title: 'Подход к обучению',
    description: 'Понимание фундаментальных принципов важнее знания конкретных технологий.'
  },
  {
    icon: Users,
    title: 'Командная работа',
    description: 'Убежден, что лучшие продукты создают команды, где каждый может свободно выражать идеи и учиться у коллег.'
  }
];

export const About = () => {
  return (
    <section className={styles.aboutSection}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>Обо мне</h2>

        <div className={styles.aboutContent}>
          <div className={styles.mainText}>
            <p>
              Мой путь в IT начался в 15 лет, когда я впервые столкнулся с Fullstack разработкой.
              В 18 лет начал изучать ИИ. В 19 выпал шанс преподавать ИИ.
              В это же время с товарищем начали строить B2B аутсорс в айти.
              Прошел через огромнейшее количество сложностей и трудностей за 4 года взращивания компании, но по итогу это сделало меня сильным техническим лидером.
            </p>
            <p>
              В последнее время стал увлекаться нейротехнологиями и рассказываю об этом в телеграм-канале.
              Так же веду телеграм-канал, где рассказываю о своем видении разработки, а так же показываю, как можно начать погружаться в разработку.
            </p>
            <div className={styles.links}>
              <p>
                Мой телеграм-канал о разработке:{' '}
                <a href="https://t.me/mm_development" target="_blank" rel="noopener noreferrer">
                  t.me/mm_development
                </a>
              </p>
              <p>
                Мой телеграм-канал о нейротехнологиях:{' '}
                <a href="https://t.me/mm_neuro" target="_blank" rel="noopener noreferrer">
                  t.me/mm_neuro
                </a>
              </p>
            </div>
          </div>

          <div className={styles.highlightsGrid}>
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  className={styles.highlightCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className={styles.iconWrapper}>
                    <Icon size={24} />
                  </div>
                  <h3 className={styles.highlightTitle}>{highlight.title}</h3>
                  <p className={styles.highlightDescription}>{highlight.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
