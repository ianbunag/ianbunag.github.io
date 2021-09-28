<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Tags',
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
      v-for="tag in tags"
      :key="tag"
      class="text-body-2 rounded elevation-8 tag"
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
