export default [
  {
    name: "Dashboard",
    icon: "/images/sideNavIcon/dashboard.png",
    path: "/"
  },
  {
    name: "Asset",
    icon: "/images/sideNavIcon/asset.png",
    path: "/auth",

    submenu: [
      {
        name: "Overview",
        path: "/auth"
      },
      {
        name: "Groups",
        path: "/auth"
      },
      {
        name: "Trash",
        path: "/auth"
      }
    ]
  },
  {
    name: "User & Group",
    icon: "/images/sideNavIcon/userngroup.png",
    path: "/fupload",

    submenu: [
      {
        name: "test1",
        path: "/fupload"
      },
      {
        name: "tset2",
        path: "/fupload"
      },
      {
        name: "test3",
        path: "/fupload"
      },
      {
        name: "test4",
        path: "/fupload"
      }
    ]
  }
];
