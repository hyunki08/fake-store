import { useRouteError } from "react-router-dom";
import { useTitle } from "./../hooks/useTitle";

const Error = () => {
  const error = useRouteError();

  useTitle("Oops!");

  return (
    <div className="flex h-[80vh] w-screen flex-col items-center justify-center gap-3">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="italic">{error.statusText || error.message}</p>
    </div>
  );
};

export default Error;
