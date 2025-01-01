import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import imgmenu from '../../assets/menu/banner3.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTitlee from '../../Component/SectionTitlee';
import MenuCategory from './MenuCategory';
import MenuSection from '../Shared/MenuSection';
import desertimg from '../../assets/menu/dessert-bg.jpeg'
import pizzaimg from '../../assets/menu/pizza-bg.jpg'
import soupimg from '../../assets/menu/salad-bg.jpg'
import saladimg from '../../assets/menu/soup-bg.jpg'



const OurMenu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item=> item.category === 'dessert');
    const soup = menu.filter(item=> item.category === 'soup');
    const salad = menu.filter(item=> item.category === 'salad');
    const pizza = menu.filter(item=> item.category === 'pizza');
  const offered = menu.filter(item=> item.category === 'offered');

    return (
        <div>
            <Helmet><title>BistroBoss||Menu</title></Helmet>
            <Cover img={imgmenu} title={'our menu'}  description={
                    'Explore a delightful variety of dishes curated to tantalize your taste buds. From appetizers to desserts, each dish is crafted with the freshest ingredients and a touch of love. Come, discover flavors that create lasting memories!'
                }></Cover>
            <div className='mt-10 mb-10 justify-center items-center flex flex-col'>
            <SectionTitlee heading="TODAY'S OFFER" subHeading={"---Don't miss---"}></SectionTitlee>
            <MenuCategory items={offered}></MenuCategory>
           
           
           
        

            </div>

            <div className='mt-10 mb-10 '>
            <MenuSection 
    title={'DESSERTS'}  bgimg={desertimg}
 
    description={'Indulge in our decadent desserts, crafted to satisfy your sweet cravings. From rich chocolate delights to creamy delicacies, every bite promises pure bliss.'} 
/>
            <MenuCategory items={dessert} category={'dessert'}></MenuCategory>
           
           
            </div>










            <div className='mt-10 mb-10 '>
            <MenuSection 
    title={'PIZZA'} bgimg={pizzaimg}

    description={'Experience the perfect harmony of flavors with our handcrafted pizzas. Topped with the finest ingredients and baked to perfection, it’s a slice of happiness in every bite.'} 
/>
            <MenuCategory items={pizza} category={'pizza'}></MenuCategory>
            
            </div>


            <div className='mt-10 mb-10 '>
            <MenuSection 
    title={'SOUP'} 
    bgimg={soupimg} 
    description={'Warm your soul with our delightful soups, crafted from fresh ingredients and simmered to perfection. Each spoonful is a comforting embrace.'} 
/>

            <MenuCategory items={soup} category={'soup'}></MenuCategory>
            
            </div>
           
           
            <div className='mt-10 mb-10 '>
            <MenuSection 
        title={'SALAD'} 
        bgimg={saladimg} 
        description={'Discover the freshness of our salads, packed with crisp greens, juicy fruits, and delicious dressings. A perfect blend of health and taste in every bite.'} 
    />

            <MenuCategory items={salad} category={'salad'}></MenuCategory>
         
            </div>


        </div>
    );
};

export default OurMenu;