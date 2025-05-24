<template>
  <div class="albumControls">
    <div class="albumControls__sorting">
      <label class="albumControls__sorting--label">{{ $t("sortLabel") }}</label>
      <div class="albumControls__sorting--dropdown">
        <div class="toggle" @click="isOpen = !isOpen">
          <p>{{ getOptionLabel(selectedSort) }}</p>
          <img :src="arrowIcon" alt="Arrow icon" class="arrow" />
        </div>
        <ul v-if="isOpen" class="albumControls__sorting--dropdown-options">
          <li
            v-for="option in sortOptions"
            :key="option"
            @click="handleOptionClick(option)"
          >
            {{ getOptionLabel(option) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import arrowIcon from "@/assets/icons/Arrow.svg";

export default {
  name: "AlbumControls",
  props: {
    sortConfig: {
      type: Object,
      required: true,
    },
    selectedSort: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      arrowIcon,
      isOpen: false,
    };
  },
  computed: {
    sortOptions() {
      return Object.values(this.sortConfig)
        .map((el) => el)
        ?.filter((option) => option !== this.selectedSort);
    },
  },
  methods: {
    getOptionLabel(option) {
      return this.$t(`sortOptions.${option}`) || option;
    },
    handleOptionClick(option) {
      this.$emit("update:selectedSort", option);
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.albumControls {
  display: flex;
  margin-bottom: $space-x6;

  &__sorting {
    &--dropdown {
      position: relative;
      display: inline-block;
      width: 120px;

      .toggle {
        border: 2px solid $color-primary;
        border-radius: $radius-xxl;
        padding: $space-x2 $space-x3;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .arrow {
        float: right;
      }

      &-options {
        position: absolute;
        width: 100%;
        background-color: $color-white;
        border: 1px solid $color-gray-100;
        border-radius: $radius-base;
        margin-top: $space-x;
        z-index: 10;

        li {
          padding: $space-x2 $space-x3;
          cursor: pointer;

          &:hover {
            background-color: $color-gray-100;
          }
        }
      }
    }
  }
}
</style>
