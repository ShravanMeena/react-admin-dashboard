import * as React from "react";
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  DateField,
  TextField,
  EditButton,
  DeleteButton,
  TextInput,
  DateInput,
} from "react-admin";
import BookIcon from "@material-ui/icons/Book";
export const PostIcon = BookIcon;

export const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <DateField source="published_at" />
      <EditButton basePath="/posts" />
      <DeleteButton basePath="/posts" />
    </Datagrid>
  </List>
);

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      {/* <TextInput source="teaser" options={{ multiline: true }} /> */}
      {/* <TextInput multiline source="body" /> */}
      <DateInput label="Publication date" source="published_at" />
      <TextInput disabled label="No views" source="views" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = (props) => (
  <Create title="Create a Post" {...props}>
    <SimpleForm>
      <TextInput source="title" />
      {/* <TextInput source="teaser" options={{ multiline: true }} /> */}
      {/* <TextInput multiline source="body" /> */}
      <DateInput label="Publication date" source="published_at" />
    </SimpleForm> 
  </Create>
);
