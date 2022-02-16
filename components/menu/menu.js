import NavList from "./nav-list";
import s from "./menu.module.css";
import cn from "classnames";

import Location from "../icons/location";
import Document from "../icons/document";

const Menu = () => {
  const navs = [
    { name: "Trang chủ", link: "/", page: "home", level: [0] },
    {
      page: "about",
      name: "Về chúng tôi",
      link: "/about",
      level: [1],
      childrens: [
        {
          page: "about-bmi",
          name: "Giới thiệu chúng tôi",
          link: "/about",
          level: [1, 0],
        },
        // {
        //   page: "about-history",
        //   name: "Lịch sử hình thành",
        //   link: "/about/history",
        //   level: [1, 1],
        // },
        {
          page: "about-vision",
          name: "Về chúng tôiTầm nhìn - Sứ mệnh - Giá trị cốt lõi",
          link: "/about/vision",
          level: [1, 1],
        },
        {
          page: "about-member",
          name: "Đơn vị thành viên",
          link: "/about/member",
          level: [1, 2],
        },
        {
          page: "about-capacity",
          name: "Năng lực",
          link: "/about/capacity",
          level: [1, 3],
          childrens: [
            {
              page: "about-capacity-product",
              name: "Năng lực Hạ tầng - Sản xuất",
              link: "/about/capacity",
              level: [1, 3, 0],
            },
            {
              page: "about-capacity-finacy",
              name: "Năng lực Tài chính - Pháp lý",
              link: "/about/capacity/finance",
              level: [1, 3, 1],
            },
            {
              page: "about-capacity-resource",
              name: "Năng lực nhân sự",
              link: "/about/capacity/resource",
              level: [1, 3, 2],
            },
            {
              name: "Đối tác",
              link: "/about/capacity/partner",
              level: [1, 3, 3],
            },
          ],
        },
      ],
    },
    {
      page: "products",
      name: "Sản phẩm",
      link: "/products/primary",
      level: [2],
      childrens: [
        {
          name: "Hạt nhựa compound",
          link: "/products/compound",
          level: [2, 0],
        },
        { name: "Hạt nhựa ABS", link: "/products/nhua-abs", level: [2, 1] },
        { name: "Hạt nhựa PC", link: "/products/hat-nhua-pc", level: [2, 2] },
        {
          name: "Hạt nhựa PA6/PA66",
          link: "/products/nhua-pa6-pa66",
          level: [2, 3],
        },
        {
          name: "Hạt nhựa PC/ABS",
          link: "/products/hat-nhua-pc-abs",
          level: [2, 4],
        },
        { name: "Hạt nhựa PP", link: "/products/hat-nhua-pp", level: [2, 5] },
      ],
    },
    {
      page: "news",

      name: "Tin tức",
      link: "/news/internal",
      level: [3],
      childrens: [
        {
          page: "news-internal",

          name: "Tin tức nội bộ",
          link: "/news/internal",
          level: [3, 0],
        },
        {
          page: "news-genaral",

          name: "Tin tức chung",
          link: "/news/genaral",
          level: [3, 1],
        },
        {
          page: "news-hiring",

          name: "Tuyển dụng",
          link: "/news/genaral",
          level: [3, 2],
        },
      ],
    },
    { page: "contact", name: "Liên hệ", link: "/contact", level: [4] },
    {
      page: "support",
      name: "Hỗ trợ",
      link: "/support",
      level: [5],
      childrens: [
        {
          page: "support-resource",
          name: "Resource Center",
          link: "/support/resources",
          level: [5, 0],
        },
        {
          page: "support-infor",

          name: "Liên hệ thông tin",
          link: "/support",
          level: [5, 1],
        },
      ],
    },
  ];

  return (
    <div
      className={cn("w-full h-full p-12 flex flex-col justify-between", s.menu)}
    >
      <div>
        <NavList navs={navs} />
      </div>
      <div className="text-xs text-white">
        {/* <div className="flex items-center mb-8 cursor-pointer w-max">
          <span className="mr-2">
            <Document />
          </span>
          <p className="font-semibold">Download tài liệu</p>
        </div> */}

        <div style={{ height: "1px" }} className="w-full bg-white mb-8"></div>

        <div className="flex flex-col md:flex-row">
          <div className="flex w-full mb-4 lg:w-1/3 pr-12">
            <span className="mr-2">
              <Location />
            </span>
            <div>
              <h6 className="mt-3 font-semibold mb-2">Địa chỉ</h6>
              <p>
                Số 10 Đường 2.3, KĐT Gamuda, Phường Trần Phú, Quận Hoàng Mai,
                Thành phố Hà Nội, Việt Nam.
              </p>
            </div>
          </div>

          <div className="flex w-full mb-4 lg:w-1/3 pr-12">
            <span className="mr-2">
              <Location />
            </span>
            <div>
              <h6 className="mt-3 font-semibold mb-2">Email</h6>
              <p>info@bmipolymer.com.vn</p>
            </div>
          </div>
          <div className="flex w-full mb-4 lg:w-1/3 pr-12">
            <span className="mr-2">
              <Location />
            </span>
            <div>
              <h6 className="mt-3 font-semibold mb-2">Phone</h6>
              <p>
                Tel: (+84) 229 359 3555 - (+84) 24 6688 4084 <br />
                hotline: (+84) 984 097 525
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
