import { mount } from "@vue/test-utils";
import Input from "@/components/ui/input/Input.vue";

describe("Input.vue", () => {
  it("renders input with correct type and placeholder", () => {
    const wrapper = mount(Input, {
      propsData: {
        type: "email",
        placeholder: "Enter email",
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    expect(input.attributes("type")).toBe("email");
    expect(input.attributes("placeholder")).toBe("Enter email");
  });

  it("updates modelValue on user input", async () => {
    const wrapper = mount(Input, {
      propsData: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    await input.setValue("test value");
    expect(wrapper.emitted().input?.[0]?.[0]).toBe("test value");
  });

  it("shows error message and error class when errorMsg is set", () => {
    const wrapper = mount(Input, {
      propsData: {
        modelValue: "",
        errorMsg: "Required field",
      },
    });
    expect(wrapper.find(".errorMsg").exists()).toBe(true);
    expect(wrapper.find(".errorMsg").text()).toBe("Required field");
    expect(wrapper.find("input").classes()).toContain("input--error");
  });

  it("does not show error message or error class when errorMsg is not set", () => {
    const wrapper = mount(Input, {
      propsData: {
        modelValue: "",
      },
    });
    expect(wrapper.find(".errorMsg").exists()).toBe(false);
    expect(wrapper.find("input").classes()).not.toContain("input--error");
  });

  it("emits blur event", async () => {
    const wrapper = mount(Input, {
      propsData: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    await input.trigger("blur");
    expect(wrapper.emitted().blur).toBeTruthy();
  });

  it("renders with number type and accepts number input", async () => {
    const wrapper = mount(Input, {
      propsData: {
        type: "number",
        modelValue: 0,
      },
    });
    const input = wrapper.find("input");
    expect(input.attributes("type")).toBe("number");
    await input.setValue("123");
    expect(wrapper.emitted().input?.[0]?.[0]).toBe("123");
  });
});
