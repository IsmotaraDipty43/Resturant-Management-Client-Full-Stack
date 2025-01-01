import React, { useState } from 'react';
import orderimg from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import OrderedCard from './OrderedCard';
import OrderPanelTab from './OrderPanelTab';
import { useParams } from 'react-router-dom';
const Orderfood = () => {
  const catagories = ['salad','pizza',  'soup','dessert', 'drinks']
  const {category}= useParams();
  const initialIndex = catagories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
 
    const [menu] = useMenu()
    const dessert = menu.filter(item=> item.category === 'dessert');
    const soup = menu.filter(item=> item.category === 'soup');
    const salad = menu.filter(item=> item.category === 'salad');
    const pizza = menu.filter(item=> item.category === 'pizza');
  const drinks = menu.filter(item=> item.category === 'drinks');
    return (
        <div>
            <Cover
    img={orderimg} 
    title={'OUR SHOP'}  
    description={
        'Satisfy your cravings with our carefully curated menu. Whether it’s a hearty meal, a light snack, or a decadent dessert, each order is crafted to perfection and delivered fresh to your table. Taste the joy of dining at your convenience!'
    } 
></Cover>

<Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>SALAD</Tab>
    <Tab>PIZZA</Tab>
    <Tab>SOUPS</Tab>
    <Tab>DESERTS</Tab>
    <Tab>DRINKS</Tab>
  </TabList>
  <TabPanel>

<OrderPanelTab items={salad}></OrderPanelTab>
  </TabPanel>
  <TabPanel><OrderPanelTab items={pizza}></OrderPanelTab></TabPanel>
  <TabPanel><OrderPanelTab items={soup}></OrderPanelTab></TabPanel>
  <TabPanel><OrderPanelTab items={dessert}></OrderPanelTab></TabPanel>
  <TabPanel><OrderPanelTab items={drinks}></OrderPanelTab></TabPanel>
</Tabs>

            
        </div>
    );
};

export default Orderfood;