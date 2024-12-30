import React from "react";
import Marquee from "./Marquee";

export default function Marquees() {
  const images = [
    ["https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png",
    "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png",
    "https://cdn.freebiesupply.com/images/large/2x/facebook-logo-white-full-transparent.png",
    "https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png",
    "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png",
    "https://cdn.prod.website-files.com/5bfeb3c30a26acdebc9378cb/651f1360cff3228963587a56_828design_webflow-white-logo.webp",
    "https://cambria.assets.huffpost.com/images/partners/yahoo-finance.hash-a3fad4136cffcae5370f8016ee15a28c.png",
    "https://s.yimg.com/cv/apiv2/default/bcg/norrin/images/mail_en-US_h_100-70_white_rgb-1.0.0.png",
    ],
    ["https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png",
        "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png",
        "https://cdn.freebiesupply.com/images/large/2x/facebook-logo-white-full-transparent.png",
        "https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png",
        "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png",
        "https://cdn.prod.website-files.com/5bfeb3c30a26acdebc9378cb/651f1360cff3228963587a56_828design_webflow-white-logo.webp",
        "https://cambria.assets.huffpost.com/images/partners/yahoo-finance.hash-a3fad4136cffcae5370f8016ee15a28c.png",
        "https://s.yimg.com/cv/apiv2/default/bcg/norrin/images/mail_en-US_h_100-70_white_rgb-1.0.0.png",
        ]
  ]
  return (
    <div className="w-full   flex flex-col gap-5 items-center justify-center  py-10 ">
        {images.map((item,index)=>(
            <Marquee data={item} key={index} />
        ))}
    </div>
  );
}
