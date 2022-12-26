import { useEffect } from "react";
import { useState } from "react";

const useUser = (email) => {
  const [isUser, setIsUser] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/User/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsUser(data.isUser); //[server er app.get er isUser]
          setIsUserLoading(false);
        });
    }
  }, [email]);
  return [isUser, isUserLoading];
};

export default useUser;
