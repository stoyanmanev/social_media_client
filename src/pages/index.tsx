import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useCurrentUserQuery, User } from "../../generated/graphql";
import AuthContainer from "../app/components/AuthLevel/AuthContainer";
import NotAuthContainer from "../app/components/AuthLevel/NotAuthContainer";
import Loader from "../app/components/Loader";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectUser, setUser } from "../features/user/userSlice";

const IndexPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const user: User | {} = useAppSelector(selectUser);
  const [cookie] = useCookies(["token"]);

  const { isLoading, data, refetch, isFetching } = useCurrentUserQuery<{
    currentUser: User;
  }>({}, { refetchOnWindowFocus: false });

  useEffect(() => {
    if(cookie.token){
      refetch();
      data?.currentUser && dispatch(setUser(data.currentUser));
    } 
  }, [data, cookie.token, isFetching]);

  if (isLoading) {
    return (
      <div className="App">
        <Loader />
      </div>
    );
  }

  if (Object.entries(user).length > 0) {
    return (
      <div className="App">
        <AuthContainer />
      </div>
    );
  }

  return (
    <div className="App">
      <NotAuthContainer refetch={refetch} />
    </div>
  );
};

export default IndexPage;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmQ5MmQ3NjVhYzQzYTY3Y2FiMTVkNzUiLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTY1ODg1MzkzNiwiZXhwIjoxNjU4OTQwMzM2fQ.P8b2zle3ubqkldViJy6-aFlQhrUKJ977SPLiDgpaYRU
