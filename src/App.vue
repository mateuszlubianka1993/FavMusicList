<template>
  <div id="app" class="app">
    <Header />
    <div class="container">
      <AlbumFormToggle />
      <AlbumList :albums="fakeAlbums" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import AlbumFormToggle from "@/components/albumFormToggle/AlbumFormToggle.vue";
import AlbumList from "@/components/albumList/AlbumList.vue";

export default {
  name: "App",
  components: {
    Header,
    AlbumFormToggle,
    AlbumList,
  },
  data() {
    return {
      fakeAlbums: [
        {
          id: 1,
          name: "Alum First",
          date: "12.12.2012",
        },
        {
          id: 2,
          name: "Alum Second",
          date: "12.12.2012",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./styles/app.scss";

.app {
  padding-top: 24px;
}
</style>
