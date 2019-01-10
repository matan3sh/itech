import React from 'react';
import Slider from 'react-slick';
import MyButton from '../utils/button';

const HomeSlider = (props) => {

    const slides = [
        {
            img:'/images/featured/featured_home.jpg',
            lineOne:'Macbook Pro',
            lineTwo:'2019 Model',
            linkTitle:'Shop Now',
            linkTo:'/shop'
        },
        {
            img:'/images/featured/featured_home_2.jpg',
            lineOne:'iMac',
            lineTwo:'Exclusive Prices',
            linkTitle:'View Offers',
            linkTo:'/shop'
        }
    ]

    //according to Slider documentations from 'react-slick'
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        sildesToShow: 1,
        slideToScroll: 1,
        arrows: false
    }

    const generateSlides = () => (
        slides ? 
            slides.map((item,i)=>(
                <div key={i}>
                    <div className="featured_image"
                        style={{
                            background: `url(${item.img})`,
                            height:`${window.innerHeight}px`,
                        }}
                    >
                        <div className="featured_action">
                            <div className="tag title">{item.lineOne}</div>
                            <div className="tag low_title">{item.lineTwo}</div>
                            <div>
                                <MyButton
                                    type="default"
                                    title={item.linkTitle}
                                    linkTo={item.linkTo}
                                    addStyles={{
                                        margin: '10px 0 0 0'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))
        :null
    )

    return (
        <div className="featured_container">
            <Slider {...settings}>
                { generateSlides() }
            </Slider>
        </div>
    );
};

export default HomeSlider;