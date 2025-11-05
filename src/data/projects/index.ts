/**
 * Центральный экспорт всех проектов
 */

export * from './types';
export { loomProject } from './loom';
export { vtbaihrProject } from './vtbaihr';
export { finforumProject } from './finforum';

import { loomProject } from './loom';
import { vtbaihrProject } from './vtbaihr';
import { finforumProject } from './finforum';
import type { Project } from './types';

/**
 * Массив всех проектов для отображения
 */
export const allProjects: Project[] = [
  loomProject,
  vtbaihrProject,
  finforumProject,
  // Здесь будут добавлены другие проекты
];

/**
 * Получить проект по ID
 */
export const getProjectById = (id: string): Project | undefined => {
  return allProjects.find(project => project.id === id);
};

/**
 * Получить только featured проекты
 */
export const getFeaturedProjects = (): Project[] => {
  return allProjects.filter(project => project.featured);
};
