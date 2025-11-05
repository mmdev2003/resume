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
      'Создаем B2B SaaS для автоматизации контент-маркетинга: генерация текстов и изображений для соцсетей с помощью Claude. Довели продукт от идеи до MVP за 2 месяца, вышли на 10+ клиентов в бета-тестировании',
      'Спроектировал и реализовал микросервисную архитектуру из 9 сервисов на Python FastAPI',
      'Разработал уникальную механику "обучения рубрик" — AI совместно с человеком достигают эталонного текста и картинки, которые затем воспроизводятся на любую тему в рамках рубрики',
      'Реализовал полноценную AI-image-studio, объединяющую возможности GPT-Image и NanoBanana с препроцессингом инструкций для качественной генерации',
      'Построил "Release-машину" с полным CI/CD циклом: 3 dev-сервера, stage и production окружения, который управляется через TG-бота. Внедрил комплексный мониторинг с корреляцией событий через Grafana + Tempo + Loki + Victoria Metrics',
      'Разработал админ-панель на React + TypeScript для управления организациями клиентов с аналитикой поведения пользователей'
    ],
    metrics: [
      { label: 'Команда', value: '3 чел' },
      { label: 'Микросервисы', value: '9 шт' },
      { label: 'Клиенты', value: '10+' },
      { label: 'MVP', value: '2 мес' }
    ]
  },
  {
    id: '2',
    title: 'Сооснователь, TechLead и backend-разработчик',
    company: 'ST IT',
    duration: '2021 - август 2025',
    period: '4 года',
    type: 'work',
    details: [
      'Прошел путь от уверенного Junior+ до TechLead за 4 года в качестве сооснователя. Вырастил компанию с 2-3 человек до 25 сотрудников и довели оборот с 0 до 50 млн рублей в год',
      'Выстроил процесс разработки: внедрил DDD + Event Storming для проектирования систем. Обучил менеджеров собирать требования от заказчиков в парадигме DDD для эффективного взаимодействия команды',
      'Определил границы взаимодействия между отделами (менеджеры, frontend, backend, дизайн) и установил стандарты разработки: DDD, Clean Architecture, Event-Driven, code style guides, API guidelines, автоматизированное тестирование',
      'Построил полный DevOps цикл: CI/CD с GitHub Actions, мониторинг через Grafana Stack, контейнеризация с Docker/Kubernetes',
      'Спроектировал и реализовал 8+ крупных проектов в различных доменах. Самый технически сложный — Real Estate AI Bot с контролем LLM, интеграцией AmoCRM и генерацией финансовых моделей',
      'Технологический стек: Go, Python, PostgreSQL, Redis, Kafka/RabbitMQ, K8s, blockchain (Solidity)'
    ],
    metrics: [
      { label: 'Рост команды', value: '2→25 чел' },
      { label: 'Проекты', value: '8+ шт' },
      { label: 'Рост оборота', value: '0→50M₽' }
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
      'Разработал и провел комплексный курс по Deep Learning для школьников 5-11 классов. Программа включала полный фундамент: математику нейросетей (линейная алгебра, оптимизация), обзор всех задач Deep Learning',
      'Обучил работе с PyTorch и архитектурами CNN/RNN/Transformer. Охватил области Computer Vision и NLP с практическими проектами',
      'Студенты реализовали с нуля VGG16 для классификации изображений и YOLOv3 для детекции объектов',
      'Более 10 учеников получили крепкий фундамент в области Deep Learning. Формат обучения: теория + практика + project-based подход с мастер-классами 2 раза в неделю'
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
