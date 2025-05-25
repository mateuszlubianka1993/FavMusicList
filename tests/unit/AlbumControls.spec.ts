import { mount, Wrapper } from "@vue/test-utils";
import AlbumControls from "@/components/albumControls/AlbumControls.vue";

const sortConfig = {
  NAME: "name",
  DATE: "date",
  ARTIST: "artist",
};

interface TranslationMap {
  [key: string]: string;
}

type TranslationFunction = (key: string) => string;

const $t: TranslationFunction = (key: string): string => {
  const map: TranslationMap = {
    sortLabel: "Sort by",
    "sortOptions.name": "Name",
    "sortOptions.date": "Date",
    "sortOptions.artist": "Artist",
  };
  return map[key] || key;
};

describe("AlbumControls.vue", () => {
  let wrapper: Wrapper<InstanceType<typeof AlbumControls>>;

  beforeEach(() => {
    wrapper = mount(AlbumControls, {
      propsData: {
        sortConfig,
        selectedSort: "name",
        viewMode: "list",
      },
      mocks: { $t },
    });
  });

  it("renders sort label", () => {
    expect(wrapper.text()).toContain("Sort by");
  });

  it("shows selected sort option", () => {
    expect(wrapper.find(".toggle p").text()).toBe("Name");
  });

  it("opens dropdown on toggle click", async () => {
    await wrapper.find(".toggle").trigger("click");
    expect(
      wrapper.findAll("ul.albumControls__sorting--dropdown-options li").length
    ).toBe(2);
  });

  it("emits update:selectedSort when option is clicked", async () => {
    await wrapper.find(".toggle").trigger("click");
    const options = wrapper.findAll(
      "ul.albumControls__sorting--dropdown-options li"
    );
    await options.at(0)!.trigger("click");
    expect(wrapper.emitted("update:selectedSort")).toBeTruthy();
    expect((wrapper.vm as any).$data.isOpen).toBe(false);
  });

  it("emits update:viewMode when view mode button is clicked", async () => {
    const btns = wrapper.findAll(".albumControls__viewMode--btn img");
    await btns.at(1)!.trigger("click");
    expect(wrapper.emitted("update:viewMode")).toBeTruthy();
  });
});
