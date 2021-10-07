const username = process.env.userName;
const password = process.env.password;

module.exports = [
  {
    url: "https://discovery-stub.comtravo.com/source1",
    auth: {
      username,
      password,
    },
  },
  {
    url: "https://discovery-stub.comtravo.com/source2",
    auth: {
      username,
      password,
    },
  },
];
