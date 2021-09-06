<script lang = "ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

import { icons } from '~/config/icons'
import NotificationPopUp from '~/components/notifications/pop-up.vue'
import LinkIconList from '~/components/links/icon-list.vue'

import type { Links } from '@/config/profile'

function copyToClipboard (text: string): void {
  navigator.clipboard.writeText(text)
}

export default defineComponent({
  name: 'PageRootContact',
  components: {
    NotificationPopUp,
    LinkIconList,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    links: {
      type: Array as Prop<Links>,
      default: () => [],
    },
    contentId: {
      type: String,
      default: '',
    },
    contentClass: {
      type: String,
      default: '',
    },
  },
  setup (props) {
    const copiedNotification = ref()

    function copyEmailToClipboard () {
      copyToClipboard(props.email)
      copiedNotification.value.open()
    }

    return {
      icons,
      copiedNotification,
      copyEmailToClipboard,
    }
  },
})
</script>

<template>
  <v-row
    justify="center"
    align="center"
    class="text-center section"
  >
    <v-col
      :id="contentId"
      :class="contentClass"
      cols="12"
      class="g-layer-content g-bound-less"
    >
      <div class="mb-10">
        <div class="text-h3 pa-1 text-center g-text-pair">
          <slot name="title" />
        </div>
        <div class="text-h5 pa-1 text-center">
          <slot name="description" />
        </div>
      </div>

      <v-btn
        class="primary my-4"
        :href="`mailto:${email}`"
        x-large
      >
        Drop me an email
        <v-icon class="pl-1">
          {{ icons.mdiEmail }}
        </v-icon>
      </v-btn>

      <div class="my-4">
        <div class="text-h5 g-text-pair">
          {{ name }}
        </div>
        <div class="mailto-text">
          <a
            :href="`mailto:${email}`"
            aria-label="Send me an email"
          >{{ email }}</a>
          <v-btn
            :icon="true"
            aria-label="Copy email address to clipboard"
            small
            @click.stop="copyEmailToClipboard"
          >
            <v-icon size="20px">
              {{ icons.mdiContentCopy }}
            </v-icon>
          </v-btn>
          <notification-pop-up
            ref="copiedNotification"
            :timeout="1500"
            message="Copied email address to clipboard"
          />
        </div>
      </div>

      <div class="mt-10">
        <div class="text-subtitle-1 pb-2 g-text-pair">
          Find me online
        </div>
        <link-icon-list
          :links="links"
          justify="center"
          icon-class="mx-1 mx-md-2"
        />
      </div>
    </v-col>
    <div class="g-layer-background">
      <slot name="background" />
    </div>
  </v-row>
</template>

<style lang="scss" scoped>
  .mailto-text a {
    color: $accent;
  }
</style>
<style src="~/assets/styles/pages/index.scss" lang="scss" scoped/>
