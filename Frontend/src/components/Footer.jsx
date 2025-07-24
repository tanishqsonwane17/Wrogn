import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className=' w-full bg-black rounded-t-3xl z-50 flex flex-col gap-8 px-8 py-16 pr-1 md:flex-row justify-around mt-16'>
    <ul className='text-white flex flex-col gap-2 '>
        <li className='uppercase text-md font-semibold mb-1 '>Quik Links</li>
        <li className='font-mono text-gray-300 text-xs'>privacy policy</li>
        <li className='font-mono text-gray-300 text-xs'>Returns & Shipping Plicy</li>
        <li className='font-mono text-gray-300 text-xs'>Terms & Conditions</li>
    </ul>
    <ul className='text-white flex flex-col gap-2'>
        <li className='uppercase text-md font-semibold mb-1'>connect with Us</li>
        <li className='font-mono text-gray-300 text-xs'>About Us</li>
        <li className='font-mono text-gray-300 text-xs'>Contact Us</li>
        <li className='font-mono text-gray-300 text-xs'>Track Your Order</li>
        <li className='font-mono text-gray-300 text-xs'>Track Your Order</li>
    </ul>

    <div className='hidden md:block '>
    <ul className='text-white flex flex-col gap-2 sm:hidden'>
        <li className='uppercase text-md font-semibold mb-1'>connect with Us</li>
        <li className='font-mono text-gray-300 text-xs'>About Us</li>
        <li className='font-mono text-gray-300 text-xs'>Contact Us</li>
        <li className='font-mono text-gray-300 text-xs'>Track Your Order</li>
        <li className='font-mono text-gray-300 text-xs'>Track Your Order</li>
    </ul>
    <ul className='text-white flex flex-col gap-2'>
        <li className='uppercase text-md font-semibold mb-1'>connect with Us</li>
        <li className='font-mono text-gray-300 text-xs'>About Us</li>
        <li className='font-mono text-gray-300 text-xs'>Contact Us</li>
        <li className='font-mono text-gray-300 text-xs'>Track Your Order</li>
    </ul>
    </div>
   <div className='text-gray-200 font-mono'>
    <h1 className='mb-2 text-md'>₹ INR/EN</h1>
    <div className='flex bg-ambr-200 gap-2'>
      <ul className='flex w-full flex-col text-xs text-gray-300 gap-2'>
        <li>Refund policy</li>
        <li>Privacy policy</li>
        <li>Shipping policy</li>
        <li>Terms of service</li>
        <li>Contact information</li>
      </ul>
    </div>
   </div>
  </footer>

    </>
  )
}

export default Footer