<template>
  <footer class="footer">
    <LanguageSwitcher
      :languages="languagesConfig"
      :active="currentLanguage"
      :size="size"
      @change-language="onLanguageChange"
    />
  </footer>
</template>

<script>
import LanguageSwitcher from "@/components/languageSwitcher/LanguageSwitcher.vue";
import { LANGUAGES } from "@/lib/constants/languages.constants";
import { SIZES } from "@/lib/constants/ui.constants";

export default {
  name: "Footer",
  components: {
    LanguageSwitcher,
  },
  data() {
    return {
      languagesConfig: LANGUAGES,
      size: SIZES.MEDIUM,
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
@import "./footer.scss";
</style>
