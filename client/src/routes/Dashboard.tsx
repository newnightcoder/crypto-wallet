import { useState } from "react";

const Dashboard = () => {
  // const token = localStorage.getItem("token");
  // const { data, error } = useGetAssets();
  // console.log("token on dashboard page", token);
  // console.log("assets", data);
  // console.log("error", error);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getAssets = async () => {
  //     try {
  //       const res = await fetch("/localhost:4000/assets");
  //       const assets = await res.json();
  //       setData(assets);
  //     } catch (error) {
  //       console.log("erreur:", error);
  //       throw error;
  //     }
  //   };
  //   getAssets();
  // }, []);

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
      {data.length > 0 ? (
        <div>
          {data!.map((asset: any, i: number) => (
            <div key={i}>
              {asset.name}:{asset.balance}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-black p-2 text-white text-center">loader</div>
      )}
    </div>
  );
};
export default Dashboard;
