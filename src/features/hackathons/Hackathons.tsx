import { useState } from 'react';
import { Section } from '../../shared/ui';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Trophy, Code2, Users, Briefcase, Clock, ExternalLink } from 'lucide-react';
import styles from './Hackathons.module.css';

interface HackathonItem {
  id: string;
  title: string;
  year: string;
  status: 'active' | 'completed' | 'incomplete';
  statusText: string;
  description: string;
  link?: string;
  metrics?: {
    label: string;
    value: string;
    icon: 'team' | 'role' | 'duration';
  }[];
  details?: string[];
  prize?: 'gold' | 'silver' | 'bronze' | 'none';
}

const hackathons: HackathonItem[] = [
  {
    id: '1',
    title: 'ВТБ MORE.Tech',
    year: '2025',
    status: 'completed',
    statusText: '20 место из 80',
    description: 'Разработали AI-платформу автоматизации HR-процессов',
    prize: 'none',
    metrics: [
      { label: 'Команда', value: '4 чел', icon: 'team' },
      { label: 'Роль', value: 'Backend', icon: 'role' },
      { label: 'Время', value: '7 дней', icon: 'duration' }
    ],
    details: [
      'Интеграция 3 AI моделей: GPT-5 (анализ резюме), Whisper (распознавание речи), TTS-1 (синтез голоса)',
      'Система оценки по 11 критериям с настраиваемыми весами и порогами под каждую вакансию',
      'Адаптивное голосовое интервью с контекстно-зависимыми вопросами на основе анализа резюме',
      'Batch обработка резюме с автоматической рассылкой ссылок на интервью через Telegram и email',
      'Full observability stack: Grafana, Loki, Tempo, VictoriaMetrics с OpenTelemetry трейсингом'
    ]
  },
  {
    id: '2',
    title: 'ЮУрГУ ChatGPT Hackaton',
    year: '2023',
    status: 'completed',
    statusText: '6 место из 40',
    description: 'Разработали решение на основе GPT для создания аналитических скриптов к таблицам.',
    link: 'https://sheetsgpt.ru',
    prize: 'none',
    metrics: [
      { label: 'Команда', value: '3 чел', icon: 'team' },
      { label: 'Роль', value: 'Fullstack', icon: 'role' },
      { label: 'Время', value: '48 ч', icon: 'duration' }
    ],
    details: [
      'Один из первых проектов в России с OpenAI GPT API после релиза в 2023 году',
      'Получили статус резидента Сколково, интерес проявили МТС и Ростелеком',
      '5-ступенчатый AI pipeline: reformulation → analysis → generation → execution → formatting',
      'Микросервисная архитектура из 5 независимых сервисов (Auth, Account, Table, Query, Alert Bot)',
      'Secure sandbox для безопасного выполнения Python-кода с поддержкой pandas, numpy, matplotlib'
    ]
  },
  {
    id: '3',
    title: 'ВкусВилл Антихакатон',
    year: '2021',
    status: 'incomplete',
    statusText: 'Не завершен',
    description: 'Работали над увеличением прибыли конкретной точки за счет формирования ассортимента товаров с помощью ML.',
    prize: 'none',
    metrics: [
      { label: 'Команда', value: '2 чел', icon: 'team' },
      { label: 'Роль', value: 'ML Engineer', icon: 'role' },
      { label: 'Время', value: '72 ч', icon: 'duration' }
    ],
    details: [
      'Разработка ML-модели для оптимизации ассортимента товаров в точках продаж',
      'Анализ исторических данных продаж и предпочтений покупателей',
      'К сожалению, не успели довести решение до конца из-за технических сложностей',
      'Получен ценный опыт работы с большими датасетами и построения рекомендательных систем'
    ]
  },
  {
    id: '4',
    title: 'Tinkoff Invest Robot Contest',
    year: '2021',
    status: 'incomplete',
    statusText: 'Не завершен',
    description: 'Разрабатывал алгоритмического торгового робота для инвестиционных стратегий.',
    prize: 'none',
    metrics: [
      { label: 'Формат', value: 'Solo', icon: 'team' },
      { label: 'Роль', value: 'Quant Dev', icon: 'role' },
      { label: 'Время', value: '1 мес', icon: 'duration' }
    ],
    details: [
      'Применял техники машинного обучения для анализа рынка и прогнозирования цен',
      'Реализация различных торговых стратегий на основе технического анализа',
      'Бэктестинг стратегий на исторических данных',
      'Столкнулся с проблемой переобучения моделей - ценный урок в ML для финансов'
    ]
  }
];

export const Hackathons = () => {
  const [expandedId, setExpandedId] = useState<string | null>(hackathons[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getMetricIcon = (iconType: 'team' | 'role' | 'duration') => {
    switch (iconType) {
      case 'team':
        return <Users size={14} />;
      case 'role':
        return <Briefcase size={14} />;
      case 'duration':
        return <Clock size={14} />;
    }
  };

  const getPrizeIcon = (prize: 'gold' | 'silver' | 'bronze' | 'none') => {
    if (prize === 'none') return <Code2 size={16} strokeWidth={2.5} />;
    return <Trophy size={16} strokeWidth={2.5} />;
  };

  return (
    <Section title="Участие в хакатонах">
      <div className={styles.timeline}>
        {hackathons.map((hackathon, index) => (
          <motion.div
            key={hackathon.id}
            className={styles.timelineItem}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Timeline line and dot */}
            <div className={styles.timelineLine}>
              {index !== hackathons.length - 1 && (
                <motion.div
                  className={styles.line}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                />
              )}
              <motion.div
                className={`${styles.dot} ${styles[`dot${hackathon.status.charAt(0).toUpperCase() + hackathon.status.slice(1)}`]} ${hackathon.prize !== 'none' ? styles[`dotPrize${hackathon.prize.charAt(0).toUpperCase() + hackathon.prize.slice(1)}`] : ''}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                {getPrizeIcon(hackathon.prize || 'none')}
              </motion.div>
            </div>

            {/* Content */}
            <motion.div
              className={`${styles.content} ${styles[`content${hackathon.status.charAt(0).toUpperCase() + hackathon.status.slice(1)}`]}`}
              onClick={() => toggleExpand(hackathon.id)}
              whileHover={{ scale: 1.01 }}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.header}>
                <div>
                  <div className={styles.titleRow}>
                    <h3 className={styles.title}>{hackathon.title}</h3>
                    {hackathon.prize !== 'none' && (
                      <span className={`${styles.prizeBadge} ${styles[`prize${hackathon.prize.charAt(0).toUpperCase() + hackathon.prize.slice(1)}`]}`}>
                        <Trophy size={12} />
                        {hackathon.prize === 'gold' && 'Золото'}
                        {hackathon.prize === 'silver' && 'Серебро'}
                        {hackathon.prize === 'bronze' && 'Бронза'}
                      </span>
                    )}
                  </div>
                  <p className={styles.yearAndStatus}>
                    <span className={styles.year}>{hackathon.year}</span>
                    <span className={styles.statusDivider}>•</span>
                    <span className={`${styles.status} ${styles[`status${hackathon.status.charAt(0).toUpperCase() + hackathon.status.slice(1)}`]}`}>
                      {hackathon.statusText}
                    </span>
                  </p>
                  <p className={styles.description}>{hackathon.description}</p>
                  {hackathon.link && (
                    <a
                      href={hackathon.link}
                      className={styles.link}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} />
                      Посмотреть проект
                    </a>
                  )}
                </div>
                <motion.div
                  className={styles.expandIcon}
                  animate={{ rotate: expandedId === hackathon.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedId === hackathon.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={styles.details}
                  >
                    {/* Metrics */}
                    {hackathon.metrics && (
                      <div className={styles.metrics}>
                        {hackathon.metrics.map((metric, idx) => (
                          <motion.div
                            key={idx}
                            className={styles.metric}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className={styles.metricIcon}>
                              {getMetricIcon(metric.icon)}
                            </span>
                            <span className={styles.metricValue}>{metric.value}</span>
                            <span className={styles.metricLabel}>{metric.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Details list */}
                    {hackathon.details && (
                      <ul className={styles.detailsList}>
                        {hackathon.details.map((detail, idx) => (
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
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
