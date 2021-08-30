<script lang="ts">
import {
  defineComponent,
  toRefs,
  ref,
  watch,
} from '@nuxtjs/composition-api'

import { useBreakPoints } from '~/lib/hooks'
import { getIcon } from '~/config/icons'
import Tags from '~/components/tags.vue'
import TechnologyList from '~/components/technology/list.vue'
import ImageLoader from '~/components/image/loader.vue'
import ResponsiveContainer from '~/components/wrappers/responsive-container.vue'

import type { ProfileProject } from '~/config/profile/projects'

export default defineComponent({
  name: 'ProjectModal',
  components: {
    Tags,
    TechnologyList,
    ImageLoader,
    ResponsiveContainer,
  },
  props: {
    project: {
      type: Object as Prop<ProfileProject>,
      required: true,
    },
  },
  setup () {
    const { isMobile } = toRefs(useBreakPoints())
    const active = ref(false)
    const carouselIndex = ref(0)
    const contentClass = 'projects-showcase-dialog'

    function open () {
      carouselIndex.value = 0
      active.value = true
    }

    function close () {
      active.value = false
    }

    watch(active, (flag) => {
      const selector = `.v-dialog--active.${contentClass}`
      const content = document.querySelector(selector)

      if (content && !flag) { content.scrollTop = 0 }
    })

    return {
      isMobile,
      active,
      carouselIndex,
      contentClass,
      open,
      close,
      getIcon,
    }
  },
})
</script>

<template>
  <v-dialog
    v-if="project"
    v-model="active"
    :width="isMobile ? undefined : '70vw'"
    :content-class="contentClass"
  >
    <v-card>
      <v-btn
        icon
        class="absolute"
        large
        @click="close"
      >
        <v-icon large>
          {{ getIcon('mdiClose') }}
        </v-icon>
      </v-btn>
      <!--
          Cycle disabled due to dialog container scrolling to top when the
            carousel switches slides
        -->
      <v-carousel
        v-model="carouselIndex"
        :height="isMobile ? 225 : 500"
        :show-arrows="project.images.length > 1"
        :hide-delimiters="project.images.length < 2"
      >
        <v-carousel-item
          v-for="(src, index) in project.images"
          :key="index"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-img
            :src="src"
            height="100%"
            aspect-ratio="16/9"
            position="center center"
            class="back-drop"
          />
          <v-img
            :src="src"
            height="100%"
            aspect-ratio="16/9"
            position="center center"
            contain
          >
            <template #placeholder>
              <image-loader />
            </template>
          </v-img>
        </v-carousel-item>
      </v-carousel>
      <v-card-title class="text-h4">
        {{ project.name }}
      </v-card-title>
      <v-card-subtitle class="text-left text-subtitle-2 py-2">
        {{ project.period }}
      </v-card-subtitle>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <v-card-text class="text-body-1" v-html="project.description" />
      <v-divider />
      <v-card-text class="text-body-1">
        <div class="mt-3">
          <span class="text-overline">Tags</span>
          <tags
            :tags="project.tags"
            class="pt-1"
          />
        </div>
        <div class="mt-3">
          <span class="text-overline">Tech</span>
          <technology-list
            :technologies="project.technologies"
            class="pt-1"
          />
        </div>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <responsive-container justify="end">
          <v-btn
            text
            :small="isMobile"
            @click="close"
          >
            Close
          </v-btn>
          <v-btn
            v-if="project.secondaryLink"
            color="secondary"
            :disabled="!Boolean(project.secondaryLink.link)"
            :href="project.secondaryLink.link"
            target="_blank"
            rel="noreferrer nofollow"
            :small="isMobile"
          >
            <v-icon class="mr-1" :small="isMobile">
              {{ getIcon(project.secondaryLink.icon) }}
            </v-icon>
            {{ project.secondaryLink.text }}
          </v-btn>
          <v-btn
            v-if="project.primaryLink"
            color="primary"
            :disabled="!Boolean(project.primaryLink.link)"
            :href="project.primaryLink.link"
            target="_blank"
            rel="noreferrer nofollow"
            :small="isMobile"
          >
            <v-icon class="mr-1" :small="isMobile">
              {{ getIcon(project.primaryLink.icon) }}
            </v-icon>
            {{ project.primaryLink.text }}
          </v-btn>
        </responsive-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
  .absolute {
    z-index: $layer-modal;
    position: absolute;
    top: 5px;
    right: 5px;
  }

  $back-drop-blur: blur(16px);

  .back-drop {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.85;
    filter: $back-drop-blur;
    -webkit-filter: $back-drop-blur;
    -moz-filter: $back-drop-blur;
    -o-filter: $back-drop-blur;
    -ms-filter: $back-drop-blur;
  }
</style>
