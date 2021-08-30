<script lang = "ts">
import {
  defineComponent,
  ref,
  reactive,
  computed,
  toRefs,
} from '@nuxtjs/composition-api'
import { write, presets } from 'glitched-writer'

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

export default defineComponent({
  name: 'Introduction',
  props: {
    name: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    titles: {
      type: Array as Prop<Array<string>>,
      required: true,
    },
  },
  setup (props) {
    const { name, tag, titles: rawTitles } = toRefs(props)
    const nameState = ref(NameState.TYPING_TAG)
    const glitchedName = ref()
    const glitchSettings: Parameters<typeof write>[2] = {
      ...presets.neo,
      glyphs: name.value,
    }
    const roleTyper = reactive({
      titles: computed(() => rawTitles.value.map(title => title.toUpperCase())),
      hidden: computed(() => nameState.value === NameState.TYPING_TAG),
      preTypeDelay: ref((tag.value.length + 10) * 70),
    })

    function replaceTag (callback?: ()=> void) {
      nameState.value = NameState.REPLACE_TAG

      if (callback) { callback() }
    }
    function replaceName (callback?: ()=> void) {
      nameState.value = NameState.REPLACING_NAME

      write(name.value, glitchedName.value, glitchSettings, undefined, callback)
    }
    function finishNameTransition () {
      nameState.value = NameState.REPLACED_NAME

      roleTyper.preTypeDelay = typerSettings.preTypeDelay
    }
    function startNameTransition () {
      const replaceNameCallback = () => setTimeout(
        () => replaceName(finishNameTransition),
        2000,
      )

      replaceTag(replaceNameCallback)
    }

    const nameTyper = reactive({
      tag,
      startNameTransition,
    })

    return {
      NameState,
      nameState,
      glitchedName,
      typerSettings,
      roleTyper,
      nameTyper,
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
        <slot name="logo" />
      </v-responsive>

      <div class="introduction-name-container">
        <client-only>
          <vue-typer
            v-if="nameState === NameState.TYPING_TAG"
            v-bind="typerSettings"
            :text="nameTyper.tag"
            :repeat="0"
            class="introduction-name-typer"
            @completed="nameTyper.startNameTransition"
          />
          <span
            v-else
            ref="glitchedName"
            class="introduction-name"
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
