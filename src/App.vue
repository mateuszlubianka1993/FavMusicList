<template>
  <div id="app" class="app">
    <Header />
  </div>
</template>

<script lang="ts">
import Header from "@/components/header/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./styles/app.scss";

.app {
  padding-top: 24px;
}
</style>
