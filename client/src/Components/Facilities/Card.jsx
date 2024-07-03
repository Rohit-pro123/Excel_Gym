import React from 'react'

export default function Card(props) {
    // const bg=;
    return (
        <>
            <div class="cards">
                <img src={props.imgurl} alt="" />
                <div class="card-body" >
                    <h5 class="card-title">{props.name}</h5>
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.about}</p>
                </div>
            </div>
        </>
    )
}
