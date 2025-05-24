<template>
  <button
    :class="[
      'btn',
      `btn--${color}`,
      { 'btn--outline': outline, 'btn--fluid': fluid },
    ]"
    :type="type"
    :disabled="disabled"
    @click="onButtonClick"
  >
    <slot />
  </button>
</template>

<script>
import { BUTTON_COLORS } from "@/lib/constants/ui.constants";

const { PRIMARY, DARK } = BUTTON_COLORS;

export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button",
    },
    outline: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: PRIMARY,
      validator: (value) => [PRIMARY, DARK].includes(value),
    },
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onButtonClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./button.scss";
</style>
