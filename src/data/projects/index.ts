export * from './types';
export { loomProject } from './loom';
export { vtbaihrProject } from './vtbaihr';
export { finforumProject } from './finforum';
export { crmessengerProject } from './crmessenger';
export { nodusVPNProject } from './nodusvpn';
export { donatehelperProject } from './donatehelper';

import { loomProject } from './loom';
import { vtbaihrProject } from './vtbaihr';
import { finforumProject } from './finforum';
import { crmessengerProject } from './crmessenger';
import { nodusVPNProject } from './nodusvpn';
import { donatehelperProject } from './donatehelper';
import type { Project } from './types';

export const allProjects: Project[] = [
  loomProject,
  vtbaihrProject,
  finforumProject,
  crmessengerProject,
  nodusVPNProject,
  donatehelperProject,
  // Здесь будут добавлены другие проекты
];

