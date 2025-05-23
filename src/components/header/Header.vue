<template>
  <header class="header">
    <div class="header__logo">
      <img :src="logo" alt="logo" />
    </div>
    <LanguageSwitcher
      :languages="languagesConfig"
      @change-language="onLanguageChange"
    />
  </header>
</template>

<script>
import LanguageSwitcher from "@/components/languageSwitcher/LanguageSwitcher.vue";
import logo from "@/assets/Logo.png";
import { LANGUAGES } from "@/lib/constants/languages.constants";

export default {
  name: "Header",
  data() {
    return {
      logo,
      languagesConfig: LANGUAGES,
    };
  },
  components: {
    LanguageSwitcher,
  },
  methods: {
    onLanguageChange(lang) {
      console.log("Language changed to:", lang);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./header.scss";
</style>
