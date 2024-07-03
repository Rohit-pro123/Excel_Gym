import React from 'react'
import './Home.css'


export default function Home() {
    return (
        <>
            <main class="homepage">
                <section className='section1'>
                    <div className='upper1'>
                        <div>
                        <div>
                            <p className='p'>SHAPE YOUR BODY :-</p>
                            <p className='p'>PHYSIQUE DEFINES</p>
                            <p className='p'>YOUR PERSONALITY</p>
                        </div>
                        </div>
                    </div>
                    <div className='upper2'>
                        <div>
                            <div>
                            <p>With a best</p>
                            <span>transformation rate of </span>
                            <span className="rate">99.5%</span>
                            <p>excel gym tops the chart</p>
                            <p className="improves">it improves</p>
                            <p className="improves">it creates</p>
                            <p className="improves">it changes</p>
                        </div>
                        </div>
                    </div>
                </section>
                <h1 className="me">why choose us?</h1>
                <h1 className="push my-3">Push your barriers</h1>
                <div className="choose my-3">
                    <div className="mx-3">
                        <img src="../img/treadmill.png" style={{ backgroundColor: 'white' }} alt='none' />
                        <h2 style={{ fontSize: '40px' }}>mordern equipments</h2>
                        <p>we are equiped with</p>
                        <p>high quality machines</p>
                        <p>and infrastructure.</p>
                    </div>
                    <div className="mx-3">
                        <img src="../img/nutrition.png" alt='none' />
                        <h2 style={{ fontSize: '40px' }}>healthy nutrition plan</h2>
                        <p>We provide</p>
                        <p>nutrition plan</p>
                        <p>by our certified</p>
                        <p>nutritionists and dietician.</p>
                    </div>
                    <div className="mx-3">
                        <img src="../img/gym.png" style={{ backgroundColor: 'white' }} alt='none' />
                        <h2 style={{ fontSize: '40px' }}>professional trainers</h2>
                        <p>we train you</p>
                        <p>by the best trainers</p>
                        <p>in the world.</p>
                    </div>
                </div>
                <h1>OUR PLANS</h1>
                <div className="plan">
                    <div>
                        <img src="../img/begin.png" alt='none' />
                        <h2>beginner</h2>
                        <p>start the journey</p>
                        <p>with us at</p>
                        <p>just 130$/month</p>
                    </div>
                    <div>
                        <img src="../img/inter.png" alt='none' />
                        <h2>intermediate</h2>
                        <p>upgrade your subscription</p>
                        <p>with better perks</p>
                        <p>at just 250$/semester</p>
                    </div>
                    <div>
                        <img src="../img/advance.png" alt='none' />
                        <h2>advance</h2>
                        <p>best subscription with</p>
                        <p>best perks at</p>
                        <p>just 500$/year</p>
                    </div>
                </div>
            </main>
        </>
    )
}
