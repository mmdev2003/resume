import type { Project } from './types';

export const cryptotradingProject: Project = {
  id: 'cryptotrading',
  title: 'CryptoTrading Bot',
  subtitle: 'AI-система автоматизированной торговли криптовалютами',
  featured: true,
  description: `
CryptoTrading Bot — это автоматизированная торговая система для криптовалютных бирж, разработанная
как стартап-продукт. Система объединяет классические методы технического анализа с современными
подходами Deep Learning для принятия торговых решений в режиме реального времени.

Ключевая архитектурная особенность — гибридный подход: высокопроизводительное ядро на Go для
управления сделками и обработки WebSocket потоков, а Python ML pipeline для анализа временных
рядов с использованием Transformer архитектуры. Python компоненты отправляют HTTP-триггеры
Go-модулю при обнаружении торговых сигналов, обеспечивая минимальную латентность исполнения.

Проект достиг стадии MVP за 2 месяца разработки с командой из 2 инженеров. Система способна
работать с неограниченным количеством торговых пар (по одной позиции на пару), включает
комплексную систему risk management и real-time мониторинг через Telegram интерфейс.
  `.trim(),

  // Визуальные элементы
  badges: [
    { text: 'FinTech', variant: 'enterprise' },
    { text: 'AI Trading', variant: 'ai' },
    { text: 'Algorithmic Trading', variant: 'backend' },
    { text: 'Real-time', variant: 'architecture' },
  ],

  metrics: [
    { label: 'AI модель', value: 'Transformer' },
    { label: 'Биржа', value: 'Bybit' },
    { label: 'Торговые пары', value: 'Unlimited' },
    { label: 'Разработка', value: '2 мес' },
    { label: 'Статус', value: 'MVP' },
  ],

  // Executive Summary
  role: 'Tech Lead & AI Engineer',
  duration: '2 месяца (до MVP)',
  teamSize: 'Я + трейдер',
  status: 'MVP завершен, проект заморожен (планировалась мультимодальность с CV)',

  // Проблема и контекст
  businessProblem: 'Задача стартапа: создать автоматизированную систему криптовалютной торговли, способную принимать решения на основе AI-анализа рынка и технических индикаторов, при этом обеспечивая быстрое исполнение сделок и надежную защиту капитала через комплексную систему risk management.',
  solution: 'Разработана гибридная архитектура с разделением ответственности: Go-микросервис обеспечивает высокопроизводительное управление торговыми операциями и WebSocket подключениями, Python ML pipeline выполняет анализ временных рядов через Transformer модель и технический анализ (Pine Script/Python). Коммуникация через HTTP триггеры при обнаружении торговых сигналов. Система включает автоматический risk management (stop-loss, take-profit, trailing stop, max drawdown limits) и Telegram интерфейс для мониторинга.',

  challenges: [
    {
      title: 'Real-time обработка WebSocket потока',
      description: 'Необходимость обрабатывать непрерывный поток рыночных данных от Bybit в режиме реального времени для множества торговых пар одновременно без потери данных и с минимальной латентностью',
      solution: 'Использование Go с goroutines и channels для конкурентной обработки WebSocket соединений. Каждая торговая пара обрабатывается в отдельной горутине, обеспечивая изоляцию и эффективное использование всех ядер процессора',
    },
    {
      title: 'Обучение и интеграция Transformer модели',
      description: 'Сложность подготовки временных рядов OHLCV данных и обучения Transformer модели для предсказания движения цены криптовалют с приемлемой точностью',
      solution: 'Разработан специализированный preprocessing pipeline для временных рядов с нормализацией и feature engineering. Transformer обучен на PyTorch с использованием исторических данных. Модель развернута как HTTP-сервис для инференса с минимальной латентностью',
    },
    {
      title: 'Синхронизация позиций с биржей',
      description: 'Проблема поддержания консистентности состояния локальных позиций с реальным состоянием на бирже Bybit, особенно при сетевых сбоях или частичном исполнении ордеров',
      solution: 'Реализован reconciliation механизм с периодической сверкой локального состояния с биржей через REST API. Event-driven архитектура для обработки уведомлений об изменении позиций и ордеров через WebSocket',
    },
  ],

  // Ключевые возможности
  keyFeatures: [
    {
      title: '1. Transformer DL модель для анализа временных рядов',
      description: 'Deep Learning модель на базе Transformer архитектуры для предсказания движения цены',
      technicalDetails: 'PyTorch модель, обученная на исторических OHLCV данных. Preprocessing pipeline с нормализацией и feature engineering. HTTP API для inference с латентностью <100ms',
    },
    {
      title: '2. Dual strategy system: Pine Script + Python TA',
      description: 'Гибкая система торговых стратегий с поддержкой TradingView Pine Script и Python',
      technicalDetails: 'Возможность написания стратегий технического анализа либо на Pine Script (TradingView), либо на Python с использованием библиотек TA-Lib, pandas-ta. Обе стратегии отправляют HTTP триггеры Go-модулю',
    },
    {
      title: '3. Go-based высокопроизводительное ядро управления сделками',
      description: 'Многопоточное ядро на Go для управления торговыми операциями',
      technicalDetails: 'Использование goroutines для конкурентного управления множеством торговых пар. Channels для безопасной коммуникации между компонентами. Эффективное использование всех ядер CPU',
    },
    {
      title: '4. HTTP-triggered архитектура Python → Go',
      description: 'Асинхронная коммуникация между ML/TA компонентами и торговым ядром',
      technicalDetails: 'Python компоненты (DL модель и TA скрипты) отправляют HTTP POST запросы с торговыми сигналами к Go HTTP серверу. Go обрабатывает сигналы и принимает решения о входе/выходе из позиций',
    },
    {
      title: '5. Comprehensive risk management system',
      description: 'Многоуровневая система управления рисками и защиты капитала',
      technicalDetails: 'Автоматическое выставление stop-loss и take-profit на каждую позицию. Trailing stop для фиксации прибыли с динамическим движением за ценой. Max drawdown limits для ограничения просадки портфеля. Position sizing алгоритмы',
    },
    {
      title: '6. Real-time WebSocket integration с Bybit',
      description: 'Постоянное подключение к Bybit для получения рыночных данных и обновлений позиций',
      technicalDetails: 'WebSocket подключения для market data (orderbook, trades, klines) и account updates (positions, orders). Автоматическое переподключение при обрывах. Buffering для предотвращения потери данных',
    },
    {
      title: '7. Multi-pair trading engine',
      description: 'Масштабируемая система для одновременной торговли множеством криптовалютных пар',
      technicalDetails: 'Архитектура позволяет работать с неограниченным количеством торговых пар. Ограничение: одна активная позиция на пару для упрощения risk management. Каждая пара обрабатывается независимо',
    },
    {
      title: '8. Telegram Bot для мониторинга и управления',
      description: 'Real-time интерфейс для мониторинга позиций и управления ботом',
      technicalDetails: 'Telegram Bot API интеграция для получения уведомлений о входе/выходе из позиций, текущих P&L, статусе системы. Возможность ручного управления (пауза/возобновление, закрытие позиций)',
    },
  ],

  // Архитектура
  architecture: 'Гибридная микросервисная архитектура: Go высокопроизводительное ядро + Python ML/TA pipeline с HTTP коммуникацией',

  microservices: [
    'Go Trading Engine — Ядро управления сделками, обработка сигналов, исполнение ордеров, расчет и применение stop-loss, trailing stop, drawdown limits',
    'Python DL Inference Service — HTTP-сервис для Transformer модели inference',
    'Python TA Script Engine — Технический анализ с Pine Script/Python стратегиями',
    'Telegram Bot Interface — Мониторинг и управление через Telegram',
  ],

  techStack: [
    'Go + Goroutines',
    'Python ',
    'PyTorch',
    'Transformer Architecture',
    'FastAPI',
    'Bybit API',
    'WebSocket',
    'Telegram Bot API',
    'TA-Lib',
    'pandas-ta',
    'Pine Script',
    'NumPy + Pandas',
    'Docker',
    'PostgreSQL',
  ],

  highlights: [
    'Разработал полнофункциональный алгоритмический трейдинг бот за 2 месяца до MVP',
    'Реализовал гибридную Go+Python архитектуру для оптимального баланса производительности и ML',
    'Интегрировал Transformer DL модель для анализа временных рядов криптовалют',
    'Создал dual strategy систему: поддержка TradingView Pine Script и Python TA',
    'Реализовал comprehensive risk management: SL/TP, trailing stop, max drawdown limits',
    'Обеспечил real-time обработку WebSocket потока с Bybit для множества торговых пар',
    'Разработал HTTP-triggered архитектуру для минимальной латентности между ML и Trading Engine',
    'Реализовал multi-pair trading engine с поддержкой неограниченного количества пар',
    'Создал Telegram интерфейс для real-time мониторинга и управления позициями',
    'Спроектировал event-driven reconciliation механизм для синхронизации с биржей',
  ],

  results: [
    {
      metric: 'MVP разработка',
      value: '2 месяца',
      description: 'Достижение полнофункционального MVP командой из 2 инженеров',
    },
    {
      metric: 'Масштабируемость',
      value: 'Unlimited pairs',
      description: 'Система способна работать с неограниченным количеством торговых пар (1 позиция/пара)',
    },
    {
      metric: 'Обработка сделок',
      value: 'High volume',
      description: 'Успешная обработка большого объема торговых сделок в тестовом режиме',
    },
    {
      metric: 'Проект',
      value: 'Заморожен',
      description: 'MVP завершен. Планировалась мультимодальность (CV анализ графиков), но не хватило ресурсов для продолжения',
    },
  ],

  feedback: 'MVP успешно реализован с полным набором функций для автоматизированной торговли. Проект заморожен на стадии MVP: планировалось добавление компьютерного зрения (CV) для мультимодального анализа графиков цен, но команда переключилась на другие приоритеты. Система показала высокую стабильность работы и способность обрабатывать большой объем торговых операций.',
};
