import { Link } from "react-router-dom";
import { useGetAssets } from "../api/useGetAssets";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const { data, error } = useGetAssets();
  console.log("token on dashboard page", token);
  console.log("assets", data);
  console.log("error", error);

  if (error!.message)
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black opacity-70 text-white text-lg z-50">
        <span>session expired or invalid authorization</span>
        <span>please login again</span>
        <Link
          to="/login"
          className="h-12 w-48 self-center flex items-center justify-center rounded-full bg-blue-600 text-white"
        >
          Login
        </Link>
      </div>
    );

  return (
    <div>
      <h1>Assets in my portfolio</h1>
      {data.length > 0 ? (
        <div>
          {data!.map((asset: any, i: number) => (
            <div key={i}>
              {asset.name}:{asset.balance}
            </div>
          ))}
        </div>
      ) : (
        <>loader</>
      )}
    </div>
  );
};
export default Dashboard;
