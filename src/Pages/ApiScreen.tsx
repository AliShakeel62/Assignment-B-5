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
  return (
    <Box>
      <Button onClick={getapi} sx={{ margin: 1 }} variant="outlined">
        Get Data
      </Button>
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
              row["name"]=""
          }} >Delete</Button>)
          }
        ]}
       />
    </Box>
  );
}
