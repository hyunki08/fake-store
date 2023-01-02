export const NavMenu = [
  { name: "All", path: "/", secondaryPath: "/products/all" },
  { name: "Men", path: "/products/men", category: "men's clothing" },
  { name: "Women", path: "/products/women", category: "women's clothing" },
  { name: "Jewelery", path: "/products/jewelery", category: "jewelery" },
  {
    name: "Electronics",
    path: "/products/electronics",
    category: "electronics",
  },
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
