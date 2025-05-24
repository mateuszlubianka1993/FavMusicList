<template>
  <div class="albumFormToggle">
    <Button
      v-if="!hideToggleButton"
      type="button"
      :outline="isDesktop"
      @click="openForm"
      :color="buttonConfig.DARK"
      :fluid="!isDesktop"
    >
      <div class="albumFormToggle__button">
        <img :src="isDesktop ? addIcon : addIconWhite" alt="Add Icon" />
        <span>{{ $t("addNewAlbum") }}</span>
      </div>
    </Button>

    <transition name="slide">
      <Modal v-if="showForm && isDesktop" @close="closeForm">
        <ToggleContent
          :isDesktop="isDesktop"
          @closeForm="closeForm"
          @handleFormSubmit="handleFormSubmit"
        />
      </Modal>
    </transition>

    <transition name="fade">
      <div v-if="showForm && !isDesktop" class="albumFormToggle__mobile">
        <ToggleContent
          :isDesktop="isDesktop"
          @closeForm="closeForm"
          @handleFormSubmit="handleFormSubmit"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import Button from "@/components/ui/button/Button.vue";
import Modal from "@/components/ui/modal/Modal.vue";
import ToggleContent from "@/components/albumFormToggle/ToggleContent.vue";
import viewportMixin from "@/mixins/viewportMixin";
import addIcon from "@/assets/icons/add.svg";
import addIconWhite from "@/assets/icons/add-white.svg";
import { BUTTON_COLORS } from "@/lib/constants/ui.constants";

export default {
  name: "AlbumFormToggle",
  mixins: [viewportMixin],
  components: {
    Button,
    Modal,
    ToggleContent,
  },
  data() {
    return {
      addIcon,
      addIconWhite,
      buttonConfig: BUTTON_COLORS,
      showForm: false,
    };
  },
  computed: {
    hideToggleButton() {
      return this.showForm && !this.isDesktop;
    },
  },
  methods: {
    openForm() {
      this.showForm = true;
    },
    closeForm() {
      this.showForm = false;
    },
    handleFormSubmit(albumName) {
      console.log("Album Name:", albumName);
      this.closeForm();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./albumFormToggle.scss";
</style>
