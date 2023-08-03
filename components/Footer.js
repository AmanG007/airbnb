import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 spce-y-10 px-32
    py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Its a pretty awesom clone</p>
            <p>Referrals accepted</p>
            <p>Aman Gupta</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Support</h5>
            <p>Help Center</p>
            <p>Air Cover</p>
            <p>Cancellation option</p>
            <p>Report</p>
        </div>
   
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOSTING</h5>
            <p>Airbnb your home</p>
            <p>AirCover for host</p>
            <p>Explore hosting resource</p>
            <p>Visit our fourm</p>
            <p>How to host responsibly</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Airbnb</h5>
            <p>Newsroom</p>
            <p>Careet</p>
            <p>Investors</p>
            <p>Learn </p>
        </div>

    </div>



  )
}

export default Footer