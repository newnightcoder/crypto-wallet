const getToken = async (username: string, password: string) => {
  const url: URL = new URL("http://localhost:4000/token");

  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  };

  console.log(request.body);

  try {
    const res = await fetch(url, request);
    const { token, message } = await res.json();
    console.log("token", token);
    return { token, message };
  } catch (error) {
    console.log("error in getToken funciton", error);
    throw error;
  }
};

export default getToken;
