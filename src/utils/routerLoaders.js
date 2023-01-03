import { NavMenu } from "../constants/Nav";

export const productsLoader = ({ request }) => {
  const url = new URL(request.url);
  const exist = NavMenu.some(
    (v) =>
      `${process.env.PUBLIC_URL}${v.path}` === url.pathname ||
      `${process.env.PUBLIC_URL}${v.secondaryPath}` === url.pathname
  );

  if (!exist) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return null;
};
