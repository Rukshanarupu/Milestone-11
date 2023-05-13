import React from 'react';
import { FaSearch, FaNewspaper, FaRegComments, FaPhotoVideo, FaPen, FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Chefs from './Chefs';
import Banner from './Banner';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
import Services from './Services/Services';


const Home = () => {
    return (
        <div className=''>
            {/* Banner start here */}
            <Banner></Banner>         

            {/* about section here */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                    </div>
                    <div className='lg:w-1/2 space-y-5 p-4'>
                        <h3 className='text-3xl text-primary font-bold'>About Us</h3>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="btn my-btn">Get More Info</button>
                    </div>
                </div>
            </div>


            {/* Service section start here */}
            <Services></Services>


            {/* food reviewer section */}
            {/* <div class="mb-5 mt-5 pt-5 container">
                <div class="text-center">
                    <h4 class="">FOODS REVIEWS</h4>
                    <h2 class="">Global Customer Feedback</h2>
                </div>
                <div class="g-4 grid md:grid-cols-3">
                        <div class="card">
                            <img class="card-img-top" src="https://images.pexels.com/photos/14876457/pexels-photo-14876457.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" style="height: 200px;"/>
                            <div class="card-body">
                                <img class="rounded-circle" src="https://images.pexels.com/photos/1937791/pexels-photo-1937791.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600&amp;lazy=load" alt="" style="width: 75px; height: 75px; margin-top: -70px; margin-left: 38%;"/>
                                <div class="card-title h5">Douglas Keane</div>
                                <p class="card-text">I have to say that i love dominos handmasde pan pizza it is so so good, All product good, and service good, Items with poor reliability were</p>
                            </div>
                        </div>
                    <div class="col">
                        <div class="card">
                            <img class="card-img-top" src="https://images.pexels.com/photos/14863907/pexels-photo-14863907.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" style="height: 200px;"/>
                            <div class="card-body">
                                <img class="rounded-circle" src="https://images.pexels.com/photos/3785110/pexels-photo-3785110.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600&amp;lazy=load" alt="" style="width: 75px; height: 75px; margin-top: -75px; margin-left: 38%;"/>
                                <div class="card-title h5">Rick Shohel</div>
                                <p class="card-text">They have always given me sound advice on purchases. Recommended items are were always reliable. Items with poor reliability were duds.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img class="card-img-top" src="https://images.pexels.com/photos/14866628/pexels-photo-14866628.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" style="height: 200px;"/>
                            <div class="card-body">
                                <img class="rounded-circle" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600&amp;lazy=load" alt="" style="width: 75px; height: 75px; margin-top: -70px; margin-left: 38%;"/>
                                <div class="card-title h5">Jamil Dev</div>
                                <p class="card-text">I had a great time eating delicous food at your restaurant, the wailters and waitrsses were committed to great service and were and vary friendly</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            {/* Contact start here */}
            <section className='my-10 mx-10'>
                <div class="title-design ">
                    <div className='my-title-border'></div>
                    <h1 className='mt-10 mb-4'><span className='my-title'>Address</span></h1>
                    <div className='my-title-border'></div>
                </div>
                    <p className='text-center'>you can contact with us by following way.</p>
                <div className='flex justify-around my-4'>
                    <div className='border rounded-xl shadow-xl p-5'>
                        <h2 className='text-xl'>Restaurant</h2>
                        <p>If food is an experience for you, then you will find it at the Food Recipe</p><br />                        
                        <div>
                            <p className='flex'><FaLocationArrow className='w-7 h-7 p-2 mr-2 bg-green-400 rounded-full text-black'></FaLocationArrow> Social Chef recipe, opp secure garden. Hotel View 364001</p>
                            <p className='flex my-2'><FaPhone className='w-7 h-7 p-2 mr-2 bg-green-400 rounded-full text-black'></FaPhone> <span>236-456-1226</span></p>
                            <p className='flex'><FaEnvelope className='w-7 h-7 p-2 mr-2 bg-green-400 rounded-full text-black'></FaEnvelope> <span>info@recipes.com</span></p>
                        </div>
                    </div>
                    <div className='border rounded-xl shadow-xl p-5'>
                        <h2 className='text-xl'>Head Office</h2>
                        <p>If food is an experience for you, then you will find it at the Food Recipe</p><br /> 
                        <div>
                            <p className='flex'><FaLocationArrow className='w-7 h-7 p-2 mr-2 bg-green-400 rounded-full text-black'></FaLocationArrow> Social Chef recipe, opp secure garden. Hotel View 364001</p>
                            <p className='flex my-2'><FaPhone className='w-7 h-7 p-2 mr-2 bg-green-400 rounded-full text-black'></FaPhone> <span>236-456-1226</span></p>
                            <p className='flex'><FaEnvelope className='w-7 h-7 p-2 mr-2 bg-green-400 rounded-full text-black'></FaEnvelope> <span>info@recipes.com</span></p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;