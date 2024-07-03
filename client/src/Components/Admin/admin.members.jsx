import React, { useEffect, useState } from "react";
export default function Members(){
    const [dataval, setdataval] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [selectedField, setSelectedField] = useState('firstname');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/members');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const datav = await response.json();
                setdataval(datav); 
            } catch (error) {
                alert('Error fetching data');
            }
        };

        fetchData();
    }, []);
    const handleSearch = async () => {
        try {
            const response = await fetch(`/api/search?collection=members&field=${selectedField}&query=${searchField}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const datav = await response.json();
            setdataval(datav);
        } catch (error) {
            alert('Error fetching data' );
        }
    };
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/delmembers/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete member');
            }
            const data = await response.json();
            setdataval(dataval.filter(member => member._id !== id));
            alert(data.message);
        } catch (error) {
            alert('Error deleting member:', error);
        }
    };
    return (
        <>
            <main class="adminmain">
                <div className="search">
                <input type="text" value={searchField} onChange={(e) => setSearchField(e.target.value)} placeholder="Enter to search" />
                    <select value={selectedField} onChange={(e) => {setSelectedField(e.target.value);setSearchField('');}}>
                        <option value="firstname" selected>First Name</option>
                        <option value="lastname">Last Name</option>
                        <option value="gender">Gender</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone number</option>
                        <option value="joinDate">Join Date</option>
                    </select>
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div class="tableslist">
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Join date</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        {dataval.map((varu, index) => (
                            <tr key={index}>
                                <td>{varu.firstname} {varu.lastname}</td>
                                <td>{varu.gender}</td>
                                <td>{varu.email}</td>
                                <td>{varu.phone}</td>
                                <td>{varu.joinDate}</td>
                                <td>
                                    <button onClick={() => handleDelete(varu._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}