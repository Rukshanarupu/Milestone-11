import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaHeart } from 'react-icons/fa';

const GetRecipes = ({recipe}) => {
    // console.log(recipe)

    // favorite btn function
    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavoriteClick = () => {
        setIsFavorite(true);
        toast.success('This recipe is now your favorite!');
    };

    const {recipeName, ingredients, method, rating, photo}=recipe

    return(
        <div className='border rounded-xl mb-4 p-4'>
            <h1 className='text-xl mb-3'><span className='font-bold text-green-600'>Recipe:</span> {recipeName}</h1>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='font-bold text-green-600 text-lg'>Ingredients:</p>
                    <p className=" my-4 rounded-3xl p-3  bg-green-300 md:w-10/12 w-11/12 mx-auto mb-4 pl-5">
                    {ingredients.map((item) => (
                        <p>{item}</p>
                    ))}
                    </p>
                </div>
                <div>
                    <img src={photo} alt="" />
                </div>
            </div>
            <p><span className='font-bold text-green-600 my-3'>Cooking_method: </span> {method}</p>
            <p><span className='font-bold text-green-600'>Rating:</span> {rating}</p>
            <div className='flex justify-center'>
              <button disabled={isFavorite} onClick={handleFavoriteClick} className='my-btn flex items-center text-black'>
                  <FaHeart></FaHeart>
                  <span className='ml-1'>
                      {isFavorite ? 'Favorite' : 'Mark as Favorite'}
                  </span>
              </button>
            </div>
        </div>
    )

};

export default GetRecipes;
