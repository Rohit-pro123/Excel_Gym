import React, { useEffect, useState } from "react";
export default function Trainers() {
    const [dataval, setdataval] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [selectedField, setSelectedField] = useState('trainersName');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/trainers');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const datav = await response.json();
                setdataval(datav);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    const handleSearch = async () => {
        try {
            const response = await fetch(`/api/search?collection=trainers&field=${selectedField}&query=${searchField}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const datav = await response.json();
            setdataval(datav);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/deltrainers/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete trainer');
            }
            const data = await response.json();
            setdataval(dataval.filter(member => member._id !== id));
            alert(data.message);
        } catch (error) {
            alert('Error deleting trainer:', error);
        }
    };
    return (
        <>
            <main class="adminmain">
                <div className="search">
                    <input type="text" value={searchField} onChange={(e) => setSearchField(e.target.value)} placeholder="Enter to search" />
                    <select value={selectedField} onChange={(e) => {setSelectedField(e.target.value);setSearchField('');}}>
                        <option value="trainersName" selected>Name</option>
                        <option value="specialties">Specialites</option>
                        <option value="contactInfo">Phone number</option>
                    </select>
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div class="tableslist">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Specialites</th>
                                <th>Phone number</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataval.map((trainer, index) => (
                                <tr key={index}>
                                    <td>{trainer.trainersName}</td>
                                    <td>{trainer.specialties}</td>
                                    <td>{trainer.contactInfo}</td>
                                    <td>
                                        <button onClick={() => handleDelete(trainer._id)}>Delete</button>
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