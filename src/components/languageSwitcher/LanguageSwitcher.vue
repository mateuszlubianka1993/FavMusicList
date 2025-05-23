<template>
  <div class="languageSwitcher">
    <div class="languageSwitcher__options">
      <div
        class="languageSwitcher__options__btn"
        v-for="lang in languages"
        :key="lang.code"
        :class="{ active: lang.code === active }"
        @click="$emit('change-language', lang.code)"
      >
        <img :src="lang.flag" :alt="lang.label" class="lang-img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  props: {
    languages: {
      type: Array,
      required: true,
    },
    active: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./languageSwitcher.scss";
</style>
