import React from "react";
import FCMB from "../assets/FCMB.png";
import UBA from "../assets/UBA.png";
import OANDO from "../assets/OANDO.png";
import OES from "../assets/OES.png";
import NNPC from "../assets/NNPC.png";
import NLPCPFA from "../assets/NLPCPFA.png";
import { Carousel } from "react-responsive-carousel";

const Homepage = () => {


  return (
    <>
      <Carousel
        autoPlay
        interval={2500}
        infiniteLoop
        stopOnHover={false}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        className="relative z-10"
      >
        <div className="text-end">
          <img src="./src/assets/network cable1.jpg" alt="Slide 1" />
          <p className="absolute bottom-20 left-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded">
            Automate, secure, and thrive with cutting-edge office tech.
          </p>
        </div>
        <div className="text-center">
          <img src="./src/assets/network cable2.jpg" alt="Slide 2" />
          <p className="absolute bottom-20 left-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded">
            Transform your office, Seamless security, effortless automation.
          </p>
        </div>
        <div className="relative text-start">
          <img src="./src/assets/network cable3.jpg" alt="Slide 3" />
          <p className="absolute bottom-20 left-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded">
            Connecting safety and efficiency in every byte.
          </p>
        </div>
        <div className="relative text-start">
          <img src="./src/assets/network cable4.jpg" alt="Slide 4" />
          {/* <p className="absolute bottom-20 left-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded">
            Connecting safety and efficiency in every byte.
          </p> */}
        </div>
        <div className="relative text-start">
          <img src="./src/assets/network cable5.jpg" alt="Slide 5" />
          {/* <p className="absolute bottom-20 left-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded">
            Connecting safety and efficiency in every byte.
          </p> */}
        </div>
      </Carousel>

      <main>
        <div className="m-8">
          <h1 className="mt-2 text-4xl font-bold text-center text-blue-950">About us</h1>
        </div>
        <div className="border rounded-xl text-black drop-shadow-xl border-r-orange-700 border-l-blue-950 border-b-blue-950 border-t-orange-700 mx-10 px-5 pt-10">
        <Carousel
        infiniteLoop
        >
        <div className="flex flex-col space-y-5 pb-10 text-blue-950">
          <b className="mt-2 text-2xl font-bold text-center"> Securing Lagos for Over Two Decades</b>
          <br />
          <p className="text-base text-justify">
            In the bustling heart of Lagos, Nigeria, a vision for a safer, more
            connected city took root over 20 years ago. This vision gave birth
            to Afcomm Technology, a company that has since become synonymous
            with cutting-edge security and communication solutions in West
            Africa's largest metropolis.
          </p>
        </div>
        <div className="flex flex-col space-y-5 pb-10 text-blue-950">
          <b className="mt-2 text-2xl font-bold text-center">Our Humble Beginnings</b>
          <br />
          <p className="text-base text-justify">
          Founded in the early 2000s by a group of passionate engineers and
          security experts, Afcomm Technology started as a small shop in the
          vibrant streets of Lagos. Our founders recognized the growing need for
          reliable security systems in both residential and commercial spaces as
          the city expanded rapidly.
          </p>
        </div>
        <div className="flex flex-col space-y-5 pb-10 text-blue-950">
          <b className="mt-2 text-2xl font-bold text-center">Growth Through Innovation</b>
          <br />
          <p className="text-base text-justify">
          What set Afcomm apart from the beginning was our commitment to staying
          ahead of technological advancements. We weren't content with just
          selling products; we wanted to provide integrated solutions that would
          truly make a difference in people's lives and businesses. As we grew,
          so did our expertise. From our initial focus on intercom systems, we
          expanded our services to include:
          </p>
          <ul className="text-justify">
            <li>- State-of-the-art CCTV installations</li>
            <li>- Advanced access control systems</li>
            <li>- Life-saving fire alarm setups</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-5 pb-10 text-blue-950">
          <b className="mt-2 text-2xl font-bold text-center"> Building Trust, One Installation at a Time</b>
          <br />
          <p className="text-base text-justify">
          Our reputation grew not just through our sales, but through our
          dedication to quality installations and prompt repairs. We understood
          that in the world of security, every second counts. This philosophy
          led us to build a team of highly trained technicians who could respond
          swiftly to our clients' needs.
          </p>
        </div>
        <div className="flex flex-col space-y-5 pb-10 text-blue-950">
          <b className="mt-2 text-2xl font-bold text-center">Adapting to Lagos' Unique Challenges</b> 
          <br/>
          <p className="text-base text-justify">
          Operating in Lagos presented unique challenges – from the humid
          climate affecting electronic equipment to the city's complex urban
          layout. We took these challenges head-on, developing customized
          solutions that could withstand the test of time and environment.
          </p>
        </div>
        <div className="flex flex-col space-y-5 pb-10 text-blue-950">
         <b className="mt-2 text-2xl font-bold text-center">Empowering Local Businesses and Communities</b>
          <br />
          <p className="text-base text-justify">
          As we expanded, we never lost sight of our roots. Afcomm has always
          been more than just a business; we're a part of the Lagos community.
          We've partnered with local businesses, supported community
          initiatives, and contributed to the city's growth by providing
          employment and training opportunities.
          </p>
        </div>
          <div className="flex flex-col space-y-5 pb-10 text-blue-950">
          <b className="mt-2 text-2xl font-bold text-center">Looking to the Future</b>
          <br/>
          <p className="text-base text-justify">
          Today, Afcomm Technology stands tall as a leader in Lagos' security
          and communication sector. Our systems protect some of the city's most
          critical infrastructure, busiest shopping malls, and thousands of
          homes. As we look to the future, we remain committed to our founding
          principles: innovation, reliability, and community. We're not just
          installing systems; we're helping build a safer, more connected Lagos
          for generations to come. From our humble beginnings to becoming Lagos'
          trusted name in security technology, Afcomm's story is one of
          perseverance, innovation, and unwavering commitment to our city's
          safety. As we continue to grow, we invite you to be part of our
          journey in making Lagos a model for urban security and communication
          in Africa.
          </p>
        </div>
      </Carousel>
      </div>
        <div className="pt-20 mb-96">
        <h1 className="font-bold text-4xl text-center text-blue-950"> Our clients</h1>
          <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          stopOnHover={false}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          className="flex justify-center items-center"
          >
            <div className="flex justify-center items-center w-full">
              <div className="p-10 w-52 h-52 mb-5">
            <img src={FCMB} width={100} height={100} />
              </div>
           </div>
           <div className="flex justify-center items-center w-full">
           <div className="w-52 h-52 mb-5">          
            <img src={UBA} width={100} height={100}/>
           </div>
           </div>
           <div className="flex justify-center items-center w-full">
           <div className="w-52 h-52 pb-3 mb-5">          
            <img src={OANDO} width={100} height={100}/>
           </div>
           </div>
           <div className="flex justify-center items-center w-full">
           <div className="w-52 h-52 pt-10 mb-5">         
             <img src={OES} width={100} height={100}/>
           </div>
           </div>
           <div className="flex justify-center items-center w-full">
           <div className="p-5 w-52 h-52 pt-10 mb-5">         
             <img src={NNPC} width={100} height={100}/>
           </div>
           </div>
           <div className="flex justify-center items-center w-full">
           <div className="p-1 w-52 h-52 pt-10 mb-5">         
             <img src={NLPCPFA} width={100} height={100}/>
           </div>
           </div>
         </Carousel>
      </div>
      </main>
    </>
  );
};

export default Homepage;
