import React from 'react'
import Profile from './Profile'
import './gallery.css'

export default function Gallery() {
    const student = [{
        pic: 'https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg',
        name: "asdsd",
        branch: "IT",
        section: "C",
        college: "ABESEC"
    },
    {
        pic: 'https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg',
        name: "cvbn",
        branch: "IT",
        section: "C",
        college: "ABESEC"
    },
    {
        pic: 'https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg',
        name: "tyui",
        branch: "IT",
        section: "C",
        college: "ABESEC"
    },
    {
        pic: 'https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg',
        name: "ghjkl",
        branch: "IT",
        section: "C",
        college: "ABESEC"
    }
    ]
    return (
        <div>
            {/* <Profile name = "Vishwaraj" branch = "IT" section = "C" college = "ABESEC"/>
      <Profile name = "Alok" branch = "IT" section = "C" college = "ABESEC"/>
      <Profile name = "Adarsh" branch = "IT" section = "C" college = "ABESEC"/> */}

            {/* <Profile data = {student[0]} /> */}

            {
                student.map((e, index) => (
                    <Profile data={e} key={index} />
                ))
            }
        </div>
    )
}
