import React from "react";
import { Admin, Resource } from "react-admin";
import resPovider from "ra-data-simple-rest";
import {
  PostList,
  PostEdit,
  PostCreate,
  PostIcon,
} from "../src/components/Posts";

import {
  UserList,
  UserEdit,
  UserCreate,
  UserIcon
} from "../src/components/Users";

export default function App() {
  return (
    <Admin dataProvider={resPovider("http://localhost:3000")}>
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
       <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
        icon={UserIcon}
      />

    </Admin>
  );
}
