import React, { memo } from "react";

const Line = memo(({ className }) => {
  return (
    <div className={`${className} h-[1px] w-full bg-[rgb(220,220,220)]`}></div>
  );
});
Line.displayName = "Line";

export default Line;
