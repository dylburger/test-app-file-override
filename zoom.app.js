module.exports = {
  type: "app",
  app: "zoom",
  methods: {
    rand() {
      return Math.random();
    },
    override() {
      console.log(
        "this will get overridden. If you see this, it's not working"
      );
    },
  },
};
