import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import images from '../utils/Carousels.json'
import React from 'react'

const images = [
    
    {
        id: 1,
        src: require('../assets/Images/carousels/1.webp'),
        alt: "1"
    },
    {
        id: 2,
        src: require('../assets/Images/carousels/1c.webp'),
        alt: "1c"
    },
    {
        id: 3,
        src: require('../assets/Images/carousels/1f.webp'),
        alt: "1f"
    },
    {
        id: 4,
        src: require('../assets/Images/carousels/1l.webp'),
        alt: "1l"
    },
    {
        id: 5,
        src: require('../assets/Images/carousels/1t.webp'),
        alt: "1t"
    },
    {
        id: 6,
        src: require('../assets/Images/carousels/2c.webp'),
        alt: "2c"
    },
    {
        id: 7,
        src: require('../assets/Images/carousels/2e.webp'),
        alt: "2e"
    },
    {
        id: 8,
        src: require('../assets/Images/carousels/2ca.webp'),
        alt: "2ca"
    },
    {
        id: 9,
        src: require('../assets/Images/carousels/2r.webp'),
        alt: "2r"
    },
    {
        id: 10,
        src: require('../assets/Images/carousels/2ru.webp'),
        alt: "2ru"
    },
    {
        id: 11,
        src: require('../assets/Images/carousels/2ru.webp'),
        alt: "2ru"
    }
];
const HomeCarousels = () => {
   
  return (
    <Carousel controls={false} indicators={false} className='carsousel' >

{images.map((image) => (
                <Carousel.Item key={image.id}  interval={2000}>
                    <img
                        className=" "
                        src={image.src}
                        alt={image.alt}
                    />
                </Carousel.Item>
            ))}
   
  </Carousel>
  )
}

export default HomeCarousels


