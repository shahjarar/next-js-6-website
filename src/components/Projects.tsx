import React from 'react'
import Heading from '@/components/Heading';
import Card from'@/components/Card';


const data =[
    {
        id: 0,
        title:"Todo List",
        desc:"A react & TypeScript based app for managing and organization",
        img:"/ty.jpg",
        tags:"React"

    },
    {
        id: 1,
        title:"Countdown TIMER",
        desc:"A NEXT.JS and TYPESCRIPT based powered website",
        img:"/po.jpg",
        tags:""

    },
    {
        id: 2,
        title:"",
        desc:"",
        img:"/ty.webp",
        tags:""

    },
    {
        id: 3,
        title:"",
        desc:"",
        img:"/uo.webp",
        tags:""

    },
    {
        id: 4,
        title:"",
        desc:"",
        img:"/re.webp",
        tags:""

    },
    {
        id: 5,
        title:"",
        desc:"",
        img:"/ui.jpeg",
        tags:""

    },
    {
        id: 6,
        title:"",
        desc:"",
        img:"/project.jpeg",
        tags:""

    },
    {
        id: 7,
        title:"",
        desc:"",
        img:"/hj.jpeg",
        tags:""

    },

]
const Projects = () => {
  return (
    <div id="projects" className='container pt-32'>
        <Heading title={'my projects'}/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card
                key={el.title}
                desc={el.desc}
                img={el.img}
                tags={el.tags} title={''}            />))}
        </div>
        
      
    </div>
  )
}

export default Projects
