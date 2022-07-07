import React from 'react'
import{List,Datagrid,TextField,EditButton,DeleteButton,CreateButton,UrlField} from 'react-admin'

const PostList = (props) => {
  return (
    <div><List{...props}>
    <Datagrid>
        <TextField source='id'/>
        <TextField source='name'/>
        <TextField source='price'/>
        <UrlField  source='image'/>
        <EditButton basepath='/super-admin'/>
        <DeleteButton basepath='/super-admin'/>
        <CreateButton basepath='/super-admin'/>
    </Datagrid>

    </List>

    </div>
  )
}

export default PostList