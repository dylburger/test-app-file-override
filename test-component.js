const zoom = require("./zoom-override.app.js");

module.exports = {
  name: "test component",
  props: {
    zoom,
    timer: {
      type: "$.interface.timer",
      default: {
        intervalSeconds: 60 * 10,
      },
    },
  },
  async run() {
    console.log(this.zoom.rand());
    this.zoom.override();
  },
};
