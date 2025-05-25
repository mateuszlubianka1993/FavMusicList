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
    <div class="albumControls__viewMode">
      <div class="albumControls__viewMode--btn">
        <img
          :src="viewMode === views.LIST ? listBlackIcon : listGrayIcon"
          alt="List view icon"
          class="view-icon"
          @click="$emit('update:viewMode', views.LIST)"
        />
      </div>
      <div class="albumControls__viewMode--btn">
        <img
          :src="viewMode === views.GRID ? gridBlackIcon : gridGrayIcon"
          alt="Grid view icon"
          class="view-icon"
          @click="$emit('update:viewMode', views.GRID)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import arrowIcon from "@/assets/icons/Arrow.svg";
import gridGrayIcon from "@/assets/icons/grid-gray.svg";
import gridBlackIcon from "@/assets/icons/grid-black.svg";
import listGrayIcon from "@/assets/icons/list-gray.svg";
import listBlackIcon from "@/assets/icons/list-black.svg";
import { VIEW_MODE } from "@/lib/constants/view.constants";

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
    viewMode: {
      type: String,
      default: "list",
    },
  },
  data() {
    return {
      arrowIcon,
      gridGrayIcon,
      gridBlackIcon,
      listGrayIcon,
      listBlackIcon,
      views: VIEW_MODE,
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
  justify-content: space-between;
  align-items: center;
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

  &__viewMode {
    display: flex;
    align-items: center;
    gap: $space-x3;

    &--btn {
      cursor: pointer;
    }
  }
}
</style>
