module.exports = {
  async rewrites() {
    return [
      {
        source: "/ve-bmi",
        destination: "/about",
      },
      {
        source: "/ve-bmi/lich-su",
        destination: "/about/history",
      },
      {
        source: "/ve-bmi/tam-nhin",
        destination: "/about/vision",
      },
      {
        source: "/ve-bmi/thanh-vien",
        destination: "/about/member",
      },
      {
        source: "/ve-bmi/nang-luc",
        destination: "/about/ability",
      },
    ];
  },
};
