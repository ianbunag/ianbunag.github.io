<script lang = "ts">
export default { name: 'Contact' }
</script>

<template>
  <v-row
    justify="center"
    align="center"
    class="text-center section"
  >
    <v-col cols="12" class="layer-content">
      Let's grab some sushi 🍣 </br>
      I would be delighted to get in touch </br>
      <v-btn class="primary">
        Drop me an email
      </v-btn>
    </v-col>
    <div class="layer-background">
      <slot name="background" />
    </div>
  </v-row>
</template>

<style src="~/assets/styles/pages/index.scss" lang="scss" scoped/>
