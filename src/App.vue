<template>
  <div id="app" class="app">
    <Header />
    <div class="container">
      <AlbumFormToggle />
    </div>
  </div>
</template>

<script lang="ts">
import Header from "@/components/header/Header.vue";
import AlbumFormToggle from "@/components/albumFormToggle/AlbumFormToggle.vue";

export default {
  name: "App",
  components: {
    Header,
    AlbumFormToggle,
  },
};
</script>

<style lang="scss">
@import "./styles/app.scss";

.app {
  padding-top: 24px;
}
</style>
