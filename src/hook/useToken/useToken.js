import { useEffect } from "react";
import { useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`https://task-3-wine.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            localStorage.setItem("token", data.token);
            setToken(data.token);
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
