import React, { useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import "./admin.css";
export default function MemberDashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    const [memberData, setMemberData] = useState({});
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const memberIdParam = searchParams.get('memberId');
        if (memberIdParam) {
            fetchMemberData(memberIdParam);
        }
    }, [location.search]);
    const fetchMemberData = async (memberId) => {
        try {
            const response = await fetch(`/api/member/${memberId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMemberData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleDelete = async(id) => {
        try {
            const response = await fetch(`/api/delmembers/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete member');
            }
            const data = await response.json();
            alert(data.message);
            navigate(`/`);
        } catch (error) {
            alert('Error deleting member:', error);
        }
    };
    return (
        <>
            <div class="mainscreen">
                <header>
                    <img src="../img/excelgymlogow.png" style={{ height: '80px' }} alt='' />
                    <h1>EXCEL GYM</h1>
                    <div class="menus">
                        <a href="/" id="sign">Sign Out</a>
                    </div>
                </header>
                <div class="dashboard">
                    <div>
                        <div class="memberdetails">
                            <div>
                                <h1>Member Details</h1>
                                <button onClick={() => handleDelete(memberData._id)}>Remove account</button>
                            </div>
                            <table>
                                <tbody>
                                <tr>
                                    <td>Firstname:</td>
                                    <td>{memberData.firstname}</td>
                                </tr>
                                <tr>
                                    <td>Lastname:</td>
                                    <td>{memberData.lastname}</td>
                                </tr>
                                <tr>
                                    <td>Gender:</td>
                                    <td>{memberData.gender}</td>
                                </tr>
                                <tr>
                                    <td>Email id:</td>
                                    <td>{memberData.email}</td>
                                </tr>
                                <tr>
                                    <td>Phone number:</td>
                                    <td>{memberData.phone}</td>
                                </tr>
                                <tr>
                                    <td>Join Date:</td>
                                    <td>{memberData.joinDate}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* <div class="bookingdetails">
                            <div>
                                <h1>Booking details</h1>
                            </div>
                            <table>
                                <thead>
                                    <th>Class name</th>
                                    <th>Trainers name</th>
                                    <th>Booking date</th>
                                    <th>Price</th>
                                </thead>
                            </table>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
