import React from 'react'
//import { IoIosArrowDown } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import proyecto3 from "./../../assets/images/proyecto1.jpg"
import proyecto1 from './../../assets/images/proyecto2.jpg'
import proyecto2 from "./../../assets/images/proyecto3.jpg"
import proyecto4 from "./../../assets/images/proyecto4.png"
import proyecto5 from './../../assets/images/proyecto5.jpg'
import proyecto6 from "./../../assets/images/proyecto6.png"



function Proyectos() {
  const proyectList = [
    {
      id: 1,
      src: proyecto1,
      alt: (id) => `Proyecto ${id}`,
      title: "Apperia Landing page",
      link: "https://lg-soria.github.io/Apeperia-responsive/",
      linkGithub: "https://github.com/LG-Soria/Apeperia-responsive"
    },
    {
      id: 2,
      src: proyecto2,
      alt: (id) => `Proyecto ${id}`,
      title: "Blog page",
      link: "https://lg-soria.github.io/NewHomepageMain/",
      linkGithub: "https://github.com/LG-Soria/NewHomepageMain"
    },
    {
      id: 3,
      src: proyecto3,
      alt: (id) => `Proyecto ${id}`,
      title: "Portfolio Photography",
      link: "https://lg-soria.github.io/photography-album-web/",
      linkGithub: "https://github.com/LG-Soria/photography-album-web"

    },
    {
      id: 4,
      src: proyecto4,
      alt: (id) => `Proyecto ${id}`,
      title: "Burguer Store",
      link: "www.github.com/lg-soria/landingpage",
      linkGithub: "https://github.com/LG-Soria/burger-project"

    },
    {
      id: 5,
      src: proyecto5,
      alt: (id) => `Proyecto 5`,
      title: "Proyecto Good-Foot",
      link: "https://lg-soria.github.io/Fruto-y-fruta-proyecto/",
      linkGithub: "https://github.com/LG-Soria/Fruto-y-fruta-proyecto"

    },
    {
      id: 6,
      src: proyecto6,
      alt: (id) => `Proyecto ${id}`,
      title: "Clothes Store ",
      link: "www.github.com/lg-soria/landingpage",
      linkGithub: "https://github.com/LG-Soria/outfit-project"
    },

  ];

  return (
    <div className='proyectos__container'>

      <div className='titulo'><h2>Proyectos</h2>
        <div className='subline'></div></div>

      <div className='proyectos'>
        <ul>
          {proyectList.map((image, index) => {
            return (
              <li className='item '><a href={image.link} target="_blank" rel="noreferrer">
                <img className='' key={index} src={image.src} alt={image.title} />
                <div className='item__text'>
                  <p className='item__title'>{image.title}</p>
                  <a href={image.linkGithub} rel="noreferrer" className='span' target="_blank"> <FaGithub className='icon'/></a>
                </div>
                </a> </li>
            )
          })}

        </ul>
      </div>

      <div className='flecha' >{
        /**
  <IoIosArrowDown className='iconArrow' /> */
      }
      </div>
 { /**  <div className='proyectos__circle1Container'> 
   
    </div> */}
     <div className='contacto__circle1'></div>
    <div className='proyectos__circle2Container'>
      <div className='contacto__circle2'></div>
    </div>

    </div>
  )
}

export default Proyectos;