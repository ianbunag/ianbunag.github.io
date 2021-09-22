<script lang="ts">
import {
  defineComponent,
  toRefs,
  ref,
  computed,
  watch,
} from '@nuxtjs/composition-api'

import { useBreakPoints, useIsMounted } from '~/lib/hooks'
import { icons } from '~/config/icons'
import Tags from '~/components/tags.vue'
import TechnologyIconList from '~/components/technology/icon-list.vue'
import ImageLoader from '~/components/image/loader.vue'

import type { Project } from '@/config/profile'

interface HeadingOptions {
  title: Heading.Levels,
  subtitle: Heading.Levels,
}

export const headingOptions = {
  type: Object as Prop<HeadingOptions>,
  default: () => ({}),
}

export default defineComponent({
  name: 'ProjectModal',
  components: {
    Tags,
    TechnologyIconList,
    ImageLoader,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    project: {
      type: Object as Prop<Project>,
      required: true,
    },
    heading: headingOptions,
  },
  emits: ['active-changed'],
  setup (props, { emit }) {
    const { isMobile } = toRefs(useBreakPoints())
    const isMounted = useIsMounted()
    const { active } = toRefs(props)
    const carouselIndex = ref(0)

    const computedActive = computed({
      /**
       * Prevent dialog from rendering while instance is not mounted. When
       *  dialog's active state is initially true, it causes render errors due
       *  to its dependency elements not yet existing before mounting completes
       */
      get (): boolean { return isMounted.value && active.value },
      set (value: boolean) { emit('active-changed', value) },
    })
    const contentClass = 'projects-showcase-dialog'

    function open () {
      carouselIndex.value = 0
      computedActive.value = true
    }

    function close () {
      computedActive.value = false
    }

    watch(computedActive, (flag) => {
      const selector = `.v-dialog--active.${contentClass}`
      const content = document.querySelector(selector)

      if (content && !flag) { content.scrollTop = 0 }
    })

    return {
      isMobile,
      computedActive,
      carouselIndex,
      contentClass,
      open,
      close,
      icons,
    }
  },
})
</script>

<template>
  <v-dialog
    v-model="computedActive"
    :width="isMobile ? undefined : '70vw'"
    :content-class="contentClass"
    class="projects-showcase-dialog-container"
  >
    <v-card>
      <v-btn
        icon
        class="absolute"
        aria-label="Close project modal"
        large
        @click="close"
      >
        <v-icon large>
          {{ icons.mdiClose }}
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
      <v-card-title class="mb-2">
        <heading
          :level="heading.title || 3"
          class="text-h4 pf-text-pair"
        >
          {{ project.name }}
        </heading>
      </v-card-title>
      <v-card-subtitle class="text-left py-2">
        <heading
          :level="heading.subtitle || 4"
          class="text-subtitle-2 pf-text-pair-accent"
        >
          {{ project.period }}
        </heading>
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
          <technology-icon-list
            :technologies="project.technologies"
            class="pt-1"
          />
        </div>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <responsive-container
          justify="end"
          class="py-2"
        >
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
            :small="isMobile"
          >
            <v-icon class="mr-1" :small="isMobile">
              {{ project.secondaryLink.linkIcon }}
            </v-icon>
            {{ project.secondaryLink.text }}
          </v-btn>
          <v-btn
            v-if="project.primaryLink"
            color="primary"
            :disabled="!Boolean(project.primaryLink.link)"
            :href="project.primaryLink.link"
            :small="isMobile"
          >
            <v-icon class="mr-1" :small="isMobile">
              {{ project.primaryLink.linkIcon }}
            </v-icon>
            {{ project.primaryLink.text }}
          </v-btn>
        </responsive-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
  .projects-showcase-dialog-container {
    z-index: $layer-modal;
  }

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
