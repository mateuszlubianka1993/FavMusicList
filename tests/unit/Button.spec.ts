import { mount } from "@vue/test-utils";
import Button from "@/components/ui/button/Button.vue";

describe("Button.vue", () => {
  it("renders slot content", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "Click me",
      },
    });
    expect(wrapper.text()).toBe("Click me");
  });

  it("applies btn class by default", () => {
    const wrapper = mount(Button);
    expect(wrapper.classes()).toContain("btn");
  });

  it("applies btn--outline class when outline prop is true", () => {
    const wrapper = mount(Button, {
      propsData: { outline: true },
    });
    expect(wrapper.classes()).toContain("btn--outline");
  });

  it("does not apply btn--outline class when outline prop is false", () => {
    const wrapper = mount(Button, {
      propsData: { outline: false },
    });
    expect(wrapper.classes()).not.toContain("btn--outline");
  });

  it("sets button type from prop", () => {
    const wrapper = mount(Button, {
      propsData: { type: "submit" },
    });
    expect(wrapper.attributes("type")).toBe("submit");
  });

  it("emits click event when clicked", async () => {
    const wrapper = mount(Button);
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
    expect(wrapper.emitted("click")?.[0]).toBeTruthy();
  });

  it("does not emit click event when disabled", async () => {
    const wrapper = mount(Button, {
      propsData: { disabled: true },
    });
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeFalsy();
  });
});
