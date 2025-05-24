<template>
  <div class="albumList">
    <transition-group name="list" v-if="showList" class="albumList__content">
      <AlbumListItem
        v-for="album in albums"
        :key="album.id"
        :name="album.name"
      />
    </transition-group>
  </div>
</template>

<script>
import AlbumListItem from "@/components/albumList/AlbumListItem.vue";

export default {
  name: "AlbumList",
  components: {
    AlbumListItem,
  },
  props: {
    albums: {
      type: Array,
      required: true,
    },
  },
  computed: {
    showList() {
      return this.albums?.length > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.albumList {
  border-top: 2px solid $color-gray-200;
  margin-top: $space-x8;
  padding-top: $space-x8;

  &__content {
    display: flex;
    flex-direction: column;
    gap: $space-x2;
  }
}
</style>
