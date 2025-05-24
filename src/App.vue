<template>
  <div id="app" class="app">
    <Header />
    <div class="container">
      <AlbumFormToggle @add="addAlbum" />
      <AlbumList
        :albums="albums"
        @remove="removeAlbum"
        @toggleBest="toggleBest"
      />
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
        date: new Date().toISOString(),
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
    removeAlbum(id) {
      this.albums = this.albums.filter((album) => album.id !== id);
      this.saveAlbums();
    },
    toggleBest(id) {
      const album = this.albums.find((album) => album.id === id);
      if (album) {
        album.bestOfTheBest = !album.bestOfTheBest;
        this.saveAlbums();
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
