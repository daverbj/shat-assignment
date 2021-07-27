import axios from "axios";
import { useState, useEffect } from "react"
import { Table } from "react-bootstrap"

const DetailsComponent = () => {
    const [userData, setUserData] = useState({})
    useEffect(() => {
        async function fetchData(){
            let result = await axios.get(`http://localhost:5001/api/user/${localStorage.getItem("userid")}`)
            setUserData(result.data)
        }
        fetchData()
      }, []);
    return (
        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Age</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{userData._id}</td>
                        <td>{userData.age}</td>
                        <td>{userData.score}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default DetailsComponent