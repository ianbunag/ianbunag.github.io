import type { ConfigIcons } from '~/config/icons'
import type { ConfigTechnologies } from '~/config/technologies'
import type { Project, Projects } from '@/config/profile'

export enum LinkName {
  VIEW_SOURCE= 'View source',
  TRY_ME = 'Try me!',
  WATCH_ME = 'Watch me!',
}
/**
 * @TODO Make consuming components pure by refactoring to pattern with
 *  src/config/profile/links.ts reference implementation
 */
export type ProfileProject = Project<ConfigIcons, ConfigTechnologies>
export type ProfileProjects = Projects<ConfigIcons, ConfigTechnologies>
