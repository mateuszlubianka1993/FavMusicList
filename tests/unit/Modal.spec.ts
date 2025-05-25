import { mount } from "@vue/test-utils";
import Modal from "@/components/ui/modal/Modal.vue";

describe("Modal.vue", () => {
  it("renders slot content", () => {
    const wrapper = mount(Modal, {
      slots: {
        default: '<div class="test-content">Test Content</div>',
      },
    });
    expect(wrapper.find(".test-content").exists()).toBe(true);
  });

  it("emits close when overlay is clicked", async () => {
    const wrapper = mount(Modal, {
      slots: {
        default: '<div class="test-content">Test Content</div>',
      },
    });
    await wrapper.trigger("click");
    expect(wrapper.emitted().close).toBeTruthy();
  });

  it("does not emit close when modal content is clicked", async () => {
    const wrapper = mount(Modal, {
      slots: {
        default: '<div class="test-content">Test Content</div>',
      },
    });
    await wrapper.find(".modal__content").trigger("click");
    expect(wrapper.emitted().close).toBeFalsy();
  });

  it("emits close when Escape key is pressed", async () => {
    const wrapper = mount(Modal, {
      slots: {
        default: '<div class="test-content">Test Content</div>',
      },
      attachTo: document.body,
    });
    const event = new KeyboardEvent("keydown", { key: "Escape" });
    document.dispatchEvent(event);
    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(wrapper.emitted().close).toBeTruthy();
    wrapper.destroy();
  });
});
