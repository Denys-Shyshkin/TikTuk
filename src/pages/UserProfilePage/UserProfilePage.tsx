import React from "react";

import UserCard from "../../components/UserCard";

const UserProfilePage = ({ mockedData }: any) => {
  return <UserCard data={mockedData} />;
};

export default UserProfilePage;
