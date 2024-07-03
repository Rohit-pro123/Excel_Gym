import React from 'react'
import "../NavBar/Home-Nav.css"

export default function footer
() {
  return (
    <>
        <footer id="aboutcontacts">
            <div class="footcon">
                <div class="about">
                    <div class="footlogo">
                        <img src="./img/excelgymlogow.png" style={{height: '80px'}} alt=""/>
                        <h1>EXCEL GYM</h1>
                    </div>
                    <p>Excel gym is a renowned name in the industry of health and fitness.Having an area of
                        approximately 3000 sq. ft., fitness pro is a three-floored gymming area with different sections
                        and proficient trainers from all over the world..</p>
                    <div class="social_links">
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="uselinks">
                    <h2>USEFUL LINKS</h2>
                    <ul>
                        <li><a href="#">Classes</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Trainers</a></li>
                        <li><a href="#">Schedule</a></li>
                    </ul>
                </div>
                <div class="contacts">
                    <h2>CONTACTS</h2>
                    <div class="place">
                        <span class="fas fa-map-marker-alt"></span>
                        <a
                            href="https://www.google.com/maps/place/VSICS/@26.44247,80.31057,15z/data=!4m6!3m5!1s0x399c47a73e5ab695:0x709b4346485409f7!8m2!3d26.44247!4d80.31057!16s%2Fg%2F11js79y6vs?entry=ttu">1,
                            Nirala nagar, Juhi Kalan, Juhi, Kanpur, Uttar Pradesh 208014</a>
                    </div>
                    <div class="phone">
                        <span class="fas fa-phone-alt"></span>
                        <span class="text">+91 72754 13179</span>
                    </div>
                    <div class="email">
                        <span class="fas fa-envelope"></span>
                        <a href="https://avatars.githubusercontent.com/u/17542406?v=4">anshubhatam@gmail.com</a>
                    </div>
                </div>
            </div>
            <hr/>
            <p style={{textAlign: 'center'}}>All right reserved @ copyright by the team Excel Gym.</p>
        </footer>
        <a href="#" class="gotopbtn"><div class="gotopsym"></div></a>
    
    </>
  )
}
