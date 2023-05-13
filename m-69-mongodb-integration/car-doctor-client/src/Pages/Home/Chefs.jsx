import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chefs = () => {
    // all chefs load
    const [chefs, setChefs]=useState([])

    useEffect(()=>{
        fetch('https://b7a10-chef-recipe-hunter-server-side-rukshanarupu-rukshanarupu.vercel.app/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data.chefs))
    },[])
    // console.log(chefs)

    return (
        <div className='gap-8 grid md:grid-cols-3 my-4 text-center justify-between'>
            {
                chefs.map(chef=>
                    <GetChef
                        key={chef.id}
                        chef={chef}
                    ></GetChef> 
                )
            }
            
        </div>
    );
};


const GetChef=({chef})=>{
    // console.log(chef.name)
    const {picture, name, experience, total_recipes, likes, id, recipe_des} =chef
    // console.log(picture)
    return(
        <div className="card w-full bg-base-100 shadow-xl h-full">
            {/* <LazyLoad height={400} width={400} threshold={0.95} onContentVisible={() => {console.log('loaded!')}}> */}
            <figure><img className='h-[450px] w-full'  src={picture} alt="" /></figure>
            {/* </LazyLoad> */}
            <div className="card-body text-left">
                <h2 className="card-title">{name}</h2>
                <p className='font-bold text-green-700'>{experience} of experience</p>
                <div className="card-actions justify-between items-center">
                    <p>Total Number of Recipes: <span className='font-semibold text-red-500'>{total_recipes}</span></p>
                    <p>Likes: <span className='font-semibold text-red-500'>{likes}</span></p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`Chefs/${chef.id}`} className="my-btn text-black flex items-center">View Details<FaArrowRight className='ml-2'></FaArrowRight></Link>
                </div>
            </div>
        </div>
    )
}

export default Chefs;