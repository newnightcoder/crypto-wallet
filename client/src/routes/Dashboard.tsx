import { useEffect, useState } from "react";
import getAssets from "../api/getAssets";

const Dashboard = () => {
  const [assets, setAssets] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const get = async () => {
      const data = await getAssets();
      if (data.hasOwnProperty("message")) {
        return setError(data.message);
      }
      setAssets(data);
    };
    get();
  }, []);

  // if (error!.message)
  // return (
  //   <div className="fixed inset-0 flex flex-col items-center justify-center bg-black opacity-70 text-white text-lg z-50">
  //     <span>session expired or invalid authorization</span>
  //     <span>please login again</span>
  //     <Link
  //       to="/login"
  //       className="h-12 w-48 self-center flex items-center justify-center rounded-full bg-blue-600 text-white"
  //     >
  //       Login
  //     </Link>
  //   </div>
  // );

  return (
    <div className="text-black">
      <h1>Assets in my portfolio</h1>
      <div
        className={`border h-96 w-64 ${
          assets.length === 0 && !error ? "animate-pulse" : ""
        } bg-gray-100 flex items-center justify-center`}
      >
        {assets.length > 0 ? (
          <div>
            {assets.map((asset: any, i: number) => (
              <div key={i}>
                {asset.name}:{asset.balance}
              </div>
            ))}
          </div>
        ) : null}
        {error && (
          <div className="w-full bg-black p-2 text-white text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};
export default Dashboard;
