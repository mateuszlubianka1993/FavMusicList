import { shallowMount } from "@vue/test-utils";
import AlbumListItem from "@/components/albumList/AlbumListItem.vue";

describe("AlbumListItem.vue", () => {
  const factory = (props = {}) => {
    return shallowMount(AlbumListItem, {
      propsData: {
        name: "Test Album",
        ...props,
      },
    });
  };

  it("renders album name", () => {
    const wrapper = factory();
    expect(wrapper.find(".albumListItem__title").text()).toBe("Test Album");
  });

  it("applies grid class when isGrid is true", () => {
    const wrapper = factory({ isGrid: true });
    expect(wrapper.classes()).toContain("albumListItem--grid");
  });

  it("does not apply grid class when isGrid is false", () => {
    const wrapper = factory({ isGrid: false });
    expect(wrapper.classes()).not.toContain("albumListItem--grid");
  });

  it("shows liked class when liked is true", () => {
    const wrapper = factory({ liked: true });
    expect(wrapper.find(".albumListItem__actions--btn--liked").exists()).toBe(
      true
    );
  });

  it("does not show liked class when liked is false", () => {
    const wrapper = factory({ liked: false });
    expect(wrapper.find(".albumListItem__actions--btn--liked").exists()).toBe(
      false
    );
  });

  it("emits toggleBest when like icon is clicked", async () => {
    const wrapper = factory();
    await wrapper
      .findAll(".albumListItem__actions--btn")
      .at(0)
      .find("img")
      .trigger("click");
    expect(wrapper.emitted().toggleBest).toBeTruthy();
  });

  it("emits remove when remove icon is clicked", async () => {
    const wrapper = factory();
    await wrapper
      .findAll(".albumListItem__actions--btn")
      .at(1)
      .trigger("click");
    expect(wrapper.emitted().remove).toBeTruthy();
  });

  it("renders like and remove icons", () => {
    const wrapper = factory();
    const imgs = wrapper.findAll("img");
    expect(imgs.at(0).attributes("alt")).toBe("Add to favourites icon");
    expect(imgs.at(1).attributes("alt")).toBe("Remove icon");
  });
});
