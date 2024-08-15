import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/css/InternationalSection.css';

gsap.registerPlugin(ScrollTrigger);
const cities = [
    "Paris",
    "France",
    "London",
    "New York",
    "Floride",
    "Chicago",
    "Los Angeles",
    "Capri",
    "Bangkok",
   
  ];
const InternationalSection = () => {
    const sectionRef = useRef(null);
    
    useEffect(() => {
      const elements = gsap.utils.toArray('.city');
      elements.forEach((element, index) => {
        gsap.fromTo(element, 
          {
            y: 100, 
            opacity: 0, 
            fontSize: '6rem'
            
          },
          {
            y: 0, 
            opacity: 1, 
            fontSize: '4rem',  
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'top 50%',
              scrub: true,
              markers: false,  
            }
          }
        );
      });
    }, []);
  
    return (
      <div className="scroll-section mt-5 container  sw" ref={sectionRef}>
       <h2 className="section-title">Our international interiors</h2>
        <div className="cities ">
          {cities.map((city, index) => (
            <div key={index} className="city">
              {city}
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default InternationalSection;