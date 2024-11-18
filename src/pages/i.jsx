import React from 'react'
import { Carousel } from 'react-responsive-carousel'

function Installations() {
  return (
    <div className='flex flex-col space-y-3 mb-96'>
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
          <img src="./src/assets/install1.jpg" alt="Slide 1" />
          {/* <p className="absolute bottom-20 left-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded">
            Automate, secure, and thrive with cutting-edge office tech.
          </p> */}
        </div>
        <div className="text-end">
          <img src="./src/assets/install2.jpg" alt="Slide 2" />
          {/* <p className="absolute bottom-20 left-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded">
            Automate, secure, and thrive with cutting-edge office tech.
          </p> */}
        </div>
      </Carousel>
      <div className='p-5'>
      <div className='mt-10'>
        <h1 className='text-2xl font-bold text-center text-blue-950 my-5'>Enhance Your Security and Efficiency with Our Comprehensive Solutions</h1>
        </div>
        <div>
        <p className="text-justify my-5">
Are you looking to upgrade your security measures or improve the technological capabilities of your office space? Look no further! Our company specializes in the installation and integration of a wide range of cutting-edge systems, including CCTV systems, intercom systems, fire alarm systems, access control systems, and office technology solutions.
          </p>
          </div>
          <div>
  
 <b className='text-xl text-blue-950 justify-center flex mt-5 my-10'>Our Services:</b>
<ul className='list-disc list-inside'>
<li> <b>CCTV Systems: </b> Stay vigilant and monitor your premises with our state-of-the-art CCTV systems, providing you with enhanced security and peace of mind.</li>
<li> <b>Intercom Systems: </b> Streamline communication within your office or building with our intercom systems, fostering seamless interactions and boosting efficiency.</li>
<li> <b> Fire Alarm Systems:</b> Protect your property and personnel with our reliable fire alarm systems, ensuring early detection and swift response in case of emergencies.</li>
<li> <b>Access Control Systems:</b> Safeguard your assets and regulate entry to restricted areas with our access control systems, offering you control and visibility over who enters your premises.</li>
<li><b>Office Technology Solutions</b>: Embrace the digital age and boost productivity with our tailored office technology solutions, empowering your workforce with cutting-edge tools and systems.</li>
</ul>
</div>

<div>
<p>
<h1 className='text-xl font-bold text-center text-blue-950 my-10'> Why Choose Us?</h1>
<ul className='list-disc list-inside mb-3'>
<li>
<b>
Expertise:</b> Our team consists of experienced professionals who are well-versed in the latest technologies and industry best practices.
</li>
<li>
<b>
Tailored Solutions:</b> We understand that every business is unique, which is why we offer customized solutions to meet your specific requirements and budget.
</li>
<li>
<b>
Reliability: </b> Our systems are built to be reliable and efficient, providing you with top-notch performance and peace of mind.
</li>
</ul>

<b>"<i>Take the First Step Towards Enhanced Security and Efficiency"</i></b>  <br/>Don't wait any longer to upgrade your security and office technology solutions. 
Contact us today to schedule a consultation and learn more about how our services can benefit your business. 
Take the first step towards a more secure and technologically advanced future - inquire today!

        </p>
      </div>
      </div>
    </div>
  )
}

export default Installations