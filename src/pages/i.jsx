import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import install1 from "../assets/install1.jpg";
import install2 from "../assets/install1.jpg";

function Installations() {
  return (
    <div className='flex flex-col space-y-3 mb-10'>
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
          <img src={install1} alt="Slide 1" />
          {/* <p className="absolute bottom-20 left-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded">
            Automate, secure, and thrive with cutting-edge office tech.
          </p> */}
        </div>
        <div className="text-end">
          <img src={install2} alt="Slide 2" />
          {/* <p className="absolute bottom-20 left-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded">
            Automate, secure, and thrive with cutting-edge office tech.
          </p> */}
        </div>
      </Carousel>
      <div className='p-5'>
      <div className='mt-10'>
        <h1 className='text-3xl font-bold text-center text-blue-950 my-5'>Enhance Your Security and Efficiency with Our Comprehensive Solutions</h1>
        </div>
        <div>
        <p className="text-justify my-5">
Are you looking to upgrade your security measures or improve the technological capabilities of your office space? Look no further! Our company specializes in the installation and integration of a wide range of cutting-edge systems, including CCTV systems, intercom systems, fire alarm systems, access control systems, and office technology solutions.
          </p>
          </div>
          <div>
  
 <b className='text-2xl text-blue-950 justify-center flex mt-5 my-10'>Our Installation Services:</b>
<ul className='list-disc list-inside'>
<li> Stay vigilant and monitor your premises with our state-of-the-art <b className='text-orange-700'>CCTV SYSTEMS</b>, providing you with enhanced security and peace of mind.</li>
<li> Streamline communication within your office or building with our <b className='text-orange-700'>INTERCOMM SYSTEMS</b>, fostering seamless interactions and boosting efficiency.</li>
<li> Protect your property and personnel with our reliable <b className='text-orange-700'>FIRE ALARM SYSTEMS</b>, ensuring early detection and swift response in case of emergencies.</li>
<li> Safeguard your assets and regulate entry to restricted areas with our <b className='text-orange-700'> ACCESS CONTROL SYSTEMS</b>, offering you control and visibility over who enters your premises.</li>
<li> Embrace the digital age and boost productivity with our tailored <b className='text-orange-700'> OFFICE TECHNOLOGY SOLUTIONS</b>, empowering your workforce with cutting-edge tools and systems.</li>
</ul>
</div>

<div>
<p>
<h1 className='text-2xl font-bold text-center text-blue-950 my-10'> Why Choose Us?</h1>
<ul className='list-disc list-inside mb-3'>
<li>
<b className='text-orange-700'>

Expertise:</b> Our team consists of experienced professionals who are well-versed in the latest technologies and industry best practices.
</li>
<li>
<b className='text-orange-700'>

Tailored Solutions:</b> We understand that every business is unique, which is why we offer customized solutions to meet your specific requirements and budget.
</li>
<li>
<b className='text-orange-700'>

Reliability: </b> Our systems are built to be reliable and efficient, providing you with top-notch performance and peace of mind.
</li>
</ul>

<p className='my-5'><b className='text-blue-950'><i>"Take the First Step Towards Enhanced Security and Efficiency"</i></b></p> 
Don't wait any longer to upgrade your security and office technology solutions. 
Contact us today to schedule a consultation and learn more about how our services can benefit your business. 
Take the first step towards a more secure and technologically advanced future <br/> <p className='text-orange-700 font-bold font-serif mt-10 text-center text-2xl'>Inquire Today!</p>

        </p>
      </div>
      </div>
    </div>
  )
}

export default Installations