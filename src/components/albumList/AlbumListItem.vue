<template>
  <div class="albumListItem">
    <p class="albumListItem__title">
      {{ name }}
    </p>
    <div class="albumListItem__actions">
      <div class="albumListItem__actions--btn">
        <img :src="likeIcon" alt="Add to favourites icon" />
      </div>
      <div class="albumListItem__actions--btn">
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
.albumListItem {
  border: 1px solid $color-gray-100;
  border-radius: $radius-base;
  padding: $space-x4;
  display: flex;
  align-content: center;
  justify-content: space-between;

  &__title {
    font-size: $font-size-title;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: $space-x4;

    &--btn {
      max-height: $space-x6;
      @include flex-center;
      cursor: pointer;
      transition: all 0.3s ease-in;

      &:hover {
        img {
          filter: brightness(0) saturate(100%);
        }
      }
    }
  }
}
</style>
