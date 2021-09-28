module.exports = {
  env: {
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_ACCESS_TOKEN:
      process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_SECRET: process.env.CONTENTFUL_PREVIEW_SECRET,
    SENDER_EMAIL_PASS: process.env.SENDER_EMAIL_PASS,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
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
