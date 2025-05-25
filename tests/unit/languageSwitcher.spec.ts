import { mount } from "@vue/test-utils";
import LanguageSwitcher from "@/components/languageSwitcher/LanguageSwitcher.vue";

const languages = [
  { code: "en", label: "English", flag: "/flags/en.png" },
  { code: "fr", label: "Français", flag: "/flags/fr.png" },
];

describe("LanguageSwitcher.vue", () => {
  it("renders all language options", () => {
    const wrapper = mount(LanguageSwitcher, {
      propsData: { languages, active: "en" },
    });
    const btns = wrapper.findAll(".languageSwitcher__options__btn");
    expect(btns.length).toBe(languages.length);
    languages.forEach((lang, idx) => {
      const img = btns.at(idx)!.find("img");
      expect(img.attributes("src")).toBe(lang.flag);
      expect(img.attributes("alt")).toBe(lang.label);
    });
  });

  it("emits change-language event with correct code on click", async () => {
    const wrapper = mount(LanguageSwitcher, {
      propsData: { languages, active: "en" },
    });
    const btns = wrapper.findAll(".languageSwitcher__options__btn");
    await btns.at(1)!.trigger("click");
    expect(wrapper.emitted("change-language")).toBeTruthy();
    expect(wrapper.emitted("change-language")?.[0]).toEqual([
      languages[1].code,
    ]);
  });

  it("adds active class to the selected language", async () => {
    const wrapper = mount(LanguageSwitcher, {
      propsData: { languages, active: "en" },
    });
    const btns = wrapper.findAll(".languageSwitcher__options__btn");

    expect(btns.at(0)!.classes()).toContain("active");
    expect(btns.at(1)!.classes()).not.toContain("active");
  });
});
