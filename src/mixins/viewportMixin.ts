import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      isMobile: false,
      isDesktop: false,
    };
  },
  mounted() {
    this.checkViewport();
    window.addEventListener("resize", this.checkViewport);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkViewport);
  },
  methods: {
    checkViewport() {
      const width = window.innerWidth;
      this.isMobile = width < 768;
      this.isDesktop = width >= 768;
    },
  },
});
