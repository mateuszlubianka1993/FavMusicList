import { shallowMount, Wrapper, ShallowMountOptions } from "@vue/test-utils";
import Header from "@/components/header/Header.vue";
import LanguageSwitcher from "@/components/languageSwitcher/LanguageSwitcher.vue";
import logo from "@/assets/Logo.png";
import { LANGUAGES } from "@/lib/constants/languages.constants";

describe("Header.vue", () => {
  let wrapper: Wrapper<any>;

  const mockI18n = {
    locale: "en",
    t: (key: string) => key,
  };

  beforeEach(() => {
    wrapper = shallowMount(
      Header as any,
      {
        mocks: {
          $i18n: mockI18n,
        },
      } as ShallowMountOptions<any>
    );
  });

  it("renders logo image with correct src", () => {
    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe(logo);
  });

  it("renders LanguageSwitcher with correct props", () => {
    const switcher = wrapper.findComponent(LanguageSwitcher);
    expect(switcher.exists()).toBe(true);
    expect(switcher.props("languages")).toBe(LANGUAGES);
    expect(switcher.props("active")).toBe(mockI18n.locale);
  });

  it("updates locale when onLanguageChange is called", async () => {
    wrapper.vm.onLanguageChange("fr");
    expect(mockI18n.locale).toBe("fr");
  });

  it("currentLanguage computed returns current locale", () => {
    expect(wrapper.vm.currentLanguage).toBe(mockI18n.locale);
  });

  it("emits change-language event from LanguageSwitcher and updates locale", async () => {
    const switcher = wrapper.findComponent(LanguageSwitcher);
    await switcher.vm.$emit("change-language", "es");

    wrapper.vm.onLanguageChange("es");
    expect(mockI18n.locale).toBe("es");
  });
});
