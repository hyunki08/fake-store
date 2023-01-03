import { useState, useEffect } from "react";

const updateTitle = (title) => {
  const htmlTitle = document.querySelector("title");
  htmlTitle.innerText = title;
};

export const useTitle = (iniitialTitle = "") => {
  const [title, setTitle] = useState(iniitialTitle);

  useEffect(() => {
    if (!!title) updateTitle(title);
  }, [title]);

  return setTitle;
};

export const useSetTitle = (title) => {
  useEffect(() => {
    updateTitle(title);
  }, [title]);
};
