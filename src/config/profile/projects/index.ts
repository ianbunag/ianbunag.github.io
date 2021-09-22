import { webApplications } from '~/config/profile/projects/web-applications'
import { applicationSoftwares } from '~/config/profile/projects/application-softwares'
import { kata } from '~/config/profile/projects/kata'
import { graphicsDesign } from '~/config/profile/projects/graphic-design'
import { threeDimensionDesign } from '~/config/profile/projects/three-dimension-design'

import type { Projects } from '@/config/profile'

export const projects: Projects = [
  ...webApplications,
  ...applicationSoftwares,
  ...kata,
  ...graphicsDesign,
  ...threeDimensionDesign,
]
