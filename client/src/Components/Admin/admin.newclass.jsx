import React, { useState,useEffect  } from "react";
export default function NewMembers() {
    const [classname, setClassname] = useState('');
    const [schedule, setSchedule] = useState('');
    const [price, setPrice] = useState(0);
    const [trainers, setTrainers] = useState([]);
    const [selectedTrainer, setSelectedTrainer] = useState('');
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/newclass', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ classname, selectedTrainer, schedule, price })
            });
            const responseData = await response.json();
            if (!response.ok) {
                alert(responseData.message || 'Added failed');
            }
            else {
                alert('Added successful:', responseData);
            }
        } catch (error) {
            alert('Added error:', error.message);
        }
    };
    
  useEffect(() => {
    fetch('/api/trainers')
      .then(response => response.json())
      .then(data => {
        setTrainers(data);
      })
      .catch(error => {
        console.error('Error fetching trainers:', error);
      });
  }, []);

  const handleTrainerChange = (event) => {
    setSelectedTrainer(event.target.value);
  };
    return (
        <>
            <main class="adminmain">
                <div className="addnew">
                    <form action="#">
                        <h1>Add new class</h1>
                        <div class="input_box input_boxu"><input type="text" placeholder="Class Name" onChange={(e) => setClassname(e.target.value)} required /></div>
                        <select class="adminselecttrainers input_boxu" value={selectedTrainer} onChange={handleTrainerChange}>
                            <option value="">Select a Trainer</option>
                            {trainers.map(trainer => (
                                <option value={trainer._id}>
                                    {trainer.trainersName}
                                </option>
                            ))}
                        </select>
                        <div class="input_box input_boxu"><input type="text" placeholder="Schedule" onChange={(e) => setSchedule(e.target.value)} required /></div>
                        <div class="input_box input_boxu"><input type="number" placeholder="Price" min={0} onChange={(e) => setPrice(e.target.value)} required /></div>
                        <button type="submit" onClick={handleClick}>Add</button>
                    </form>
                </div>
            </main>
        </>
    )
}