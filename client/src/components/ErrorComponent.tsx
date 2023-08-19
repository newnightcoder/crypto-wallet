import { Link, useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error: any = useRouteError();

  const ErrorMsg = () => {
    switch (error.status) {
      case 401:
        return <div>No auth, sorry!</div>;
      case 404:
        return <div>Page not found</div>;
      default:
        return <div>oops somethin went wrong</div>;
    }
  };

  return (
    <div>
      <div>error component</div>
      <ErrorMsg />
      <Link to={"/"}>back to home</Link>
    </div>
  );
};

export default ErrorComponent;
