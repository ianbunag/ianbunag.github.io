<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ResponsiveContainer from '~/components/wrappers/responsive-container.vue'

export default defineComponent({
  name: 'Tags',
  components: { ResponsiveContainer },
  props: {
    tags: {
      type: Array as Prop<Array<string>>,
      required: true,
    },
  },
})
</script>

<template>
  <responsive-container>
    <div
      v-for="tag of tags"
      :key="tag"
      class="tag text-body-2 rounded elevation-8"
    >
      <span class="px-2">{{ tag }}</span>
    </div>
  </responsive-container>
</template>

<style scoped>
.tag {
  border: 1px solid currentColor;
}
</style>
