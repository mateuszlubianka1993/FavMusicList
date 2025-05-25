<template>
  <form class="albumForm" @submit.prevent="onSubmit">
    <Input
      v-model="albumName"
      type="text"
      :placeholder="$t('title')"
      :errorMsg="albumError"
      @blur="validateAlbumName"
      @input="updateAlbumName"
    />
    <Button type="submit" :disabled="!isFormValid" :fluid="mobile">
      <span class="albumForm__btn">{{ $t("addAlbum") }}</span>
    </Button>
  </form>
</template>
<script>
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";

export default {
  name: "AlbumForm",
  props: {
    mobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      albumName: "",
      albumError: null,
    };
  },
  components: {
    Button,
    Input,
  },
  methods: {
    validateAlbumName() {
      if (!this.albumName.trim()) {
        this.albumError = this.$t("albumNameRequired");
      } else {
        this.albumError = null;
      }
    },
    onSubmit() {
      this.validateAlbumName();
      if (this.albumError) return;

      this.$emit("formSubmit", this.albumName);
      this.albumName = "";
    },
    updateAlbumName(value) {
      this.albumName = value;
    },
  },
  computed: {
    isFormValid() {
      return this.albumName && !this.albumError;
    },
  },
  watch: {
    albumName() {
      if (this.albumError) this.albumError = null;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./albumForm.scss";
</style>
