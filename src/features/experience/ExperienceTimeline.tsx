import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, GraduationCap } from 'lucide-react';
import styles from './ExperienceTimeline.module.css';

interface TimelineItem {
  id: string;
  title: string;
  company: string;
  duration: string;
  period: string;
  isCurrent?: boolean;
  type: 'work' | 'education';
  details: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

const experiences: TimelineItem[] = [
  {
    id: '1',
    title: 'Сооснователь и TechLead',
    company: 'Loom',
    duration: 'сентябрь 2025 - настоящее время',
    period: '4 мес',
    isCurrent: true,
    type: 'work',
    details: [
      'Управляю командой из 2-х человек (тг-бот разработчик, backend)',
      'Участвую в разработке телеграм-бота, backend и настройке инфраструктуры',
      'Довели проект от идеи до MVP за месяц',
      'Построили микросервисную архитектуру из 5 микросервисов',
      'Реализовал "Релиз машину" с полным CI/CD (3 dev сервера, 1 stage, 1 prod)',
      'Внедрил полный мониторинг: логирование, трассировка и метрики с корреляциями в Grafana',
      'Разработал админ-панель для управления клиентами',
      'Запустили первых клиентов на тестирование'
    ],
    metrics: [
      { label: 'Команда', value: '3 чел' },
      { label: 'Микросервисы', value: '5 шт' },
      { label: 'MVP', value: '1 мес' }
    ]
  },
  {
    id: '2',
    title: 'TechLead и backend-разработчик',
    company: 'ST IT',
    duration: '2021 - август 2025',
    period: '4 года',
    type: 'work',
    details: [
      'Выстроил процесс разработки всех отделов суммарно из 25 человек от сбора требований до готового продукта',
      'Определил все стандарты и подходы к разработке Backend`а',
      'Управлял командой из 5-ти backend разработчиков',
      'Спроектировал и реализовал 11 проектов',
      'Достигли оборота в 50млн в год'
    ],
    metrics: [
      { label: 'Команда', value: '25 чел' },
      { label: 'Проекты', value: '11 шт' },
      { label: 'Оборот', value: '50M₽/год' }
    ]
  },
  {
    id: '3',
    title: 'Преподаватель по Deep Learning',
    company: 'IT-куб',
    duration: '2023 - 2023',
    period: '1 год',
    type: 'education',
    details: [
      'Разработал курс по Deep Learning',
      'Проводил мастер-классы для новичков',
      'Проводил уроки 2 раза в неделю в области Deep Learning',
      'Более 10-ти ученикам дал крепкий фундамент в области Deep Learning'
    ],
    metrics: [
      { label: 'Ученики', value: '10+ чел' },
      { label: 'Уроки', value: '2/нед' }
    ]
  }
];

export const ExperienceTimeline = () => {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={styles.timeline}>
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          className={styles.timelineItem}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Timeline line and dot */}
          <div className={styles.timelineLine}>
            {index !== experiences.length - 1 && (
              <motion.div
                className={styles.line}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              />
            )}
            <motion.div
              className={`${styles.dot} ${exp.isCurrent ? styles.dotActive : ''}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              {exp.type === 'work' ? (
                <Briefcase size={16} strokeWidth={2.5} />
              ) : (
                <GraduationCap size={16} strokeWidth={2.5} />
              )}
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            className={styles.content}
            onClick={() => toggleExpand(exp.id)}
            whileHover={{ scale: 1.01 }}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.header}>
              <div>
                <h3 className={styles.title}>{exp.title}</h3>
                <p className={styles.company}>
                  {exp.company} {exp.isCurrent && <span className={styles.currentBadge}>Текущая</span>}
                </p>
                <p className={styles.duration}>
                  {exp.duration} <span className={styles.period}>• {exp.period}</span>
                </p>
              </div>
              <motion.div
                className={styles.expandIcon}
                animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </div>

            <AnimatePresence>
              {expandedId === exp.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={styles.details}
                >
                  {/* Metrics */}
                  {exp.metrics && (
                    <div className={styles.metrics}>
                      {exp.metrics.map((metric, idx) => (
                        <motion.div
                          key={idx}
                          className={styles.metric}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <span className={styles.metricValue}>{metric.value}</span>
                          <span className={styles.metricLabel}>{metric.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Details list */}
                  <ul className={styles.detailsList}>
                    {exp.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
