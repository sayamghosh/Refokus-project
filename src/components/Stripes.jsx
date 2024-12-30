import React from 'react'
import Stripe from './Stripe'

export default function Stripes() {
    
    var data =[
        {url:"https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png",number:48},
        {url:"https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png",number:2},
        {url:"https://cdn.freebiesupply.com/images/large/2x/facebook-logo-white-full-transparent.png",number:11},
        {url:"https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png",number:48},
        {url:"https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png",number:2},
        {url:"https://cdn.prod.website-files.com/5bfeb3c30a26acdebc9378cb/651f1360cff3228963587a56_828design_webflow-white-logo.webp",number:11},
        {url:"https://cambria.assets.huffpost.com/images/partners/yahoo-finance.hash-a3fad4136cffcae5370f8016ee15a28c.png",number:11},
        {url:"https://s.yimg.com/cv/apiv2/default/bcg/norrin/images/mail_en-US_h_100-70_white_rgb-1.0.0.png",number:48},
    ]

  return (
    <div className='flex w-full mt-10'>
        {
            data.map((item,index)=>(
                <Stripe key={index} url={item.url} number={item.number}></Stripe>
            ))
        }
    </div>
  )
}
