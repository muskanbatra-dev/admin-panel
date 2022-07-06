import React from 'react'
import{List,Datagrid,TextField,EditButton,DeleteButton,CreateButton,UrlField} from 'react-admin'

const PostList = (props) => {
  return (
    <div><List{...props}>
    <Datagrid>
        <TextField source='id'/>
        <TextField source='title'/>
        <TextField source='price'/>
        <UrlField  source='image'/>
    </Datagrid>

    </List>

    </div>
  )
}

export default PostList