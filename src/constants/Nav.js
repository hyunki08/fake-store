export const NavMenu = [
  { name: "All", path: "/", secondaryPath: "/products/all" },
  { name: "Men", path: "/products/men" },
  { name: "Women", path: "/products/women" },
  { name: "Jewelery", path: "/products/jewelery" },
  { name: "Electronics", path: "/products/electronics" },
];

export const Pages = [
  { name: "ProductsAll", path: "/", header: true, footer: true },
  {
    name: "ProductsByCategory",
    path: "/products/:category",
    header: true,
    footer: true,
  },
  { name: "Product", path: "/product/:id", header: true, footer: true },
  { name: "Cart", path: "/cart", header: true, footer: true },
  { name: "SignIn", path: "/signin", header: false, footer: false },
];
