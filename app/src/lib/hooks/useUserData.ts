import { useEffect, useState } from "react";
import fetchUserData, { type User } from "../../api/queries/user";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const userLocalStorageSchema = z.object({
  id: z.number(),
  username: z.string(),
});

export type UserLocalStorage = z.infer<typeof userLocalStorageSchema>;

const useUserData = () => {
  //
  ////DATA
  const [userData, setUserData] = useState<User | null>(null);

  ////LOGIC
  //handling responses from the server
  const mutation = useMutation({
    mutationFn: fetchUserData,
    onError: () => {
      console.log("Cannot fetch user data");
    },
    onSuccess: (data) => {
      setUserData(data);
    },
  });

  //fetched user id from local storage, with data validation
  useEffect(() => {
    const rawAuthUserData: unknown = JSON.parse(
      localStorage.getItem("user") || "{}",
    );
    const parsedUser = userLocalStorageSchema.safeParse(rawAuthUserData);

    if (parsedUser.success) {
      const userId = parsedUser.data.id;
      mutation.mutate(userId);
    } else {
      console.error("Invalid users data in localStorage", parsedUser.error);
    }
  }, [mutation.mutate]);

  return { userData };
};

export default useUserData;
