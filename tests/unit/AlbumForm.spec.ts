import { mount, Wrapper } from "@vue/test-utils";
import AlbumForm from "@/components/albumForm/AlbumForm.vue";

describe("AlbumForm.vue", () => {
  let wrapper: Wrapper<any>;

  beforeEach(() => {
    wrapper = mount(AlbumForm, {
      mocks: {
        $t: (msg: string): string => msg,
      },
    });
  });

  it("initializes with empty albumName and disabled submit", () => {
    expect(wrapper.vm.albumName).toBe("");
    expect((wrapper.find("button").element as HTMLButtonElement).disabled).toBe(
      true
    );
  });

  it("shows validation error on blur with empty input", async () => {
    await wrapper.find("input").trigger("blur");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.albumError).toBe("albumNameRequired");
  });

  it("updates albumName on input", async () => {
    await wrapper.find("input").setValue("My Album");
    expect(wrapper.vm.albumName).toBe("My Album");
  });

  it("clears error on input", async () => {
    await wrapper.setData({ albumError: "albumNameRequired", albumName: "" });
    await wrapper.find("input").setValue("Another Album");
    expect(wrapper.vm.albumError).toBeNull();
  });

  it("form is valid when albumName is set and no error", async () => {
    await wrapper.setData({ albumName: "Valid Album", albumError: null });
    expect(wrapper.vm.isFormValid).toBe(true);
  });

  it("emits formSubmit and clears albumName on submit", async () => {
    await wrapper.setData({ albumName: "Valid Album", albumError: null });
    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.emitted("formSubmit")).toBeTruthy();
    expect(wrapper.emitted("formSubmit")?.[0]?.[0]).toBe("Valid Album");
    expect(wrapper.vm.albumName).toBe("");
  });

  it("does not emit formSubmit when albumName is empty", async () => {
    await wrapper.setData({ albumName: "" });
    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.emitted("formSubmit")).toBeFalsy();
  });
});
