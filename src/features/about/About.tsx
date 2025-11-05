import { motion } from 'framer-motion';
import { Brain, Palette, Rocket, Users, Target, Heart, Zap, Shield, ExternalLink } from 'lucide-react';
import styles from './About.module.css';

const interests = [
  {
    icon: Brain,
    title: 'Нейротехнологии',
    description: 'Исследую и рассказываю о пересечении ИИ и нейронаук в моем телеграм-канале'
  },
  {
    icon: Rocket,
    title: 'Сложные задачи на стыке ИИ',
    description: 'Вдохновляют проекты, требующие нестандартного подхода и реальной бизнес-ценности'
  },
  {
    icon: Palette,
    title: 'Техническое лидерство',
    description: 'Построение архитектур, процессов и команд для создания качественных продуктов'
  },
  {
    icon: Users,
    title: 'Образование',
    description: 'Делюсь знаниями о разработке и помогаю новичкам погружаться в IT'
  }
];

const values = [
  {
    icon: Target,
    title: 'Качественный код',
    description: 'Код — это искусство. Каждая строчка понятна, каждая архитектура элегантна, каждое решение обосновано'
  },
  {
    icon: Heart,
    title: 'Фундамент важнее инструментов',
    description: 'Понимание принципов и паттернов важнее знания конкретных технологий'
  },
  {
    icon: Zap,
    title: 'Командная синергия',
    description: 'Лучшие продукты создают команды, где каждый свободно выражает идеи и учится у коллег'
  },
  {
    icon: Shield,
    title: 'Проактивность и ответственность',
    description: 'Берусь за сложные задачи, довожу их до конца и отвечаю за результат'
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
          {/* Bio Section */}
          <div className={styles.bioSection}>
            <motion.div
              className={styles.bioCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Моя история</h3>
              </div>
              <div className={styles.bioContent}>
                <p>
                  Мой путь в IT начался в 15 лет, когда я впервые столкнулся с Fullstack разработкой.
                  В 18 лет начал изучать ИИ. В 19 выпал шанс преподавать ИИ.
                  В это же время с товарищем начали строить B2B аутсорс в айти (ST IT).
                </p>
                <p>
                  Прошел через огромнейшее количество сложностей и трудностей за 4 года взращивания компании,
                  но по итогу это сделало меня сильным техническим лидером. Но я понял, что B2B аутсорс сильно смещает фокус
                  с важных вещей и я покинул компанию, сфокусировавшись на Loom.
                </p>
                <p>
                  В последнее время стал увлекаться нейротехнологиями и рассказываю об этом в телеграм-канале.
                  Так же веду телеграм-канал, где рассказываю о своем видении разработки.
                </p>

                <div className={styles.socialLinks}>
                  <a
                    href="https://t.me/mm_development"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <ExternalLink size={16} />
                    <span>t.me/mm_development</span>
                    <span className={styles.linkLabel}>О разработке</span>
                  </a>
                  <a
                    href="https://t.me/mm_neuro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <ExternalLink size={16} />
                    <span>t.me/mm_neuro</span>
                    <span className={styles.linkLabel}>О нейротехнологиях</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interests Section */}
          <div className={styles.subsection}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Что меня интересует</h3>
            </div>
            <div className={styles.interestsGrid}>
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={index}
                    className={styles.interestCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={styles.iconWrapper}>
                      <Icon size={20} strokeWidth={2.5} />
                    </div>
                    <h4 className={styles.cardTitle}>{interest.title}</h4>
                    <p className={styles.cardDescription}>{interest.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Values Section */}
          <div className={styles.subsection}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Мои ценности</h3>
            </div>
            <div className={styles.valuesGrid}>
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    className={styles.valueCard}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    <div className={styles.valueIconWrapper}>
                      <Icon size={22} strokeWidth={2.5} />
                    </div>
                    <div className={styles.valueContent}>
                      <h4 className={styles.valueTitle}>{value.title}</h4>
                      <p className={styles.valueDescription}>{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
