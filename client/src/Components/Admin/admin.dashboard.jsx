import React,{ useEffect,useState} from "react";
export default function Dashboard() {
    const [mc, setmc] = useState(0);
    const [bc, setbc] = useState(0);
    const [cc, setcc] = useState(0);
    const [tc, settc] = useState(0);

    useEffect(() => {
        fetch('/api/dashboard')
            .then(response => response.json())
            .then(data => {
                setmc(data.mcount);
                setbc(data.bcount);
                setcc(data.ccount);
                settc(data.tcount);
            })
            .catch(error => {
                console.error('Error fetching non-admin member count:', error);
            });
    }, []);
    return (
        <>
            <main class="adminmain">
                <div class="infoadmin">
                    <div class="card">
                        <div>
                            <span>Trainers</span>
                            <h1>{tc}</h1>
                        </div>
                        <div>
                            <i class="fa-solid fa-user"></i>
                        </div>
                    </div>
                    <div class="card">
                        <div>
                            <span>Members</span>
                            <h1>{mc}</h1>
                        </div>
                        <div>
                            <i class="fa-solid fa-users"></i>
                        </div>
                    </div>
                    <div class="card">
                        <div>
                            <span>Bookings</span>
                            <h1>{bc}</h1>
                        </div>
                        <div>
                            <i class="fa-solid fa-clipboard"></i>
                        </div>
                    </div>
                    <div class="card">
                        <div>
                            <span>Renvenues</span>
                            <h1>{cc}</h1>
                        </div>
                        <div>
                            <i class="fa-solid fa-dollar-sign"></i>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}