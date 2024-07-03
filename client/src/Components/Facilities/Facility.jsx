import React, { useEffect,useState} from 'react'
import Card from './Card'
import "./trainers.css"
export default function Facility(){
    const [trainers, setTrainers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/api/trainers');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTrainers(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []); 
        return (
            <>
                <div class="trainerslayout">
                    {trainers.map((element,index) => {
                        const URLimg="../img/trainer"+(index+1)+".jpg"
                        return (
                            <Card title={element.specialties} name={element.trainersName} imgurl={URLimg} />)
                    })}
                </div>
            </>
        )
    }
