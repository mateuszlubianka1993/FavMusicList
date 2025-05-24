<template>
  <div class="albumListItem">
    <p class="albumListItem__title">
      {{ name }}
    </p>
    <div class="albumListItem__actions">
      <div
        class="albumListItem__actions--btn"
        :class="{ 'albumListItem__actions--btn--liked': liked }"
      >
        <img
          :src="likeIcon"
          alt="Add to favourites icon"
          @click="$emit('toggleBest')"
        />
      </div>
      <div class="albumListItem__actions--btn" @click="$emit('remove')">
        <img :src="removeIcon" alt="Remove icon" />
      </div>
    </div>
  </div>
</template>

<script>
import likeIcon from "@/assets/icons/Star.svg";
import removeIcon from "@/assets/icons/Trash.svg";

export default {
  name: "AlbumListItem",
  props: {
    name: {
      type: String,
      required: true,
    },
    liked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      likeIcon,
      removeIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./albumListItem.scss";
</style>
