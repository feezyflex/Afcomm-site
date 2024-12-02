import React from 'react'
import { Carousel } from 'react-responsive-carousel';

function SupplyProcurements() {
  return (
    <div>
        <Carousel
        autoPlay
        interval={2500}
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        className="relative z-10"
      >
        <div className="text-end">
          <img src="./src/assets/supply1.jpg" alt="Slide 1" />
          {/* <p className="absolute bottom-20 left-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded">
            Automate, secure, and thrive with cutting-edge office tech.
          </p> */}
        </div>
        <div className="text-end">
          <img src="./src/assets/supply2.jpg" alt="Slide 2" />
          {/* <p className="absolute bottom-20 left-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded">
            Automate, secure, and thrive with cutting-edge office tech.
          </p> */}
        </div>
        <div className="text-end">
          <img src="./src/assets/supply3.jpg" alt="Slide 3" />
          {/* <p className="absolute bottom-20 left-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded">
            Automate, secure, and thrive with cutting-edge office tech.
          </p> */}
        </div>
      </Carousel>
      <div className='p-5 mb-10'>
      <div className='mt-10'>
        <h1 className='text-3xl font-bold text-center text-blue-950 my-5'>Elevate Your Workspace with Our Comprehensive Supply and Procurement Services</h1>
        </div>
        <div>
        <p className="text-justify my-5">
Looking to equip your business with cutting-edge technology and security systems? Explore our wide range of supply and procurement services covering CCTV systems, intercom systems, fire alarm systems, access control systems, office technology solutions, computer devices, and accessories. Let us help you enhance your workspace and streamline your operations with top-of-the-line solutions tailored to your needs.
        </p>
          </div>
          <div>
  
 <b className='text-2xl text-blue-950 justify-center flex mt-5 my-10'>Our Supply and Procurement Services:</b>
<ul className='list-disc list-inside'>
<li> Choose from a variety of <b className='text-orange-700'>CCTV SYSTEMS</b> that suit your surveillance requirements, ensuring that your premises are protected and secure.</li>
<li> Find the perfect <b className='text-orange-700'>INTERCOMM SYSTEMS</b> to foster seamless communication within your office or building, enhancing connectivity and efficiency.</li>
<li> Select from reliable <b className='text-orange-700'>FIRE ALARM SYSTEMS</b> to safeguard your property and personnel, providing early detection and quick emergency response.</li>
<li> Source efficient <b className='text-orange-700'> ACCESS CONTROL SYSTEMS</b> that offer control and security over restricted areas, protecting your assets and ensuring peace of mind.</li>
<li> Explore our range of <b className='text-orange-700'> OFFICE TECHNOLOGY SOLUTIONS</b> designed to boost productivity and streamline operations, tailored to meet the demands of modern workplaces.</li>
<li> Access a comprehensive selection of <b className='text-orange-700'> COMPUTER DEVICES & ACCESSORIES</b> to equip your workspace with the latest technology and tools.</li>
</ul>
</div>

<div>
<p>
<h1 className='text-2xl font-bold text-center text-blue-950 my-10'>Why Partner with Us for Supply and Procurement?</h1>
<ul className='list-disc list-inside mb-3'>
<li>
<b className='text-orange-700'>
Diverse Product Range:</b> We offer a diverse and quality-assured range of products to cater to your specific needs and preferences.
</li>
<li>
<b className='text-orange-700'>
Competitive Pricing:</b> Benefit from competitive pricing on all our products, ensuring cost-effective solutions without compromising on quality.
</li>
<li>
<b className='text-orange-700'>
Expert Guidance:</b> Our team of experts is on hand to provide guidance and assistance in selecting the right products to meet your requirements.
</li>
</ul>

<p className='my-5'><b><i className='text-blue-950 font-bold'>"Drive Innovation and Efficiency in Your Workspace"</i></b></p>
Take the first step towards upgrading your workspace with our supply and procurement services today. 
Contact us to make inquiries or schedule a consultation to explore our range of solutions. Transform your workspace, 
enhance your security and productivity, and set your business on the path to success <br/> <p className='text-orange-700 font-bold font-serif mt-10 text-center text-2xl'>Reach out to us now to get started on your journey to a more efficient and technologically advanced workspace!</p>

        </p>
      </div>
      </div>
    </div>
  )
}

export default SupplyProcurements;