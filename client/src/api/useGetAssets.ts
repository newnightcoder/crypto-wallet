import { useEffect, useState } from "react";

export interface IAssets {
  name: string;
  balance: string;
}

export interface IError {
  message: string;
}

export const isErrorTypeGuard = (object: unknown): object is IError => {
  if (object && typeof object === "object") {
    console.log("error");
    return "message" in object;
  }
  return false;
};

export const isAssetsTypeGuard = (object: unknown): object is IAssets[] => {
  if (object && typeof object === "object") {
    console.log("we got data dude!");
    return object instanceof Array;
  }
  return false;
};

export const useGetAssets = () => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  const [data, setData] = useState<IAssets[]>([]);
  const [error, setError] = useState<IError | null>(null);

  const getAssets = async () => {
    const res = await fetch("/assets", {
      method: "GET",
      headers: {
        Authorization: `a${token}`,
        "content-type": "application/json",
      },
    });
    try {
      const received: unknown = await res.json();
      if (isErrorTypeGuard(received)) return setError(received);
      if (isAssetsTypeGuard(received)) return setData(received);
    } catch (error: any) {
      console.log("error", error.message);
      throw error;
    }
  };

  useEffect(() => {
    if (!token) return;
    console.log("token in getassets hook", token);
    getAssets();
  }, [token]);

  return { data, error };
};
