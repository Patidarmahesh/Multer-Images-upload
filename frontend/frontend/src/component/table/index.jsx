import { Table } from "@nextui-org/react";
import { useContext, useState } from "react";
import { ModalData } from "../../usecontext";
import { Button } from "@nextui-org/react";
import { deleteRequest } from "../apihandler";
import Avatar from '@mui/material/Avatar';

export default function User_Table({getData,UpdateData}) {

  const [search, setSearch] = useState();
  const { data } = useContext(ModalData);

  const searchData = (e) => {
    let searchValue = e.target.value;
    setSearch(searchValue);
    console.log(search);
  };

  const deleteData = async (id) => {
    const response = await deleteRequest("/student",id);
    console.log(response);
    if (response) {
      getData();   
    } else {
    }
  };

  return (
    <div style={{ border: "0px solid gold", marginTop: "2rem" }}>
      <input
        placeholder="Search Here........"
        style={{
          marginLeft: "35%",
          padding: "20px",
          width: "20%",
          fontSize: "22px",
          border: "1px solid pink",
          borderRadius: "4px",
          marginBottom: "20px",
        }}
        onChange={searchData}
      />
      <Table
        bordered
        shadow={false}
        color="secondary"
        aria-label="Example pagination  table"
        css={{
          height: "auto",
          minWidth: "100%",
          // background: "#10253E"
          backgroundColor: "#00DBDE",backgroundImage: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"

        }}
        selectionMode="multiple"
      >
        <Table.Header>
          <Table.Column>Name</Table.Column>
          <Table.Column>Email</Table.Column>
          <Table.Column>Age</Table.Column> 
          <Table.Column>Profile</Table.Column> 
          <Table.Column>Delete</Table.Column>
          <Table.Column>Update</Table.Column>
        </Table.Header>
        <Table.Body>
          {data.length && data.map((values, index) => {
              const { name, email, age, _id, image} = values;
              return (
                <Table.Row key={index}>
                  <Table.Cell css={{fontWeight:"bold"}}>{name}</Table.Cell>
                  <Table.Cell css={{fontWeight:"bold"}}>{email}</Table.Cell>
                  <Table.Cell css={{fontWeight:"bold"}}>{age}</Table.Cell>
                  <Table.Cell> <Avatar alt="error No Image" src={`http://localhost:8000/${image}`}/></Table.Cell>
                  <Table.Cell>
                    <Button css={{color:"red",fontWeight:"bold"}} onClick={() =>deleteData(_id)}>Delete</Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Button css={{color:"red",fontWeight:"bold"}} onClick={() =>UpdateData(_id,values)}>Update</Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={3}
          onPageChange={(page) => console.log({ page })}
        />
      </Table>

    </div>
  );
}
