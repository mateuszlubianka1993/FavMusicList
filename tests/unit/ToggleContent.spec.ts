import { mount } from "@vue/test-utils";
import ToggleContent from "@/components/albumFormToggle/ToggleContent.vue";

const AlbumFormStub = {
  template: '<div class="album-form-stub"></div>',
  emits: ["formSubmit"],
};

const mountOptions = (overrides = {}) => ({
  propsData: {},
  stubs: { AlbumForm: AlbumFormStub },
  mocks: { $t: (msg: string) => msg },
  ...overrides,
});

describe("ToggleContent.vue", () => {
  it("applies mobile class when isDesktop is false", () => {
    const wrapper = mount(
      ToggleContent,
      mountOptions({
        propsData: { isDesktop: false },
      })
    );
    expect(wrapper.find(".toggleContent").classes()).toContain(
      "toggleContent--mobile"
    );
  });

  it("emits closeForm when close icon is clicked", async () => {
    const wrapper = mount(ToggleContent, mountOptions());
    await wrapper.find(".closeIcon").trigger("click");
    expect(wrapper.emitted("closeForm")).toBeTruthy();
  });

  it("emits handleFormSubmit when AlbumForm emits formSubmit", async () => {
    const wrapper = mount(ToggleContent, mountOptions());
    wrapper
      .findComponent({ name: "AlbumForm" })
      .vm.$emit("formSubmit", "Test Album");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("handleFormSubmit")).toBeTruthy();
    expect(wrapper.emitted("handleFormSubmit")?.[0]).toEqual(["Test Album"]);
  });
});
