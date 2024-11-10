import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'></div>
      <div>
        <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
        <p className='text-gray-500 pt-2'>
        Technology is a part of our daily lives, affecting everything from how we wake up to how we retire. It has made our lives easier and more convenient, and has improved access to transportation, education, and labor. 
 
 Benefits of technology
 Technology has made it possible for the average person to afford luxuries like a mobile phone, television, and computer. It has also improved accessibility for people with hearing aids, giving them the ability to communicate and enjoy entertainment. 
  
 Challenges of technology
 While technology has many benefits, it also presents some challenges. These include security and privacy concerns, such as the ability of criminals to bypass security measures for online payment methods. 
  
 Balance
        </p>
      </div>
      <div className='grid grid-col-2 text-accent text-3xl sm:text-4xl'>
        <div className='space-y-2'>
         <h2>Typescript</h2>
         <h2>React.js</h2>
         <h2>Next.js</h2>
        </div>
        <div className='space-y-2'>
         <h2>TailwindCss</h2>
         <h2>CSS</h2>
         <h2>Node.js</h2>
        </div>
      </div>
    </div>

  )
};

export default Skills
