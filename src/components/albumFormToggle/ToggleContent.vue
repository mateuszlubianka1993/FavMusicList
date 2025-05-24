<template>
  <div class="toggleContent" :class="{ 'toggleContent--mobile': !isDesktop }">
    <div class="toggleContent__header">
      <h2 class="title">{{ $t("addNewAlbum") }}</h2>
      <span @click="closeForm" class="closeIcon">
        <img :src="isDesktop ? closeIcon : closeIconDark" alt="Close Icon" />
      </span>
    </div>
    <AlbumForm @formSubmit="handleFormSubmit" :mobile="!isDesktop" />
  </div>
</template>

<script>
import AlbumForm from "@/components/albumForm/AlbumForm.vue";
import closeIcon from "@/assets/icons/Close2.svg";
import closeIconDark from "@/assets/icons/Close.svg";

export default {
  name: "ToggleContent",
  props: {
    isDesktop: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    AlbumForm,
  },
  data() {
    return {
      closeIcon,
      closeIconDark,
    };
  },
  methods: {
    closeForm() {
      this.$emit("closeForm");
    },
    handleFormSubmit(albumName) {
      this.$emit("handleFormSubmit", albumName);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./toggleContent.scss";
</style>
