import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import getAssets from "../api/getAssets";
import { Navbar } from "../components";

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
    <div className="min-h-screen w-full flex items-start pt-16 bg-[#222] text-white">
      <Navbar />
      <Outlet />

      <div className="h-full w-full py-4 px-4 grid grid-cols-[14rem_1fr_16rem] gap-x-3 border border-red-500">
        {/* COL 1 */}
        <div
          className={`col-start-1 col-span-1 border border-green-500 rounded-3xl h-max w-full${
            assets.length === 0 && !error ? "animate-pulse" : ""
          } flex flex-col items-center justify-start overflow-y-auto`}
        >
          {assets.length > 0 ? (
            <div className="h-max w-full flex flex-col items-center space-y-4">
              {assets.map((asset: any, i: number) => (
                <div key={i} className="h-40 w-full rounded-3xl bg-[#444]">
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

        {/* COL 2 */}
        <div className="col-start-2 col-span-1 border border-white rounded-3xl">
          GRAPH
        </div>

        {/* COL 3 */}
        <div className="col-start-3 col-span-1 border border-yellow-500 rounded-3xl">
          exchange
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};
export default Dashboard;
