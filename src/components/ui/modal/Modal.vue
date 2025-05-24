<template>
  <div class="modal" @click.self="closeModal">
    <div class="modal__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    handleKeydown(event) {
      if (event.key === "Escape") {
        this.$emit("close");
      }
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./modal.scss";
</style>
