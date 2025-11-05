/**
 * Типы для детального case study проектов
 */

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectBadge {
  text: string;
  variant: 'enterprise' | 'social' | 'web3' | 'architecture' | 'ai' | 'backend' | 'frontend';
}

export interface TechnicalChallenge {
  title: string;
  description: string;
  solution?: string;
}

export interface KeyFeature {
  title: string;
  description: string;
  technicalDetails?: string;
}

export interface ArchitectureDetail {
  pattern: string;
  description: string;
}

export interface ProjectResult {
  metric: string;
  value: string;
  description?: string;
}

/**
 * Основной интерфейс проекта с поддержкой детального case study
 */
export interface Project {
  // Базовая информация
  id: string;
  title: string;
  subtitle: string;
  description: string;
  featured: boolean;
  link?: string;

  // Визуальные элементы
  badges: ProjectBadge[];
  metrics: ProjectMetric[];

  // Executive Summary
  role: string;
  duration: string;
  teamSize: string;
  status: string;

  // Проблема и контекст
  businessProblem?: string;
  challenges: TechnicalChallenge[];

  // Решение
  solution: string;
  keyFeatures: KeyFeature[];

  // Архитектура
  architecture: string;
  microservices?: string[];

  // Технологии
  techStack: string[];

  // Хайлайты
  highlights: string[];

  // Результаты
  results: ProjectResult[];
  feedback: string;
}

/**
 * Упрощенный интерфейс проекта (для совместимости)
 */
export interface SimpleProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badges?: ProjectBadge[];
  metrics?: ProjectMetric[];
  team: string;
  architecture: string;
  techStack: string[];
  highlights: string[];
  link?: string;
  featured?: boolean;
}
