import Image from 'next/image';
import React from 'react';

const FoodDetailPage = async ({ params }) => {
    const { foodId } = await params;

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const food = data.data;

    const {
        dish_name,
        image_link,
        category,
        alternative_names,
        main_ingredients,
        approximate_nutrition_per_serving,
        rating,
        price,
        cuisine,
        cooking_steps,
    } = food;

    return (
        <div>
            <h2 className='my-5'>Showing details of food: {foodId}</h2>

            <h2>{dish_name}</h2>
            <p>{price}</p>

            <Image
                src={image_link}
                alt={dish_name}
                width={200}
                height={200}
                className="object-cover"
            />
        </div>
    );
};

export default FoodDetailPage;