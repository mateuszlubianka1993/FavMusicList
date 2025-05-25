import { shallowMount, createLocalVue, Wrapper } from "@vue/test-utils";
import Footer from "@/components/footer/Footer.vue";
import LanguageSwitcher from "@/components/languageSwitcher/LanguageSwitcher.vue";
import VueI18n from "vue-i18n";

const localVue = createLocalVue();
localVue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en",
  messages: {
    en: { message: "hello" },
    fr: { message: "bonjour" },
  },
});

describe("Footer.vue", () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = shallowMount(Footer, {
      localVue,
      i18n,
      stubs: {
        LanguageSwitcher: true,
      },
    });
  });

  it("renders LanguageSwitcher component", () => {
    expect(wrapper.findComponent(LanguageSwitcher).exists()).toBe(true);
  });

  it("passes languagesConfig prop to LanguageSwitcher", () => {
    expect(wrapper.findComponent(LanguageSwitcher).props("languages")).toEqual(
      (wrapper.vm as any).languagesConfig
    );
  });

  it("passes currentLanguage as active prop", () => {
    expect(wrapper.findComponent(LanguageSwitcher).props("active")).toBe(
      (wrapper.vm as any).currentLanguage
    );
  });

  it("passes size prop to LanguageSwitcher", () => {
    expect(wrapper.findComponent(LanguageSwitcher).props("size")).toBe(
      (wrapper.vm as any).size
    );
  });

  it("updates locale when onLanguageChange is called", async () => {
    (wrapper.vm as any).onLanguageChange("fr");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$i18n.locale).toBe("fr");
  });

  it("currentLanguage computed returns current locale", () => {
    wrapper.vm.$i18n.locale = "fr";
    expect((wrapper.vm as any).currentLanguage).toBe("fr");
  });
});
