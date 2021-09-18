import NavItem from "./nav-item";
import NavList from "./nav-list";

const Menu = () => {
  const navs = [
    { name: "Trang chủ", link: "/", level: [0] },
    {
      name: "Về chúng tôi",
      link: "/about",
      level: [1],
      childrens: [
        { name: "Giới thiệu chúng tôi", link: "/about", level: [1, 0] },
        { name: "Lịch sử hình thành", link: "/about", level: [1, 1] },
        {
          name: "Về chúng tôiTầm nhìn - Sứ mệnh - Giá trị cốt lõi",
          link: "/about",
          level: [1, 2],
        },
        { name: "Đơn vị thành viên", link: "/about", level: [1, 3] },
        {
          name: "Năng lực",
          link: "/about",
          level: [1, 4],
          childrens: [
            {
              name: "Năng lực Hạ tầng - Sản xuất",
              link: "/about",
              level: [1, 4, 0],
            },
            {
              name: "Năng lực Tài chính - Pháp lý",
              link: "/about",
              level: [1, 4, 1],
            },
            { name: "Năng lực nhân sự", link: "/about", level: [1, 4, 2] },
            { name: "Đối tác", link: "/about", level: [1, 4, 3] },
          ],
        },
      ],
    },
    {
      name: "Sản phẩm",
      link: "/products",
      level: [2],
      childrens: [
        { name: "Nhựa nguyên sinh", link: "/products", level: [2, 0] },
        { name: "Compount", link: "/products", level: [2, 1] },
      ],
    },
    {
      name: "Tin tức",
      link: "/news",
      level: [3],
      childrens: [
        {
          name: "Tin tức nội bộ",
          link: "/news",
          level: [3, 0],
        },
        {
          name: "Tin tức chung",
          link: "/news",
          level: [3, 1],
        },
        {
          name: "Tuyển dụng",
          link: "/news",
          level: [3, 2],
        },
      ],
    },
    { name: "Liên hệ", link: "/contact", level: [4] },
    {
      name: "Hỗ trợ",
      link: "/support",
      level: [5],
      childrens: [
        { name: "Resource Center", link: "/support", level: [5, 0] },
        { name: "Liên hệ thông tin", link: "/support", level: [5, 1] },
      ],
    },
  ];

  return (
    <div>
      <div>
        <NavList navs={navs} />
      </div>
      <div></div>
    </div>
  );
};

export default Menu;
