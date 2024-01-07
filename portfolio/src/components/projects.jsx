import React from "react";
import gburudishe from '../assets/g-burudishe.png'
import {Card,CardFooter,Typography,CardBody,} from "@material-tailwind/react";


export default function Projects() {
    return ( 
<Card className=" font-mono text-gray-100 p-10 px-20 mx-auto">
      <CardBody>
        <img
          src={gburudishe} alt ='g-burudishe'className='w-80 shadow-indigo-500 '
        />
        <Typography className="text-s">

<span className="font-semibold"> g ~ burudishe </span> <br></br> 
 A cutting-edge web application revolutionizing,<br></br> search recommendations for relaxation <br></br> chill spots by considering likes and personal<br></br>
  preferences, the app tailors its suggestions <br></br>aligning perfectly with your interests.
<span className="font-semibold"><br></br>Key features include </span><br></br>

Personalized recommendations and tailored suggestions<br></br> based on likes and preferences,<br></br>

Holiday and Event Filters,<br></br>
a sleek and intuitive user friendly design,<br></br>

and an enjoyable seamless user experience.<br></br>

<span className="font-semibold" >Tech Stack:</span>

Frontend: HTML, Tailwind CSS, React <br></br>
Backend: Python, Django<br></br>
Database: MySQL <br></br>
<a href= 'https://github.com/Genevive-Mbesi/g-burudishe'><span className="text-gray-500">Code</span></a>
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      </CardFooter>
    </Card>
    )
}