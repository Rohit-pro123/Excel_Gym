import React, { useEffect, useState } from "react";
export default function Classes() {
    const [dataval, setdataval] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [selectedField, setSelectedField] = useState('className');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/classes');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const datav = await response.json();
                console.log(datav)
                setdataval(datav);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const handleSearch = async () => {
        try {
            const response = await fetch(`/api/search?collection=classes&field=${selectedField}&query=${searchField}`);
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
            const response = await fetch(`/api/delclasses/${id}`, {
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
                    <input type="text" value={searchField} onChange={(e) => {setSelectedField(e.target.value);setSearchField('');}} placeholder="Enter to search" />
                    <select value={selectedField} onChange={(e) => setSelectedField(e.target.value)}>
                        <option value="className" selected>Class Name</option>
                        <option value="trainersId">Trainers</option>
                        <option value="schedule">Schedule</option>
                        <option value="price">Price</option>
                    </select>
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div class="tableslist">
                    <table>
                        <thead>
                            <tr>
                                <th>Class Name</th>
                                <th>Trainer Name</th>
                                <th>Schedule</th>
                                <th>Price</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataval.map((trainer, index) => (
                                <tr key={index}>
                                    <td>{trainer.className}</td>
                                    <td>{trainer.trainersId.trainersName}</td>
                                    <td>{trainer.schedule}</td>
                                    <td>{trainer.price}</td>
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