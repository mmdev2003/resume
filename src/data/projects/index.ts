export * from './types';
export { loomProject } from './loom';
export { wewallaiProject } from './wewallai';
export { vtbaihrProject } from './vtbaihr';
export { finforumProject } from './finforum';
export { crmessengerProject } from './crmessenger';
export { nodusVPNProject } from './nodusvpn';
export { donatehelperProject } from './donatehelper';
export { filesharexProject } from './filesharex';
export { sheetsGPTProject } from './sheetsgpt';
export { cryptotradingProject } from './cryptotrading';

import { loomProject } from './loom';
import { wewallaiProject } from './wewallai';
import { vtbaihrProject } from './vtbaihr';
import { finforumProject } from './finforum';
import { crmessengerProject } from './crmessenger';
import { nodusVPNProject } from './nodusvpn';
import { donatehelperProject } from './donatehelper';
import { filesharexProject } from './filesharex';
import { sheetsGPTProject } from './sheetsgpt';
import { cryptotradingProject } from './cryptotrading';
import type { Project } from './types';

export const allProjects: Project[] = [
  loomProject,
  wewallaiProject,
  sheetsGPTProject,
  finforumProject,
  crmessengerProject,
  filesharexProject,
  cryptotradingProject,
  vtbaihrProject,
  nodusVPNProject,
  donatehelperProject,
];

