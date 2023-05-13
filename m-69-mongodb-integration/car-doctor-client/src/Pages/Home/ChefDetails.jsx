import React, { useContext, useEffect, useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import GetRecipes from './GetRecipes';
import { AuthContext } from '../../Providers/AuthProviders';


const ChefDetails = () => {
    const {loading}=useContext(AuthContext)
    if(loading){
        return <div>Loading.........</div>
    }

    let details=useParams()
    const selectedChefs=useLoaderData()
    const chefsDetailData=(selectedChefs.chefs)
    const [detailsChef, setDetailsChef]=useState({}) 

    useEffect(()=>{
        if(chefsDetailData){
            const chefData=chefsDetailData.find(chefDetail=>chefDetail.id==details.id)
            setDetailsChef(chefData)
        }
        
    },[])

    const {bio, picture, name, experience, total_recipes, likes, id, recipes}=detailsChef;
    // console.log(detailsChef)
    return (
        <div className='container mx-auto grid md:grid-cols-2 gap-4 my-10 justify-between'>
            <div className='border shadow-xl p-5'>
                <div className='flex justify-center'>
                    <img className='w-2/3 rounded-xl' src={picture} alt="" />
                </div>
                <h1 className='py-3 font-bold text-3xl text-center'>{name} </h1>
                <p className='my-4'><span className='font-bold text-green-600'>Chef's Bio:</span> {bio}</p>
                <div className='flex items-center justify-between'>
                    <p className='flex items-center'><span className='font-bold text-green-600'><FaThumbsUp className='mr-1'></FaThumbsUp> </span> {likes} Likes</p>
                    <p><span className='font-bold text-green-600'>Recipe:</span> {total_recipes} Items</p>
                    <p><span className='font-bold text-green-600'>Experience:</span> {experience}</p>
                </div>
                
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className='card-title text-center text-3xl mb-3'>Chef's Special Recipes</h1>
                    <div className="grid grid-cols-1 gap-12  ">
                        {recipes && recipes.map((recipe) => (
                        <GetRecipes 
                         recipe={recipe}></GetRecipes>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};



export default ChefDetails;