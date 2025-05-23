import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "@/locales";
import { LANG_CODES } from "@/lib/constants/languages.constants";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: LANG_CODES.EN,
  fallbackLocale: LANG_CODES.PL,
  messages,
});

export default i18n;
