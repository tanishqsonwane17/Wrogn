import React from 'react'
import { CiMenuBurger, CiSearch } from "react-icons/ci"
import { BsBag } from "react-icons/bs"
import WrognLogo from '../assets/images/logo.png'
import '../App.css'
import Drag from '../components/Drag'
import ProductSlider from '../components/ProductSlider'


 export const ProductCard = ({ item }) => (
  <div className="w-[45vw] min-w-[vw] rounded-lg border shadow-md">
    <div className="h-[45vw] w-full">
      {item.img && (
        <img
          className="h-full w-full object-cover rounded-t-lg"
          src={item.img}
          alt={item.name}
        />
      )}
    </div>
    <div className="bottomText flex justify-center gap-1 flex-col px-4 py-2 ">
      <h5 className="font-mono text-base">{item.name}</h5>
      <h6 className="font-semibold font-mono">{item.price}</h6>
      <h6 className="text-sm text-gray-500 font-mono line-through">{item.lastPrice}</h6>
    </div>
  </div>
);


const Home = () => {
  const Polo = [
    {
      img: 'https://www.allstag.com/cdn/shop/files/DSC_5015_52a7dbea-7381-4447-ab20-7138a71f5971.jpg?v=1726577435&width=250',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://www.allstag.com/cdn/shop/files/DSC_5015_52a7dbea-7381-4447-ab20-7138a71f5971.jpg?v=1726577435&width=250',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://www.allstag.com/cdn/shop/files/DSC_5015_52a7dbea-7381-4447-ab20-7138a71f5971.jpg?v=1726577435&width=250',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://www.allstag.com/cdn/shop/files/DSC_5015_52a7dbea-7381-4447-ab20-7138a71f5971.jpg?v=1726577435&width=250',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://www.allstag.com/cdn/shop/files/DSC_5015_52a7dbea-7381-4447-ab20-7138a71f5971.jpg?v=1726577435&width=250',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://www.allstag.com/cdn/shop/files/DSC_5015_52a7dbea-7381-4447-ab20-7138a71f5971.jpg?v=1726577435&width=250',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
  ]
  
const tshirts = [
  {
    img: 'https://www.allstag.com/cdn/shop/files/IMG_2819.png?v=1744894510&width=720',
    name: 'Polo 1',
    price: '899.00',
    lastPrice: '2099.00',
  },
  {
    img: 'https://www.allstag.com/cdn/shop/files/IMG_3520.png?v=1745494901&width=250',
    name: 'Polo 2',
    price: '999.00',
    lastPrice: '2199.00',
  },
  {
    img: 'https://www.allstag.com/cdn/shop/files/IMG_2820.png?v=1744894626&width=720',
    name: 'Polo 3',
    price: '799.00',
    lastPrice: '1899.00',
  },
  {
    img: 'https://www.allstag.com/cdn/shop/files/IMG_2723_JPEG.jpg?v=1744803440&width=720',
    name: 'Polo 4',
    price: '899.00',
    lastPrice: '2099.00',
  },
  {
    img: 'https://www.allstag.com/cdn/shop/files/IMG_9031.png?v=1741188014&width=7205',
    name: 'Polo 5',
    price: '999.00',
    lastPrice: '2199.00',
  },
];
 
  const BeigeOak =[
    {
      img: 'https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },

  ]
  const Winter = [
        {
      img: 'https://www.allstag.com/cdn/shop/files/DSC_5015_52a7dbea-7381-4447-ab20-7138a71f5971.jpg?v=1726577435&width=250',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },

  ]
  const essentials = [
     {
      img: 'https://www.allstag.com/cdn/shop/files/DSC_5015_52a7dbea-7381-4447-ab20-7138a71f5971.jpg?v=1726577435&width=250',
      name: 'Black Polo',
      price: '899.00',
      lastPrice: '2099.00'
    },

  ]


  return (
    <main className='w-full'>
      <nav>
        <ul className='h-12 w-full flex bg-gray-100 justify-between items-end px-4 py-1'>
          <li className='text-2xl'><CiMenuBurger /></li>
          <li className='h-full'><img className='h-11 w-10 object-cover' src={WrognLogo} alt="Logo" /></li>
          <div className='flex gap-4'>
            <li className='text-2xl'><CiSearch /></li>
            <li className='text-2xl'><BsBag /></li>
          </div>
        </ul>
      </nav>

      <div className='imageSlider h-[85vh] w-full bg-blue-200'></div>

      {/* Shirts Polos */}
      <div className='heading w-full flex justify-center items-center mb-4'>
        <h1 className='text-[10vw] font-semibold'>Shirts | Polos</h1>
      </div>
      <div className="polos w-full flex gap-3 justify-between px-3 flex-wrap mb-16">
        {Polo.map((item, index) => <ProductCard key={index} item={item} />)}
      </div>

      {/* Winter Exclusive */}
      <div className='heading w-full flex justify-center items-center mb-4'>
        <h1 className='text-[10vw] font-semibold'>
          <span className='font-bold font-mono uppercase text-[11vw]'>Winter</span>
          <span className='text-yellow-500 tracking-wide'> Exclusive</span>
        </h1>
      </div>
         <div className='winter w-full flex gap-3 justify-between px-4 flex-wrap mb-16'>
           {Winter.map((item, index) => (
             <ProductCard key={index} item={item} />
           ))}
         </div>
      {/* Essentials */}
      <div className='heading w-full flex justify-center items-center mb-4'>
        <h1 className='text-[10vw] font-semibold'>Essential's</h1>
      </div>
      <div className="essentials w-full flex gap-3 justify-between px-4 flex-wrap mb-16">
        {essentials.map((item,key) => (
          <ProductCard key={key} item={item} />
        ))}
      </div>

      {/* Beige Oak Infinite Scroll */}
<div className='heading w-full flex justify-center items-center mb-4'>
  <h1 className='text-[10vw] font-semibold uppercase'>Beige | Oak</h1>
</div>
  <div className='h-full w-full mb-16'>
     <Drag
        leftImage="https://wrogn.com/cdn/shop/files/WUTS1244S_6470d23f-1725-4690-9c5c-42555af49765.webp?v=1744697940"
        rightImage="https://wrogn.com/cdn/shop/files/WUTS1240S_b722463f-228f-47d3-9f13-a00d58946c7b.webp?v=1744697930"  />
  </div>
  <div className='heading w-full flex justify-center items-center mb-4'>
  <h1 className='text-[10vw] font-semibold'>INDIGO | BLACK</h1>
</div>
   <div className='w-full mb-16'>
    <Drag 
         leftImage="https://wrogn.com/cdn/shop/files/8905834516722.webp?v=1739864175&width=360"
        rightImage="https://wrogn.com/cdn/shop/files/4_ae1dcf03-ded8-4a3a-815d-6f89cb0334fe.webp?v=1739864175&width=360"  />
   </div>
   <div className='heading w-full flex justify-center items-center mb-4'>
      <h1 className='text-[10vw] font-semibold'>CHECK'D</h1>
    </div>
    <div className='w-full mb-16'>
     <Drag 
         leftImage="https://wrogn.com/cdn/shop/files/1_bb3a45c7-c750-4f9f-bd83-a881af6224bc.webp?v=1739288502"
        rightImage="https://wrogn.com/cdn/shop/files/5_de9c8cd3-43c1-4825-b677-d4cec25227a2.webp?v=1739288502"  />
    </div>


<div className="w-full mb-8">
  <ProductSlider data={tshirts} direction="left" />
</div>

<div className="w-full mb-16">
  <ProductSlider data={tshirts} direction="right" />
</div>
  <footer className='h-[60vh] w-full bg-black rounded-t-3xl flex flex-col gap-8 px-8 py-16'>
    <ul className='text-white flex flex-col gap-2'>
        <li className='uppercase text-xl font-semibold mb-2'>Quik Links</li>
        <li className='font-mono text-gray-300'>privacy policy</li>
        <li className='font-mono text-gray-300'>Returns & Shipping Plicy</li>
        <li className='font-mono text-gray-300'>Terms & Conditions</li>
    </ul>
    <ul className='text-white'>
        <li className='uppercase text-xl font-semibold mb-2'>connect with Us</li>
        <li className='font-mono text-gray-300'>About Us</li>
        <li className='font-mono text-gray-300'>Contact Us</li>
        <li className='font-mono text-gray-300'>Track Your Order</li>
    </ul>
   
   <div className='text-white'>
    <h1>₹</h1>
   </div>
  </footer>
 </main>
  )
}
export default Home
