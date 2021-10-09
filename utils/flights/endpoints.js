const username = process.env.userName;
const password = process.env.password;

module.exports = [
  {
    id: "source1",
    url: "https://discovery-stub.comtravo.com/source1",
    auth: {
      username,
      password,
    },
  },
  {
    id: "source2",
    url: "https://discovery-stub.comtravo.com/source2",
    auth: {
      username,
      password,
    },
  },
];
