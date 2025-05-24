<template>
  <div class="albumList">
    <AlbumControls
      :sortConfig="sortConfig"
      :selectedSort="sortBy"
      @update:selectedSort="sortBy = $event"
    />
    <transition-group name="list" v-if="showList" class="albumList__content">
      <AlbumListItem
        v-for="album in sortedAlbums"
        :key="album.id"
        :name="album.name"
        :liked="album.bestOfTheBest"
        @remove="$emit('remove', album.id)"
        @toggleBest="$emit('toggleBest', album.id)"
      />
    </transition-group>
  </div>
</template>

<script>
import AlbumControls from "@/components/albumControls/AlbumControls.vue";
import AlbumListItem from "@/components/albumList/AlbumListItem.vue";
import { SORT_CONFIG } from "@/lib/constants/sorting.constants";

export default {
  name: "AlbumList",
  components: {
    AlbumControls,
    AlbumListItem,
  },
  props: {
    albums: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      sortBy: SORT_CONFIG.ID,
    };
  },
  computed: {
    showList() {
      return this.albums?.length > 0;
    },
    sortConfig() {
      return SORT_CONFIG;
    },
    sortedAlbums() {
      return [...this.albums].sort((a, b) => {
        switch (this.sortBy) {
          case SORT_CONFIG.ID:
            return a.id - b.id;
          case SORT_CONFIG.NAME:
            return a.name.localeCompare(b.name);
          case SORT_CONFIG.DATE:
            return new Date(b.date) - new Date(a.date);
          default:
            return 0;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./albumList.scss";
</style>
