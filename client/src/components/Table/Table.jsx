import React from 'react'
import './Table.css'
import axios from 'axios'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import TuneIcon from '@mui/icons-material/Tune';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Filter from '../Filter/Filter';


const Table = () => {
    // https://63c83b29075b3f3a91dd189e.mockapi.io

    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const variablesArray = [
        "Date",
        "AppName",
        "AdRequest",
        "AdResponse",
        "Impression",
        "Clicks",
        "Revenue",
        "FillRate",
        "CTR"
    ]
    const arr = [
        {
            "date": 1674066870,
            "AppName": "AppName 1",
            "AdRequest": "AdRequest 1",
            "AdResponse": 22,
            "Impression": 35,
            "Clicks": 58,
            "Revenue": 9,
            "FillRate": 82,
            "CTR": 68,
            "id": "1"
        },
        {
            "date": 1674066810,
            "AppName": "AppName 2",
            "AdRequest": "AdRequest 2",
            "AdResponse": 96,
            "Impression": 58,
            "Clicks": 48,
            "Revenue": 79,
            "FillRate": 63,
            "CTR": 19,
            "id": "2"
        },
        {
            "date": 1674066750,
            "AppName": "AppName 3",
            "AdRequest": "AdRequest 3",
            "AdResponse": 82,
            "Impression": 59,
            "Clicks": 8,
            "Revenue": 49,
            "FillRate": 6,
            "CTR": 55,
            "id": "3"
        },
        {
            "date": 1674066690,
            "AppName": "AppName 4",
            "AdRequest": "AdRequest 4",
            "AdResponse": 87,
            "Impression": 78,
            "Clicks": 18,
            "Revenue": 87,
            "FillRate": 67,
            "CTR": 6,
            "id": "4"
        },
        {
            "date": 1674066630,
            "AppName": "AppName 5",
            "AdRequest": "AdRequest 5",
            "AdResponse": 85,
            "Impression": 73,
            "Clicks": 39,
            "Revenue": 93,
            "FillRate": 2,
            "CTR": 32,
            "id": "5"
        },
        {
            "date": 1674066570,
            "AppName": "AppName 6",
            "AdRequest": "AdRequest 6",
            "AdResponse": 90,
            "Impression": 88,
            "Clicks": 8,
            "Revenue": 83,
            "FillRate": 78,
            "CTR": 36,
            "id": "6"
        },
        {
            "date": 1674066510,
            "AppName": "AppName 7",
            "AdRequest": "AdRequest 7",
            "AdResponse": 30,
            "Impression": 59,
            "Clicks": 82,
            "Revenue": 87,
            "FillRate": 37,
            "CTR": 51,
            "id": "7"
        },
        {
            "date": 1674066450,
            "AppName": "AppName 8",
            "AdRequest": "AdRequest 8",
            "AdResponse": 60,
            "Impression": 81,
            "Clicks": 89,
            "Revenue": 77,
            "FillRate": 55,
            "CTR": 70,
            "id": "8"
        },
        {
            "date": 1674066390,
            "AppName": "AppName 9",
            "AdRequest": "AdRequest 9",
            "AdResponse": 77,
            "Impression": 71,
            "Clicks": 41,
            "Revenue": 16,
            "FillRate": 25,
            "CTR": 5,
            "id": "9"
        },
        {
            "date": 1674066354,
            "AppName": "AppName 10",
            "AdRequest": "AdRequest 10",
            "AdResponse": 69,
            "Impression": 3,
            "Clicks": 93,
            "Revenue": 73,
            "FillRate": 13,
            "CTR": 16,
            "id": "10"
        }
    ]
    const sortTable = () => {

        arr.sort((a, b) => {
            return a.date - b.date
        })
        console.log(arr)

    }
    //Toggle filterContiner on click
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(!open);
    };
  
    return (
        <div>
            <div className="settingsContainer">
                <Button startIcon={<TuneIcon />}
                    onClick={handleClickOpen}

                    sx={{
                        color: 'white', backgroundColor: '#3f51b5', margin: '10px', padding: '10px', borderRadius: '10px',
                        '&:hover': {
                            backgroundColor: '#3f51b5',
                            color: 'white'
                        }
                    }}


                >Settings</Button>
                <div className="filtersContainer"
                    style={{ display: open ? 'flex' : 'none' }}
                >

                   <div className="filters">
                   {variablesArray.map((item) => (
                        <Filter key={item.id} filterName={item} />
                    ))}
                   </div>
                
                    <div className="buttonsContainer">
                    <Button className='closeBtn' variant='outlined'>Close</Button>
                    <Button variant='contained'>Apply Changes</Button>
                    </div>
                </div>
                
            </div>
            <table className='mainTable'>

                <thead className='tableHead'>
                    <tr>
                        <th><Button><FilterAltIcon /></Button><br></br>Date</th>
                        <th><Button><FilterAltIcon /></Button><br></br>App Name</th>
                        <th><Button><FilterAltIcon /></Button><br></br>AD Request</th>
                        <th><Button><FilterAltIcon /></Button><br></br>AD Response</th>
                        <th><Button><FilterAltIcon /></Button><br></br>Impression</th>
                        <th><Button><FilterAltIcon /></Button><br></br>Clicks</th>
                        <th><Button><FilterAltIcon /></Button><br></br>Revenue</th>
                        <th><Button><FilterAltIcon /></Button><br></br>Fill Rate</th>
                        <th><Button><FilterAltIcon /></Button><br></br>CTR</th>
                    </tr>
                </thead>
                <tbody className='tableColumn'>
                    {arr.map((item) => (
                        <tr key={item.id} className='column'>
                            <td>{item.date}</td>
                            <td>{item.AppName}</td>
                            <td>{item.AdRequest}</td>
                            <td>{item.AdResponse}</td>
                            <td>{item.Impression}</td>
                            <td>{item.Clicks}</td>
                            <td>{item.Revenue}</td>
                            <td>{item.FillRate}</td>
                            <td>{item.CTR}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default Table


/*
Date
App Name
AD Request
AD Response
Impression
Clicks
Revenue
Fill Rate
CTR

*/