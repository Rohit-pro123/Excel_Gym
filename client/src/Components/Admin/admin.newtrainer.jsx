import React, {useState} from "react";
export default function NewMembers() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [specialties, setSpecialties] = useState('');
    const [phonenumber, setPhoneno] = useState('');
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/newtrainer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({firstname,lastname,specialties,phonenumber})
            });
            const responseData = await response.json();
            if (!response.ok) {
                alert(responseData.message || 'Added failed');
            }
            else{
              alert('Added successful:', responseData);
            }
          } catch (error) {
            alert('Added error:', error.message);
        }
    };
    return (
        <>
            <main class="adminmain">
                <div className="addnew">
                    <form action="#">
                        <h1>Add new trainer</h1>
                        <div class="input_box input_boxu"><input type="text" placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} required /></div>
                        <div class="input_box input_boxu"><input type="text" placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} required /></div>
                        <div class="input_box input_boxu"><input type="text" placeholder="Specialties" onChange={(e) => setSpecialties(e.target.value)} required /></div>
                        <div class="input_box input_boxu"><input type="tel" placeholder="Phone Number" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="12" onChange={(e) => setPhoneno(e.target.value)} required /></div>
                        <button type="submit" onClick={handleClick}>Add</button>
                    </form>
                </div>
            </main>
        </>
    )
}