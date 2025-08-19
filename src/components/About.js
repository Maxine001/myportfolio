import React from 'react'
import aboutItem from '../assets/anime2.png'
import cursorIcon from '../assets/serverIcon.png'
import serverIcon from '../assets/serverIcon.png'

function About() {
  return <section className='about__container' id="about">
    <h2 className='about__title'>About</h2>
    <div className='about__content'>
      <img src={aboutItem} className='about__img' alt=''/>
      <ul className='about__items'>
        <li className='about__item'> 
           {<img className ="abt-image" src={cursorIcon} alt=''/>}
           <div>
              <h3>Frontend developer</h3>
              <p>I'm a frontend developer with experience in building responsive and optimized websites and webapps
               Focused on building dynamic and interactive components with frameworks like React, Vite, Next.Js and also component architecture like routing.
              </p>
           </div>
        </li>

        <li className='about__item'>
           {<img className ="abt-image" src={serverIcon} alt=''/>}
           <div>
              <h3>Data scientist /  Data Engineer</h3>
              <p>Building and maintaining data pipelines using tools like SQL, Python, Spark, Airflow. <br></br>Collecting, transforming, storing, and optimizing data for analysis.</p>
           </div>
        </li>

        <li className='about__item'>
           {<img className ="abt-image" src={cursorIcon} alt=''/>}
           <div>
              <h3>Ui developer</h3>
              <p>I focus on building user interface based on design mockups, with Skills like HTML, CSS, JavaScript, react, typescript, responsive design, accessibility with tools like Figma to code workflows, Sass, Tailwind CSS.</p>
           </div>
        </li>
      </ul>

    </div>

  </section>
    
}

export default About