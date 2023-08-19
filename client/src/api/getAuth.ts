export const getAuth = async (username: string, password: string) => {
  const res = await fetch("/token", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  try {
    const { token, message } = await res.json();
    console.log("auth token", token);
    return { token, message };
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
};
