import { webApplications } from '~/config/profile/projects/web-applications'
import { applicationSoftwares } from '~/config/profile/projects/application-softwares'
import { kata } from '~/config/profile/projects/kata'
import { creativeMedia } from '~/config/profile/projects/creative-media'

import type { Projects } from '@/config/profile'

export const projects: Projects = [
  ...webApplications,
  ...applicationSoftwares,
  ...kata,
  ...creativeMedia,
]
