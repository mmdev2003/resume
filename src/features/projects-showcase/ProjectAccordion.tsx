import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Users, Layers, Code, Rocket, ExternalLink, AlertCircle, Lightbulb, Target, TrendingUp, CheckCircle, FileText } from 'lucide-react';
import { Badge } from '../../shared/ui';
import { allProjects } from '../../data/projects';
import type { Project } from '../../data/projects';
import styles from './ProjectAccordion.module.css';

// Временно оставим старые проекты для совместимости
const legacyProjects = [
  {
    id: '5',
    title: 'web3vpn',
    subtitle: 'Децентрализованная VPN-экосистема на блокчейне',
    description: 'Web3 платформа, где пользователи становятся операторами нод и зарабатывают криптовалюту за предоставление VPN-сервисов',
    badges: [
      { text: 'Web3', variant: 'web3' },
      { text: 'P2P Network', variant: 'architecture' }
    ],
    metrics: [
      { label: 'Блокчейн', value: 'Polygon' },
      { label: 'DAO', value: 'Да' },
      { label: 'P2P', value: 'Да' }
    ],
    team: '5 человек (1 TL, 1 Frontend, 1 PM, 2 Designer, 1 QA)',
    architecture: 'Микросервисная P2P архитектура, Smart Contracts',
    techStack: [
      'Python FastAPI',
      'Solidity',
      'WireGuard',
      'OpenVPN',
      'PostgreSQL',
      'Docker',
      'Web3.py',
      'Polygon Cardona'
    ],
    highlights: [
      'DAO управление экосистемой через голосование токенхолдеров',
      'Автоматизированные агенты мониторинга качества нод',
      'Криптоэкономические стимулы для операторов нод',
      'Метрическая система оценки качества VPN-соединений',
      'P2P архитектура без централизованных точек отказа',
      'Смарт-контракты для прозрачного распределения наград'
    ]
  },
  {
    id: '6',
    title: 'DonateHelper',
    subtitle: 'Экосистема для стримерского донейтинга',
    description: 'Комплексная платформа для стримерского донейтинга с полным циклом от создания интерактивных виджетов до обработки платежей. Включает систему модерации, TTS синтез речи, целевые сборы и интеграцию с OBS для тысяч одновременных пользователей.',
    metrics: [
      { label: 'Микросервисы', value: '5' },
      { label: 'TTS', value: 'Да' },
      { label: 'OBS', value: 'Интеграция' }
    ],
    team: '5 человек (1 TL, 1 Backend, 1 Frontend, 1 PM, 1 Designer)',
    architecture: 'DDD, 5 микросервисов, Onion Architecture',
    techStack: [
      'Go + Echo',
      'Python FastAPI',
      'PostgreSQL',
      'JWT + 2FA',
      'WebSocket',
      'Tinkoff Acquiring',
      'Google TTS'
    ],
    highlights: [
      'Интерактивные донат-виджеты с кастомизацией',
      'TTS озвучивание сообщений в реальном времени',
      'Система модерации контента с блэклистами',
      'Целевые сборы с прогресс-барами и анимациями',
      'CI/CD с автоматическим деплоем',
      'Интеграция с OBS через Browser Source'
    ]
  },
  {
    id: '7',
    title: 'FileshareX',
    subtitle: 'Корпоративная облачная файлообменная платформа',
    description: 'Enterprise-решение с многоуровневой системой подписок и криптовалютными платежами. Обеспечивает безопасный обмен файлами с временными ссылками, паролями и иерархическим управлением корпоративными аккаунтами.',
    badges: [
      { text: 'Enterprise', variant: 'enterprise' }
    ],
    metrics: [
      { label: 'Микросервисы', value: '6' },
      { label: 'Платежи', value: 'Bitcoin' },
      { label: 'Безопасность', value: '2FA' }
    ],
    team: '5 человек (1 TL, 1 Backend, 1 Frontend, 1 PM, 1 Designer)',
    architecture: 'DDD, 6 микросервисов, Onion Architecture',
    techStack: [
      'Python FastAPI',
      'PostgreSQL',
      'SeaweedFS',
      'JWT + 2FA',
      'Bitcoin API',
      'Kubernetes'
    ],
    highlights: [
      'Временные ссылки с гибкой настройкой доступа',
      'Криптовалютные платежи через Bitcoin',
      'Система корпоративных субаккаунтов с иерархией',
      'Автоматическое удаление EXIF данных',
      'Password-protected архивы с шифрованием',
      'Распределенное файловое хранилище SeaweedFS'
    ]
  },
  {
    id: '8',
    title: 'SheetsGPT',
    subtitle: 'AI-платформа для анализа данных через естественный язык',
    description: 'Интеллектуальная SaaS-платформа для анализа данных с помощью естественного языка. Трансформирует сложные SQL-запросы и Python-скрипты в простые вопросы, делая аналитику доступной пользователям любого уровня через интеграцию с GPT-4.',
    badges: [
      { text: 'SaaS', variant: 'enterprise' },
      { text: 'AI Platform', variant: 'architecture' }
    ],
    metrics: [
      { label: 'Микросервисы', value: '5' },
      { label: 'AI модели', value: 'GPT-4' },
      { label: 'Форматы', value: 'CSV/Excel' }
    ],
    team: '5 человек (1 TL, 1 Backend, 1 Frontend, 1 PM, 1 Designer)',
    architecture: 'DDD, 5 микросервисов, Onion Architecture',
    techStack: [
      'Python FastAPI',
      'OpenAI GPT-4',
      'PostgreSQL',
      'pandas',
      'WeedFS',
      'JWT + 2FA',
      'Telegram Bot'
    ],
    highlights: [
      'Анализ данных через естественный язык',
      'Автогенерация Python-кода для анализа',
      'Безопасное выполнение кода в изолированной песочнице',
      'Поддержка CSV/Excel форматов с автоопределением',
      'Интеграция с AmoCRM для работы с бизнес-данными',
      'Система уведомлений через Telegram Bot',
      'Кэширование Dataframe для быстрого доступа'
    ],
    link: 'https://sheetsgpt.ru'
  },
  {
    id: '9',
    title: 'CryptoTrading Bot',
    subtitle: 'AI-система автоматизированной торговли криптовалютами',
    description: 'Автоматизированная торговая система для криптовалют с использованием машинного обучения и технического анализа. Включает нейросетевой анализ на основе Transformer архитектуры, трейлинг-стоп алгоритмы и комплексную систему управления рисками.',
    badges: [
      { text: 'FinTech', variant: 'enterprise' },
      { text: 'AI Trading', variant: 'architecture' }
    ],
    metrics: [
      { label: 'AI', value: 'Transformer' },
      { label: 'Биржа', value: 'Bybit' },
      { label: 'Real-time', value: 'WebSocket' }
    ],
    team: '2 человека (1 TL, 1 AI Engineer)',
    architecture: 'Приложение на Go + Python ML pipeline',
    techStack: [
      'Go + Goroutines',
      'Python + PyTorch',
      'Transformer NN',
      'WebSocket',
      'Bybit API',
      'Telegram Bot',
      'Technical Analysis'
    ],
    highlights: [
      'AI-анализ рынка с Transformer моделями',
      'Автоматическое управление рисками и позициями',
      'Трейлинг-стоп и динамические стоп-лоссы',
      'Real-time мониторинг позиций через WebSocket',
      'Telegram интерфейс для управления ботом',
      'Технический анализ OHLCV данных с индикаторами'
    ]
  },
  {
    id: '10',
    title: 'Real Estate AI Bot',
    subtitle: 'Телеграм-бот для поиска недвижимости с AI',
    description: 'Телеграм-бот с LLM, который умеет искать недвижимость, рассчитывать финансовую модель и рассказывать о новостях рынка недвижимости в Москве. Полная интеграция с агрегаторами и AmoCRM.',
    metrics: [
      { label: 'Микросервисы', value: '7' },
      { label: 'AI', value: 'OpenAI' },
      { label: 'CRM', value: 'AmoCRM' }
    ],
    team: '4 человека (1 TL, 1 Backend, 1 PM, 1 QA)',
    architecture: 'DDD, 7 микросервисов, Onion Architecture',
    techStack: [
      'Python',
      'Aiogram',
      'OpenAI API',
      'Excel',
      'SeaweedFS',
      'PostgreSQL',
      'AmoCRM API'
    ],
    highlights: [
      'Генерация финансовой модели в PDF и Excel форматах',
      'Полная интеграция с AmoCRM API',
      'Админ-бот для создания коротких ссылок для постов',
      'Отправка статистики по пользователям заказчику',
      'Парсинг актуальных предложений аренды и продажи в Москве'
    ]
  }
] as any; // Type coercion for legacy projects

// Объединяем новые детальные проекты с legacy проектами
const projects: Project[] = [
  ...allProjects,
  ...legacyProjects
];

export const ProjectAccordion = () => {
  const [expandedId, setExpandedId] = useState<string | null>(projects[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={styles.accordion}>
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className={`${styles.projectItem} ${project.featured ? styles.featured : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={styles.projectHeader} onClick={() => toggleExpand(project.id)}>
            <div className={styles.headerContent}>
              <div className={styles.titleSection}>
                <h3 className={styles.title}>
                  {project.title}
                  {project.featured && <span className={styles.featuredBadge}>Основной</span>}
                </h3>
                <p className={styles.subtitle}>{project.subtitle}</p>
                {project.badges && (
                  <div className={styles.badges}>
                    {project.badges.map((badge, idx) => (
                      <Badge key={idx} variant={badge.variant}>
                        {badge.text}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              <motion.div
                className={styles.expandIcon}
                animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={24} />
              </motion.div>
            </div>

            {project.metrics && (
              <div className={styles.metricsPreview}>
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className={styles.metricItem}>
                    <span className={styles.metricValue}>{metric.value}</span>
                    <span className={styles.metricLabel}>{metric.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <AnimatePresence>
            {expandedId === project.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={styles.projectDetails}
              >
                <div className={styles.detailsContent}>

                  {/* Executive Summary для детальных case study */}
                  {(project.role || project.duration || project.status) && (
                    <div className={styles.executiveSummary}>
                      <div className={styles.summaryGrid}>
                        {project.role && (
                          <div className={styles.summaryItem}>
                            <span className={styles.summaryLabel}>Роль</span>
                            <span className={styles.summaryValue}>{project.role}</span>
                          </div>
                        )}
                        {project.duration && (
                          <div className={styles.summaryItem}>
                            <span className={styles.summaryLabel}>Срок</span>
                            <span className={styles.summaryValue}>{project.duration}</span>
                          </div>
                        )}
                        {project.teamSize && (
                          <div className={styles.summaryItem}>
                            <span className={styles.summaryLabel}>Команда</span>
                            <span className={styles.summaryValue}>{project.teamSize}</span>
                          </div>
                        )}
                        {project.status && (
                          <div className={styles.summaryItem}>
                            <span className={styles.summaryLabel}>Статус</span>
                            <span className={styles.summaryValue}>{project.status}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Detailed Description */}
                  {project.description && (
                      <div className={styles.detailedDescriptionSection}>
                        <div className={styles.sectionHeader}>
                          <FileText size={16} />
                          <span>Детальное описание</span>
                        </div>
                        <div className={styles.detailedDescriptionText}>
                          {project.description.split('\n\n').map((paragraph, idx) => (
                              <p key={idx}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                  )}


                  {/* Business Problem */}
                  {project.businessProblem && (
                    <div className={styles.problemSection}>
                      <div className={styles.sectionHeader}>
                        <Target size={16} />
                        <span>Бизнес-задача</span>
                      </div>
                      <p className={styles.problemText}>{project.businessProblem}</p>
                    </div>
                  )}

                  {project.solution && (
                      <div className={styles.solutionSection}>
                        <div className={styles.sectionHeader}>
                          <CheckCircle size={16} />
                          <span>Решение</span>
                        </div>
                        <p className={styles.solutionText}>{project.solution}</p>
                      </div>
                  )}

                  {/* Challenges */}
                  {project.challenges && project.challenges.length > 0 && (
                    <div className={styles.challengesSection}>
                      <div className={styles.sectionHeader}>
                        <AlertCircle size={16} />
                        <span>Технические вызовы</span>
                      </div>
                      <div className={styles.challengesList}>
                        {project.challenges.map((challenge, idx) => (
                          <div key={idx} className={styles.challengeItem}>
                            <div className={styles.challengeTitle}>{challenge.title}</div>
                            <div className={styles.challengeDescription}>{challenge.description}</div>
                            {challenge.solution && (
                              <div className={styles.challengeSolution}>
                                <strong>Решение:</strong> {challenge.solution}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Solution */}


                  {/* Key Features */}
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div className={styles.featuresSection}>
                      <div className={styles.sectionHeader}>
                        <Lightbulb size={16} />
                        <span>Ключевые возможности</span>
                      </div>
                      <div className={styles.featuresList}>
                        {project.keyFeatures.map((feature, idx) => (
                          <div key={idx} className={styles.featureItem}>
                            <div className={styles.featureTitle}>{feature.title}</div>
                            <div className={styles.featureDescription}>{feature.description}</div>
                            {feature.technicalDetails && (
                              <div className={styles.featureTechnical}>
                                {feature.technicalDetails}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Team & Architecture - для legacy проектов */}
                  {'team' in project && (
                    <div className={styles.infoGrid}>
                      <div className={styles.infoItem}>
                        <Users size={16} className={styles.infoIcon} />
                        <div>
                          <span className={styles.infoLabel}>Команда</span>
                          <span className={styles.infoValue}>{(project as any).team}</span>
                        </div>
                      </div>
                      <div className={styles.infoItem}>
                        <Layers size={16} className={styles.infoIcon} />
                        <div>
                          <span className={styles.infoLabel}>Архитектура</span>
                          <span className={styles.infoValue}>{project.architecture}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Architecture для новых проектов */}
                  {!('team' in project) && project.architecture && (
                    <div className={styles.architectureSection}>
                      <div className={styles.sectionHeader}>
                        <Layers size={16} />
                        <span>Архитектура</span>
                      </div>
                      <p className={styles.architectureText}>{project.architecture}</p>

                      {/* Microservices */}
                      {project.microservices && project.microservices.length > 0 && (
                        <div className={styles.microservicesList}>
                          {project.microservices.map((service, idx) => (
                            <div key={idx} className={styles.microserviceItem}>
                              {service}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}


                  {/* Tech Stack */}
                  <div className={styles.techSection}>
                    <div className={styles.sectionHeader}>
                      <Code size={16} />
                      <span>Технологический стек</span>
                    </div>
                    <div className={styles.techStack}>
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className={styles.techBadge}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className={styles.highlightsSection}>
                    <div className={styles.sectionHeader}>
                      <Rocket size={16} />
                      <span>Ключевые достижения</span>
                    </div>
                    <ul className={styles.highlightsList}>
                      {project.highlights.map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  {project.results && project.results.length > 0 && (
                    <div className={styles.resultsSection}>
                      <div className={styles.sectionHeader}>
                        <TrendingUp size={16} />
                        <span>Результаты</span>
                      </div>
                      <div className={styles.resultsGrid}>
                        {project.results.map((result, idx) => (
                          <div key={idx} className={styles.resultItem}>
                            <div className={styles.resultMetric}>{result.metric}</div>
                            <div className={styles.resultValue}>{result.value}</div>
                            {result.description && (
                              <div className={styles.resultDescription}>{result.description}</div>
                            )}
                          </div>
                        ))}
                      </div>
                      {project.feedback && (
                        <div className={styles.feedback}>
                          <strong>Фидбек:</strong> {project.feedback}
                        </div>
                      )}
                    </div>
                  )}


                  {project.link && (
                    <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                      <span>Посмотреть проект</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};
