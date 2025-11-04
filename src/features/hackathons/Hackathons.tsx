import { Section } from '../../shared/ui';
import { motion } from 'framer-motion';
import styles from './Hackathons.module.css';

export const Hackathons = () => {
  const hackathons = [
    {
      title: 'ВТБ MORE.Tech',
      year: '2025',
      status: 'active',
      statusText: '20 место из 80',
      description: 'В данный момент принимаю участие в хакатоне ВТБ MORE.Tech. Работаю над задачей AI скрининга. Анализ резюме, проведение первичного интервью, оценивая как soft, так и hard skills, а так же анализ эмоций.'
    },
    {
      title: 'ЮУрГУ ChatGPT Hackaton',
      year: '2023',
      status: 'completed',
      statusText: '6 место из 40',
      description: 'Разработали решение на основе GPT для создания аналитических скриптов к таблицам. Пользователь на естественном языке вводит свой запрос, а системы генерирует код для выполнения запроса.',
      link: 'https://sheetsgpt.ru'
    },
    {
      title: 'ВкусВилл Антихакатон',
      year: '2021',
      status: 'incomplete',
      statusText: 'Не завершен',
      description: 'Работали над увеличением прибыли конкретной точки за счет формирования ассортимента товаров с помощью ML. К сожалению, не успели довести решение до конца из-за технических сложностей.'
    },
    {
      title: 'Tinkoff Invest Robot Contest',
      year: '2021',
      status: 'incomplete',
      statusText: 'Не завершен',
      description: 'Разрабатывал алгоритмического торгового робота для инвестиционных стратегий. Применял техники машинного обучения для анализа рынка, но не очевидно, не смог решить задачу.'
    }
  ];

  return (
    <Section title="Участие в хакатонах">
      <div className={styles.hackathonsGrid}>
        {hackathons.map((hackathon, index) => (
          <motion.div
            key={index}
            className={`${styles.hackathonCard} ${styles[hackathon.status]}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -3 }}
          >
            <div className={styles.hackathonHeader}>
              <h3 className={styles.hackathonTitle}>{hackathon.title}</h3>
              <span className={styles.hackathonYear}>{hackathon.year}</span>
            </div>
            <div className={`${styles.hackathonStatus} ${styles[`status${hackathon.status.charAt(0).toUpperCase() + hackathon.status.slice(1)}`]}`}>
              {hackathon.statusText}
            </div>
            <p className={styles.hackathonDescription}>
              {hackathon.description}
              {hackathon.link && (
                <>
                  {' '}
                  <a href={hackathon.link} className={styles.link}>{hackathon.link}</a>
                </>
              )}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
