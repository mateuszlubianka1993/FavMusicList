<template>
  <div id="app" class="app">
    <Header />
    <div class="container">
      <AlbumFormToggle @add="addAlbum" />
      <AlbumList :albums="albums" />
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
      albums: [],
    };
  },
  mounted() {
    this.loadAlbums();
  },
  methods: {
    addAlbum(name) {
      const newAlbum = {
        id: Date.now(),
        name,
        date: new Date().toLocaleDateString(),
        bestOfTheBest: false,
      };

      this.albums.push(newAlbum);
      this.saveAlbums();
    },
    saveAlbums() {
      localStorage.setItem("albums", JSON.stringify(this.albums));
    },
    loadAlbums() {
      const savedAlbums = localStorage.getItem("albums");
      if (savedAlbums) {
        this.albums = JSON.parse(savedAlbums);
      }
    },
  },
};
</script>

<style lang="scss">
@import "./styles/app.scss";

.app {
  padding-top: 24px;
}
</style>
