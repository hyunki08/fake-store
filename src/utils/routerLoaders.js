import { Pages, NavMenu } from "../constants/Nav";

export const rootLoader = () => {
  const info = Pages.find((v) => v.path === window.location.pathname);
  if (!info) {
    return { header: true, footer: true };
  }
  return { header: info.header, footer: info.footer };
};

export const productsLoader = (a) => {
  const exist = NavMenu.some(
    (v) =>
      v.path === window.location.pathname ||
      v.secondaryPath === window.location.pathname
  );

  if (!exist) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return null;
};
