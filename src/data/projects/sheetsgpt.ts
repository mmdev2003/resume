import type { Project } from './types';

export const sheetsGPTProject: Project = {
  id: 'sheetsgpt',
  title: 'SheetsGPT',
  subtitle: 'AI-платформа для анализа табличных данных через естественный язык',
  featured: true,
  description: `
SheetsGPT — это B2B SaaS платформа, разработанная в 2023 году сразу после релиза OpenAI GPT API,
когда интеграция GPT в бизнес-приложения была настоящей инновацией. Проект решал реальную проблему:
аналитики данных тратили часы на написание Python-скриптов для анализа таблиц, визуализации и
обработки данных.

Ключевая идея — пользователь загружает таблицу (CSV/Excel), описывает что хочет сделать на
естественном языке (например: "найди корреляцию между продажами и сезонностью"), а система
автоматически генерирует Python-код через GPT-3.5, безопасно выполняет его и возвращает результат.

Платформа использовала микросервисную архитектуру с 5 специализированными сервисами: от управления
пользователями с 2FA до AI-движка с 5-этапным pipeline обработки запросов. В центре архитектуры —
Query Service, реализующий сложный процесс: реформулировка запроса → анализ структуры данных →
генерация Python-кода → безопасное выполнение в sandbox → форматирование результата.

Проект получил признание: команда стала резидентами Сколково, а МТС и Ростелеком проявили интерес
к интеграции платформы. Однако POC показал главную проблему эпохи — GPT-3.5 генерировал код с
недостаточной точностью для production использования. Это был важный learning experience.
  `.trim(),

  // Визуальные элементы
  badges: [
    { text: 'AI Platform', variant: 'ai' },
    { text: 'B2B SaaS', variant: 'enterprise' },
    { text: 'Microservices', variant: 'backend' },
    { text: 'Early GPT Adopter', variant: 'architecture' },
  ],

  metrics: [
    { label: 'Микросервисы', value: '5' },
    { label: 'Разработка', value: '4 мес' },
    { label: 'Команда', value: '3 человека' },
    { label: 'Крупные интеграторы', value: '2' },
    { label: 'Статус', value: 'Резидент Сколково' },
  ],

  // Executive Summary
  role: 'Backend/AI Engineer',
  duration: '3-4 месяца',
  teamSize: '3-5 инженеров',
  status: 'Закрыт после POC (GPT-3.5 показал недостаточную точность)',

  // Проблема и контекст
  businessProblem: 'Аналитики данных тратили часы на рутинную работу: написание Python-скриптов для анализа таблиц, создание визуализаций, очистку данных. Требовался инструмент, позволяющий решать эти задачи через естественный язык без программирования.',
  solution: 'Создана AI-платформа с микросервисной архитектурой (5 сервисов), где GPT-3.5 генерирует Python-код для операций с таблицами на основе natural language запросов. Ключевые инновации: (1) 5-этапный AI pipeline для точности (реформулировка → анализ → генерация → выполнение → форматирование), (2) sandbox для безопасного выполнения кода, (3) распределенное хранилище WeedFS для масштабируемости.',

  challenges: [
    {
      title: 'Точность генерации кода GPT-3.5',
      description: 'GPT-3.5 генерировал Python-код с ошибками: неправильные pandas операции, некорректная логика, синтаксические проблемы',
      solution: 'Разработан 5-этапный pipeline с промежуточными проверками: реформулировка запроса для четкости, анализ структуры данных перед генерацией, пошаговый план действий, затем генерация кода с контекстом. Несмотря на оптимизацию, точность осталась недостаточной для production',
    },
    {
      title: 'Prompt Engineering для Code Generation',
      description: 'Создание промптов, которые генерируют корректный и безопасный Python-код для различных типов запросов (анализ, визуализация, очистка данных)',
      solution: 'Разработана система промптов с инжекцией контекста: структура таблицы с типами данных, примеры строк, описание желаемого результата. Промпты разбиты на этапы для управления сложностью и снижения стоимости API',
    },
  ],

  // Ключевые возможности
  keyFeatures: [
    {
      title: '1. Natural Language Queries (GPT-3.5)',
      description: 'Пользователь описывает желаемую операцию на естественном языке, система понимает intent и преобразует в технический план',
      technicalDetails: '5-этапный pipeline: (1) reformulation - уточнение запроса, (2) data analysis - анализ структуры таблицы, (3) step-by-step plan - пошаговый план, (4) code generation - Python скрипт, (5) result formatting - представление результата',
    },
    {
      title: '2. Python Code Generation',
      description: 'Автоматическая генерация pandas/numpy скриптов для анализа данных, визуализации, статистики, очистки',
      technicalDetails: 'GPT-3.5 генерирует код с контекстом: структура таблицы (columns, dtypes), preview данных (200 строк), пользовательский запрос. Поддержка различных операций: aggregations, filtering, joins, correlations, visualizations',
    },
    {
      title: '3. Secure Code Execution Sandbox',
      description: 'Безопасное выполнение GPT-генерируемого Python-кода в изолированной среде',
      technicalDetails: 'Sandbox с ограничениями: whitelist библиотек (pandas, numpy, matplotlib, seaborn), execution timeout (30s), memory limit, запрет file I/O, network, subprocess. Перехват stdout/stderr для результата',
    },
    {
      title: '4. Multi-format File Support (CSV, Excel)',
      description: 'Загрузка таблиц в различных форматах с автоматической конвертацией и оптимизацией',
      technicalDetails: 'pandas для чтения CSV/Excel, автоматическое определение encoding и delimiters, конвертация в единый формат, gzip сжатие для экономии места, preview первых 200 строк для UI',
    },
    {
      title: '5. Distributed File Storage (SeeweedFS)',
      description: 'Масштабируемое хранилище для загруженных таблиц и результатов',
      technicalDetails: 'SeeweedFS для распределенного хранения файлов, генерация уникальных system names для файлов, metadata в PostgreSQL (user_id, filename, size, uploaded_at), кеширование в Redis для быстрого доступа',
    },
    {
      title: '6. Two-Factor Authentication (2FA)',
      description: 'Корпоративная безопасность: двухфакторная аутентификация с QR-кодами',
      technicalDetails: 'PyOTP для генерации TOTP кодов, QR-коды для настройки authenticator apps (Google Authenticator, Authy), JWT токены (Access + Refresh) для session management, bcrypt для хеширования паролей',
    },
    {
      title: '7. Account & Subscription Management',
      description: 'Управление пользователями, профилями (личные/корпоративные аккаунты), интеграция с AmoCRM',
      technicalDetails: 'Account Service с PostgreSQL: user profiles, subscription tiers, usage quotas. AmoCRM API для lead management. Password recovery через email. Role-based access control',
    },
  ],

  // Архитектура
  architecture: 'Микросервисная архитектура из 5 независимых сервисов на FastAPI с REST API коммуникацией. PostgreSQL для метаданных, Redis для кеширования, WeedFS для файлов. Все сервисы контейнеризованы через Docker.',

  microservices: [
    'sheetsgpt-account — Управление пользователями и подписками. Регистрация, аутентификация, профили (личные/корпоративные), интеграция с AmoCRM для лидов, восстановление паролей. Stack: FastAPI, PostgreSQL, bcrypt',
    'sheetsgpt-auth — Централизованная аутентификация и авторизация. JWT токены (Access + Refresh), двухфакторная аутентификация (2FA) с QR-кодами через PyOTP, управление сессиями, проверка прав доступа',
    'sheetsgpt-table — Управление таблицами и файлами. Загрузка CSV/Excel, автоматическая конвертация форматов, сжатие через gzip, WeedFS для распределенного хранения, preview данных (200 строк), генерация уникальных system names',
    'sheetsgpt-query — ❤️ AI-движок (ядро системы). 5-этапный pipeline: реформулировка запроса → анализ данных → генерация кода → выполнение в sandbox → форматирование. OpenAI GPT-3.5 API, умные промпты с контекстом, безопасное выполнение Python',
    'sheetsgpt-alert-bot — Telegram-бот для системных уведомлений',
  ],

  techStack: [
    'Python FastAPI',
    'React',
    'PostgreSQL',
    'Redis',
    'SeeweedFS',
    'OpenAI GPT-3.5 API',
    'pandas',
    'numpy',
    'matplotlib',
    'seaborn',
    'PyOTP',
    'JWT',
    'Telegram Bot API',
    'Docker Compose',
    'asyncio',
  ],

  highlights: [
    'Один из первых российских проектов, использовавших OpenAI GPT API сразу после релиза в 2023',
    'Команда стала резидентами центра Сколково',
    'МТС и Ростелеком проявили интерес к интеграции платформы',
    'Разработал AI-движок с 5-этапным pipeline для генерации Python-кода',
    'Спроектировал микросервисную архитектуру из 5 независимых сервисов',
    'Реализовал secure sandbox для безопасного выполнения GPT-генерируемого кода',
    'Интегрировал SeeweedFS для масштабируемого распределенного хранения файлов',
    'Внедрил 2FA аутентификацию с PyOTP и QR-кодами для корпоративной безопасности',
    'Создал систему prompt engineering с контекстом структуры таблиц',
    'Получил ценный опыт о limitations GPT-3.5 в code generation задачах',
  ],

  results: [
    {
      metric: 'Резидентство Сколково',
      value: 'Получено',
      description: 'Команда стала резидентами инновационного центра Сколково, получив признание инновационности проекта',
    },
    {
      metric: 'Интерес крупных интеграторов',
      value: 'МТС и Ростелеком',
      description: 'Две крупнейшие телеком компании России проявили интерес к интеграции SheetsGPT в свои продукты',
    },
    {
      metric: 'Технический MVP',
      value: '5 микросервисов',
      description: 'Разработан полнофункциональный MVP с микросервисной архитектурой, AI-движком, sandbox выполнения кода',
    },
    {
      metric: 'POC результат',
      value: 'Не подтвержден',
      description: 'GPT-3.5 показал недостаточную точность генерации Python-кода для production. Важный learning experience о limitations ранних GPT моделей',
    },
  ],

  feedback: 'Проект стал важным learning experience: GPT-3.5, несмотря на впечатляющие возможности, показал недостаточную точность для автоматической генерации production-ready кода.  Архитектурные решения (микросервисы, sandbox, prompt engineering pipeline) остаются актуальными для современных AI-платформ.',
};
