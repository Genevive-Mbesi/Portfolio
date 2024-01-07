import React from "react";
import gburudishe from '../assets/g-burudishe.png'
import {Card, CardHeader,CardFooter,Typography,CardBody, Button} from "@material-tailwind/react";


export default function Projects() {
    return ( 

<div className="container min-h-screen bg-slate-900 mx-auto font-mono px-20 text-gray-100 p-10">
<Card className="mr-10 ring-2 ring-slate-500 ">
      <CardHeader>
        <img
          src={gburudishe} alt ='g-burudishe'className='motion-safe:animate-pulse w-90 shadow-indigo-500 p-3'
        />
      </CardHeader>
      <CardBody>
        <Typography className="text-s">

<span className="font-semibold"> g ~ burudishe </span> <br></br> 
 A cutting-edge web application revolutionizing search recommendations for relaxation chill spots by considering likes and personal preferences, the app tailors its suggestions aligning perfectly with your interests.
<span className="font-semibold"><br></br>Key features include </span><br></br>

Personalized recommendations and tailored suggestions<br></br> based on likes and preferences,<br></br>

Holiday and Event Filters,<br></br>
a sleek and intuitive user friendly design,<br></br>

and an enjoyable seamless user experience.<br></br>

<span className="font-semibold" >Tech Stack:</span>

Frontend: HTML, Tailwind CSS, Node.js, React <br></br>
Backend: Python, Django<br></br>
Database: MySQL <br></br>
<a href= 'https://github.com/Genevive-Mbesi/g-burudishe'><span className="text-gray-500">Code</span></a>
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      </CardFooter>
    </Card>
    </div>
    )
}