import FoodCard from '@/components/FoodCard';
import React from 'react';

const FoodsPage = async () => {

    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
    const foodsData = await res.json();
    const foods = foodsData.data;

    console.log(foods, "foods data");

    return (
        <div>
            <h2 className='text-5xl text-center my-5 font-bold'>Foods: {foods.length}</h2>

            <div className='grid grid-cols-3 gap-4'>
                {
                    foods.map((food) => <FoodCard food={food} key={food.id}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default FoodsPage;