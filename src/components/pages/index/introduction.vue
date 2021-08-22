<script lang = "ts">
import {
  defineComponent,
  ref,
  reactive,
  computed,
  toRef,
} from '@nuxtjs/composition-api'
import { write, presets } from 'glitched-writer'

import { name, tag, titles } from '~/config/profile.json'
import BrandingLogoWhite from '~/components/branding/logo/white.vue'

enum NameState {
  TYPING_TAG,
  REPLACE_TAG,
  REPLACING_NAME,
  REPLACED_NAME,
}

const typerSettings = {
  initialAction: 'typing',
  preTypeDelay: 70,
  typeDelay: 70,
  preEraseDelay: 2000,
  eraseDelay: 30,
  eraseStyle: 'select-back',
  caretAnimation: 'smooth',
}
const glitchSettings: Parameters<typeof write>[2] = {
  ...presets.neo,
  glyphs: name,
}

export default defineComponent({
  name: 'Introduction',
  components: { BrandingLogoWhite },
  setup () {
    const nameState = ref(NameState.TYPING_TAG)
    const nameTyper = {
      tag,
      replaceTag,
    }
    const glitchedName = ref(null)
    const roleTyper = reactive({
      titles: titles.map(title => title.toUpperCase()),
      hidden: computed(() => nameState.value === NameState.TYPING_TAG),
      preTypeDelay: ref((nameTyper.tag.length + 10) * 70),
    })

    function replaceTag () {
      nameState.value = NameState.REPLACE_TAG

      setTimeout(replaceName, 2000)
    }
    function replaceName () {
      nameState.value = NameState.REPLACING_NAME

      write(name, glitchedName.value, glitchSettings, undefined, finish)
    }
    function finish () {
      nameState.value = NameState.REPLACED_NAME

      toRef(roleTyper, 'preTypeDelay').value = typerSettings.preTypeDelay
    }

    return {
      NameState,
      nameState,
      typerSettings,
      nameTyper,
      glitchedName,
      roleTyper,
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
    <v-col cols="12" class="layer-content">
      <v-responsive max-width="300px" class="center">
        <branding-logo-white responsive />
      </v-responsive>

      <div class="introduction-name-container">
        <client-only>
          <vue-typer
            v-if="nameState === NameState.TYPING_TAG"
            v-bind="typerSettings"
            :text="nameTyper.tag"
            :repeat="0"
            class="introduction-name-typer break-line"
            @completed="nameTyper.replaceTag"
          />
          <span
            v-else
            ref="glitchedName"
            class="introduction-name break-line"
          >{{ nameTyper.tag }}</span>
        </client-only>
      </div>

      <div class="introduction-role-container">
        <client-only>
          <vue-typer
            v-bind="typerSettings"
            :text="roleTyper.titles"
            :repeat="Infinity"
            :shuffle="true"
            :pre-type-delay="roleTyper.preTypeDelay"
            :class="{ hidden: roleTyper.hidden }"
            class="introduction-role-typer"
          />
        </client-only>
      </div>
    </v-col>
    <div class="layer-background">
      <slot name="background" />
    </div>
  </v-row>
</template>

<style lang="scss" scoped>
.center {
  margin: auto;
}

.break-line {
  &::after {
    content: "\a";
    white-space: pre;
  }
}

.introduction-typer {
  &.vue-typer .custom.char {
    color: #fff;
  }

  &.vue-typer .custom.char.selected {
    background-color: $sub-secondary;
  }

  &.vue-typer .custom.caret {
    background-color: #fff;
  }
}

.introduction-name-container {
  // 1.6x content font size, to prevent height shift
  min-height: 4em;
}

.introduction-name {
  font-size: 2.5em;
  font-weight: bolder;
}

::v-deep .introduction-name-typer {
  @extend .introduction-typer;

  &.vue-typer {
    @extend .introduction-name;
  }
}

.introduction-role-container {
  // 1.6x content font size, to prevent height shift
  min-height: 2em;
}

.introduction-role {
  font-size: 1.3em;
}

::v-deep .introduction-role-typer {
  @extend .introduction-typer;

  &.vue-typer {
    @extend .introduction-role;
  }

  &.hidden {
    opacity: 0;
  }
}
</style>

<style src="~/assets/styles/pages/index.scss" lang="scss" scoped/>
