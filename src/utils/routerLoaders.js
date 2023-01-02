import { NavMenu } from "../constants/Nav";

export const productsLoader = ({ request }) => {
  const url = new URL(request.url);
  const exist = NavMenu.some(
    (v) => v.path === url.pathname || v.secondaryPath === url.pathname
  );

  if (!exist) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return null;
};
