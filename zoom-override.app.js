const zoom = require("./zoom.app.js");

module.exports = {
  ...zoom,
  methods: {
    ...zoom.methods,
    override() {
      console.log("I've overriden the override method");
    },
  },
};
