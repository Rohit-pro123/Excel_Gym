import React, {useState} from "react";
export default function NewMembers() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneno] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmpassword, setComfirmPassowrd] = useState('');
    const [gender, setgender] = useState('');
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({firstname,lastname,gender,email,password,phonenumber,comfirmpassword })
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
                        <h1>Add new member</h1>
                        <div class="input_box input_boxu"><input type="text" placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} required /></div>
                        <div class="input_box input_boxu"><input type="text" placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} required /></div>
                        <div class="input_box input_boxu"><input type="email" placeholder="Email-id" onChange={(e) => setEmail(e.target.value)} required /></div>
                        <div class="input_box input_boxu"><input type="tel" placeholder="Phone Number" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="12" onChange={(e) => setPhoneno(e.target.value)} required /></div>
                        <div class="input_box input_boxu"><input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required /></div>
                        <div class="input_box input_boxu"><input type="password" placeholder="Confirm Password" onChange={(e) => setComfirmPassowrd(e.target.value)} required /></div>
                        <div class="genderinput">
                            <input type="radio" name="gender" id="m" onChange={(e) => setgender("male")} />
                            <input type="radio" name="gender" id="f" onChange={(e) => setgender("female")} />
                            <input type="radio" name="gender" id="n" onChange={(e) => setgender("not to say")} />
                            <h2>Gender</h2>
                            <div>
                                <label for="m"><span class="dot md"></span>
                                    <span class="gender">Male</span></label>
                                <label for="f"><span class="dot fd"></span>
                                    <span class="gender">Female</span></label>
                                <label for="n"><span class="dot nd"></span>
                                    <span class="gender">Prefer not to say</span></label>
                            </div>
                        </div>
                        <button type="submit" onClick={handleClick}>Add</button>
                    </form>
                </div>
            </main>
        </>
    )
}