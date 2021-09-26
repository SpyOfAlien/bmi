const aboutSidebars = [
  { name: "bmi", title: "Giới thiệu chúng tôi", level: [0], link: "/about" },
  {
    name: "history",
    title: "Lịch sử hình thành",
    level: [1],
    link: "/about/history",
  },
  {
    name: "vision",
    title: "Tầm nhìn - Sứ mệnh - Giá trị cốt lõi",
    level: [2],
    link: "/about/vision",
  },
  {
    name: "member",
    title: "Đơn vị thành viên",
    level: [3],
    link: "/about/member",
  },
  {
    name: "capacity",
    title: "Năng lực",
    level: [],
    redirectLevel: [4, 0],
    link: "/about/capacity/infrastructure",
    childrens: [
      {
        name: "infrastructure",
        title: "Năng lực Hạ tầng - Sản xuất",
        level: [4, 0],
        link: "/about/capacity/infrastructure",
      },
      {
        name: "finance",
        title: "Năng lực Tài chính - Pháp lý",
        level: [4, 1],
        link: "/about/capacity/finance",
      },
      {
        name: "resource",
        title: "Năng lực nhân sự",
        level: [4, 2],
        link: "/about/capacity/resource",
      },
      {
        name: "partner",
        title: "Đối tác",
        level: [4, 3],
        link: "/about/capacity/partner",
      },
    ],
  },
];
export default aboutSidebars;
