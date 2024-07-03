import React from 'react'
import "./Schedule.css"

export default function Schedule() {
  return (
    <main>
    <div class="classtime">
        <h4>Classes timetable</h4>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>6:00am-8:00am</td>
                        <td><h4>Weight Loss</h4></td>
                        <td><h4>Cardio</h4></td>
                        <td><h4>Yoga</h4></td>
                        <td><h4>Fitness</h4></td>
                        <td><h4>&nbsp;</h4></td>
                        <td><h4>Boxing</h4></td>
                        <td><h4>Body Building</h4></td>
                    </tr>
                    <tr>
                        <td>10:00am-12:00am</td>
                        <td><h4>&nbsp;</h4></td>
                        <td><h4>Fitness</h4></td>
                        <td><h4>Weight Loss</h4></td>
                        <td><h4>Cardio</h4></td>
                        <td><h4>Body Building</h4></td>
                        <td><h4>Karate</h4></td>
                        <td><h4>&nbsp;</h4></td>
                    </tr>
                    <tr>
                        <td>5:00pm-7:00pm</td>
                        <td><h4>Boxing</h4></td>
                        <td><h4>&nbsp;</h4></td>
                        <td><h4>Body Building</h4></td>
                        <td><h4>Yoga</h4></td>
                        <td><h4>Cardio</h4></td>
                        <td><h4>Fitness</h4></td>
                        <td><h4>Karate</h4></td>
                    </tr>
                    <tr>
                        <td>7:00pm-9:00pm</td>
                        <td><h4>Cardio</h4></td>
                        <td><h4>&nbsp;</h4></td>
                        <td><h4>Boxing</h4></td>
                        <td><h4>Yoga</h4></td>
                        <td><h4>Karate</h4></td>
                        <td><h4>Weight Loss</h4></td>
                        <td><h4>&nbsp;</h4></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</main>
  )
}
