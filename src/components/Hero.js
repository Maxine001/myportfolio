import React from 'react'
import hero from '../assets/anime_profile.png'

function Hero() {
  return <section className='hero__container'>
    <div className='hero__content'>
      <h1 className='hero__title'> Hi I'm Malcolm</h1>
      <p className='hero__description'>I'm a dedicated Frontend Developer who loves bringing ideas to life through sleek, responsive web interfaces. I work confidently with HTML, CSS, JavaScript, React, Vue.js, and Next.js to build clean, maintainable code and engaging user interfaces. My experience also includes integrating tools like Tailwind CSS, PostgreSQL, Supabase, and MongoDB to power dynamic, data-driven applications. Whether it's developing interactive dashboards or refining micro-interactions, I’m motivated by a passion for polished design, smooth performance, and great user experiences.
      </p>
      <a href='Nnamdimalcolm116@gmail.com' className='hero__contactBtn' > Contact me</a>
    </div>
    <img src={hero} className='hero__img' alt=""/>
    <div className='hero__topBlur'></div>
    <div className='hero__bottomBlur'></div>
  </section>
  
}

export default Hero;
