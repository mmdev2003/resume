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
    title: 'Co-founder и TechLead',
    company: 'Loom, product',
    duration: 'сентябрь 2025 - настоящее время',
    period: '2 мес',
    isCurrent: true,
    type: 'work',
    details: [
      'Довёл продукт от идеи до MVP за 2 месяца',
      'Спроектировал архитектуру платформы (9 микросервисов), обеспечив масштабируемость под рост клиентской базы',
      'Разработал ключевую фичу — "обучение рубрик": AI учится стилю клиента и воспроизводит его на любую тему',
      'Создал AI-студию генерации изображений, объединив несколько моделей для повышения качества контента',
      'Выстроил CI/CD с тремя средами и мониторингом (Grafana-стек), ускорив цикл релизов',
      'Разработал админ-панель (React/TypeScript) с аналитикой поведения пользователей',
      'Внедрил продуктовый подход: AJTBD-исследования, карту гипотез, карту процесса-опыта, карту реализации историй — это позволило сфокусировать разработку на реальных болях клиентов и сократить количество ненужных фич'
    ],
    metrics: [
      { label: 'Команда', value: '3 чел' },
      { label: 'Микросервисы', value: '9 шт' },
      { label: 'Клиенты на бета-тесте', value: '10+' },
      { label: 'MVP', value: '2 мес' }
    ]
  },
  {
    id: '2',
    title: 'Co-founder и TechLead',
    company: 'ST IT, B2B аутсорс',
    duration: '2021 - август 2025',
    period: '4 года',
    type: 'work',
    details: [
      'Вырос от Junior+ до TechLead за 4 года. Компания выросла с 3 до 25 человек, оборот — с 0 до 50 млн ₽/год',
      'Внедрил DDD и Event Storming как стандарт проектирования, обучил менеджеров собирать требования в терминах домена',
      'Установил стандарты разработки: Clean Architecture, API guidelines, code style, автотесты — и закрепил их в code review',
      'Построил DevOps-процесс: CI/CD на GitHub Actions, мониторинг (Grafana Stack)',
      'Спроектировал архитектуру и написал core-логику для 8 проектов'
    ],
    metrics: [
      { label: 'Рост команды', value: '3→25 чел' },
      { label: 'Проекты', value: '8 шт' },
      { label: 'Рост оборота', value: '0→50M₽' }
    ]
  },
  {
    id: '3',
    title: 'Преподаватель по Deep Learning',
    company: 'IT-куб, education',
    duration: 'январь 2023 - июнь 2023',
    period: '6 месяцев',
    type: 'education',
    details: [
      'Разработал курс по Deep Learning для школьников 5–11 классов: от математики нейросетей до практики на PyTorch',
      'Обучил архитектурам CNN, RNN, Transformer с практическими проектами в Computer Vision и NLP',
      'Довёл учеников до реализации VGG16 и YOLOv3 с нуля — школьники писали свои детекторы объектов'
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
