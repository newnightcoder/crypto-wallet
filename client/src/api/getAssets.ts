const getAssets = async () => {
  const url: URL = new URL("http://localhost:4000/assets");
  const token = localStorage.getItem("wallet token") as string;
  console.log("token:", token, "--- typeof token", typeof token);

  const request = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };

  try {
    console.log("request", request);

    const res = await fetch(url, request);
    const payload = await res.json();

    console.log("assets", payload, "message:", payload.message);
    return payload;
  } catch (error) {
    console.log("getAssets error:", error);
    throw error;
  }
};

export default getAssets;
