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

            <h2 className='text-2xl mt-5 mb-2'>Ingredients: </h2>
            <ul className='list-disc'>
                {
                    main_ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                }
            </ul>


            <h2 className="text-2xl mt-5 mb-2">Nutrition:</h2>

            <ul className="list-disc ml-5">
                {Object.entries(approximate_nutrition_per_serving).map(
                    ([key, value], index) => (
                        <li key={index}>
                            {key}: {value}
                        </li>
                    )
                )}
            </ul>

            
        </div>
    );
};

export default FoodDetailPage;