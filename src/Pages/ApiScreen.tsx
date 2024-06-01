import { AddBox, Margin } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Guide from "../Components/Apihandle";

export default function APIhandel() {
  const [uselist, setuserlist] = useState<any>([]);
  const  [dataloader ,setdataloader] = useState(false)
  const getapi = () => {
   setdataloader(true)
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        console.log(res, "All ok");
        setuserlist([...res.data]);
        setdataloader(false)
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  };
  const postdata = ()=>{
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      userId:1,
      title:'Ali',
      completed:true
    }).then((res)=>{
      console.log(res,"Succesfull")
    })
      .catch((err)=>{ 
        console.log(err,"Error")
      }
        
      )}
      const putdata = ()=>{
        axios.put('https://jsonplaceholder.typicode.com/todos/1',{
          userId:1,
          title:'Ali',
          completed:true
        }).then((res)=>{
          console.log(res,"Succesfull")
        })
          .catch((err)=>{ 
            console.log(err,"Error")
          }
            
          )
        }    

        const deldata = ()=>{
          axios.delete('https://jsonplaceholder.typicode.com/todos/1').then((res)=>{
            console.log(res,"Succesfull")
          })
            .catch((err)=>{ 
              console.log(err,"Error")
            }
              
            )
          }    
  
  return (
    <Box>
      <Button onClick={getapi} sx={{ margin: 1 }} variant="outlined">
        Get Data
      </Button>
      <Button onClick={postdata}  variant="outlined">Post</Button>
      <Button onClick={putdata}  variant="outlined">Put</Button>
      <Button onClick={deldata}  variant="outlined">Delete</Button>
      <Guide
        usedata={uselist}
      loading={dataloader}
        gridCols={[
          {
            key: "name",
            label: "Username",
          },
          {
            key: "email",
            label: "Email",
          },
          {
            key: "phone",
            label: "Phone",
          },
          {
            key: "website",
            label: "Website",
          },
          {
            key: "username",
            label: "Username",
          },
          {
            key:"",
            label:"Delete",
            displayfield:(row:any)=>(<Button variant="contained" onClick={()=>{
              console.log(row)
          }} >Delete</Button>)
          }
        ]}
       />
    </Box>
  );
}