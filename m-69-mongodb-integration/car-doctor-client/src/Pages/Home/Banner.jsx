import React from 'react';
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="container mx-auto carousel h-[700px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className='absolute rounded-xl flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                    <div className=" text-white space-y-7 w-1/3 ml-10">
                        <h1 className="mb-5 text-7xl font-bold font-forum">Affordable Price For Car Servicing!</h1>
                        <p className="mb-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <p className='flex'><Link to='./login' className="btn my-btn mb-3">Discover More</Link> <Link to='./login' className="flex justify-center items-center border-2 border-white ml-2 px-5 mb-3">Latest Project</Link></p>
                    </div>
                </div>
                
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-5">
                    <a href="#slide5" className="btn btn-circle hover:bg-primary">❮</a> 
                    <a href="#slide2" className="btn btn-circle ml-2 hover:bg-primary">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className='absolute rounded-xl flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                    <div className=" text-white space-y-7 w-1/3 ml-10">
                        <h1 className="mb-5 text-7xl font-bold font-forum">Affordable Price For Car Servicing!</h1>
                        <p className="mb-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <p className='flex'><Link to='./login' className="btn my-btn mb-3">Discover More</Link> <Link to='./login' className="flex justify-center items-center border-2 border-white ml-2 px-5 mb-3">Latest Project</Link></p>
                    </div>
                </div>
                
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-5">
                    <a href="#slide1" className="btn btn-circle hover:bg-primary">❮</a> 
                    <a href="#slide3" className="btn btn-circle ml-2 hover:bg-primary">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className='absolute rounded-xl flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                    <div className=" text-white space-y-7 w-1/3 ml-10">
                        <h1 className="mb-5 text-7xl font-bold font-forum">Affordable Price For Car Servicing!</h1>
                        <p className="mb-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <p className='flex'><Link to='./login' className="btn my-btn mb-3">Discover More</Link> <Link to='./login' className="flex justify-center items-center border-2 border-white ml-2 px-5 mb-3">Latest Project</Link></p>
                    </div>
                </div>
                
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-5">
                    <a href="#slide2" className="btn btn-circle hover:bg-primary">❮</a> 
                    <a href="#slide4" className="btn btn-circle ml-2 hover:bg-primary">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className='absolute rounded-xl flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                    <div className=" text-white space-y-7 w-1/3 ml-10">
                        <h1 className="mb-5 text-7xl font-bold font-forum">Affordable Price For Car Servicing!</h1>
                        <p className="mb-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <p className='flex'><Link to='./login' className="btn my-btn mb-3">Discover More</Link> <Link to='./login' className="flex justify-center items-center border-2 border-white ml-2 px-5 mb-3">Latest Project</Link></p>
                    </div>
                </div>
                
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-5">
                    <a href="#slide3" className="btn btn-circle hover:bg-primary">❮</a> 
                    <a href="#slide5" className="btn btn-circle ml-2 hover:bg-primary">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />
                <div className='absolute rounded-xl flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                    <div className=" text-white space-y-7 w-1/3 ml-10">
                        <h1 className="mb-5 text-7xl font-bold font-forum">Affordable Price For Car Servicing!</h1>
                        <p className="mb-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <p className='flex'><Link to='./login' className="btn my-btn mb-3">Discover More</Link> <Link to='./login' className="flex justify-center items-center border-2 border-white ml-2 px-5 mb-3">Latest Project</Link></p>
                    </div>
                </div>
                
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-5">
                    <a href="#slide4" className="btn btn-circle hover:bg-primary">❮</a> 
                    <a href="#slide1" className="btn btn-circle ml-2 hover:bg-primary">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;