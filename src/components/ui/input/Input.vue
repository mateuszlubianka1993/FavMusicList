<template>
  <div class="input-container">
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event)"
      :placeholder="placeholder"
      class="input"
      :class="{ 'input--error': errorMsg }"
    />
    <div v-if="errorMsg" class="errorMsg">{{ errorMsg }}</div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    errorMsg: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./input.scss";
</style>
