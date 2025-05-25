<template>
  <header class="header">
    <div class="header__logo">
      <img :src="logo" alt="logo" />
    </div>
    <div class="header__languageSwitcher">
      <LanguageSwitcher
        :languages="languagesConfig"
        :active="currentLanguage"
        @change-language="onLanguageChange"
      />
    </div>
  </header>
</template>

<script>
import LanguageSwitcher from "@/components/languageSwitcher/LanguageSwitcher.vue";
import logo from "@/assets/Logo.png";
import { LANGUAGES } from "@/lib/constants/languages.constants";

export default {
  name: "Header",
  components: {
    LanguageSwitcher,
  },
  data() {
    return {
      logo,
      languagesConfig: LANGUAGES,
    };
  },
  methods: {
    onLanguageChange(lang) {
      this.$i18n.locale = lang;
    },
  },
  computed: {
    currentLanguage() {
      return this.$i18n.locale;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./header.scss";
</style>
