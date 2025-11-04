/**
 * Центральный экспорт всех проектов
 */

export * from './types';
export { loomProject } from './loom';

import { loomProject } from './loom';
import type { Project } from './types';

/**
 * Массив всех проектов для отображения
 */
export const allProjects: Project[] = [
  loomProject,
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
