import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import styled from "styled-components";
import { db, storage } from "../firebase";
import { AiOutlineDelete } from "react-icons/ai";

const DataContainer = styled.div`
  flex: 1 1;
  padding: 10px 0px 0px 20px;
`;

const DataHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  height: 40px;
  transition: all 0.5s;
  .headerLeft {
    display: flex;
    align-items: center;
  }
  .headerRight svg {
    margin: 0px 10px;
  }
`;

const DataGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  transition: all 0.5s;
`;

const DataFile = styled.div`
  text-align: center;
  border: 1px solid rgb(204 204 204 / 46%);
  margin: 10px;
  min-width: 200px;
  padding: 10px 0px 0px 0px;
  border-radius: 5px;
  transition: all 0.5s;
  svg {
    font-size: 60px;
    color: gray;
  }
  p {
    border-top: 1px solid #ccc;
    margin-top: 5px;
    margin-bottom: 0px;
    font-size: 12px;
    background: whitesmoke;
    padding: 10px 0px;
  }
`;
const DataListRow = styled.div`
  display: grid;
  grid-template-columns: 25% 20% 25% 10% 20%;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  transition: all 0.5s;
  p {
    display: flex;
    align-items: center;
    font-size: 13px;
    text-align: center;
    b {
      display: flex;
      align-items: center;
    }
    svg {
      font-size: 22px;
      margin: 10px;
    }
    button{
        width: 20%;
    }
  }
`;

const Data = () => {

    const [files, setFiles] = useState([]);
    

    useEffect( () => {
        db.collection("myfiles").onSnapshot(snapshot => {

            setFiles(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
            
        })
    }, [])

    const changeBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

  return (
    <DataContainer>
      <DataHeader>
        <div className="headerLeft">
          <p>My Drive</p>
          <ArrowDropDownIcon />
        </div>
        <div className="headerRight">
          <FilterListIcon />
          <InfoOutlinedIcon />
        </div>
      </DataHeader>
      <div>
        <DataGrid>
            {files.map(file => (
                <DataFile key={file.id}>
                    <a href={file.data.fileURL} ><img style={{width:"200px", height:"100px", cursor: "pointer"}} src={file.data.fileURL} /></a>
                    <p>{file.data.filename}</p>
                </DataFile>

            ))}
        </DataGrid>
        <div>
          <DataListRow>
                <p><b>Name <ImportExportIcon /></b></p>
                <p><b>Owner</b></p>
                <p><b>Last Modified</b></p>
                <p></p>
                <p><b>File Size</b></p>
          </DataListRow>
          {files.map(file => (
            <DataListRow key={file.id}>
                <a style={{textDecoration: "none", color: 'black'}} href={file.data.fileURL} target="_blank" ><p><InsertDriveFileIcon />{file.data.filename} </p></a>
                
                <p>Owner</p>
                <p>{new Date(file.data.timestamp?.seconds*1000).toUTCString()}</p>
                <button onClick={(e) => {
                    
                }} style={{width:"20%", border: "none", backgroundColor:'transparent', cursor: "pointer", fontSize:"1.5rem" }}><AiOutlineDelete /></button>
                <p>{changeBytes(file.data.fileSize)}</p>
            </DataListRow>
        ))}
        </div>
      </div>
    </DataContainer>
  );
};

export default Data;