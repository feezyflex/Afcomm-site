import React from "react";
import { Carousel } from "react-responsive-carousel";
import CITYMAX from "../assets/CITYMAX.png";
import HIKVISION from "../assets/HIKVISION.png";
import CISCO from "../assets/CISCO.png";
import SYSTIMAX from "../assets/SYSTIMAX.png";
import PANASONIC from "../assets/PANASONIC.png";
import DELL from "../assets/DELL.png";
import HP from "../assets/HP.png";
import DLINK from "../assets/DLINK.png";
import MICROSOFT from "../assets/MICROSOFT.png";
import MAC from "../assets/MAC.png";
import WD from "../assets/WD.png";
import LENOVO from "../assets/LENOVO.png";
import LOGITECH from "../assets/LOGITECH.png";
import SEAGATE from "../assets/SEAGATE.png";
import UBIQUITI from "../assets/UBIQUITI.png";
import CCTV from "./src/assets/install1.jpg";
import FIRE_ALARM from "./src/assets/FIRE ALARM SYSTEMS.png";
import ACCESS_CONTROL from "./src/assets/ACCESS CONTROL SYSTEMS.png";
import INTERCOM from "./src/assets/INTERCOMM SYSTEMS.png";
import NDA from "./src/assets/NETWORK DEVICES AND ACCESSORIES.png";
import ECS from "./src/assets/ELV CABLE SOLUTIONS.png";
import CDA from "./src/assets/COMPUTER DEVICES AND ACCESSORIES.png";

const products = [
  {
    id: 1,
    name: "CCTV Systems & Accessories",
    description:
      "CCTV (Closed-Circuit Television) systems and accessories are security products designed to monitor and record activities in both residential and commercial settings. These systems are essential for deterrence, surveillance, and evidence collection in case of incidents. These items collectively ensure the effectiveness and functionality of a CCTV system in providing security and surveillance capabilities.",
    price: [
      "- Dome cameras",
      "- Bullet cameras",
      "- PTZ cameras",
      "- Covert cameras",
      "- Digital Video Recorders (DVR)",
      "- Network Video Recorders (NVR)",
      "- Coaxial Cables",
      "- BNC Connectors",
      "- Monitor",
      "- Power Supply Component",
      "- Hard Drive",
      "- Mounting Hardwares",
      "- Junction boxes",
      "- Camera housings",
      "- Infrared illuminators",
      "- Weatherproof enclosures",
    ],
    image: [CCTV], // Replace with actual image path
  },
  {
    id: 2,
    name: "Fire Alarm Systems & Accessories",
    description: "Fire alarm systems and accessories are critical components for detecting and alerting individuals to the presence of a fire in a building. These systems are designed to ensure early detection, warning, and evacuation in the event of a fire emergency. By combining these elements, fire alarm systems and accessories play a crucial role in ensuring the safety of occupants and minimizing damage in the event of a fire.",
    price: [
      "- Smoke detectors",
      "- Heat detectors",
      "- Sounders",
      "- Pull stations",
      "- Fire Alarm Control Panel (FACP)",
      "- Fire Alarm Cables",
      '- Manual Call Points',
      "- Mounting hardwares",
      "- Junction boxes",
      '- Battery Backup',
      '- Remote Monitoring Devices'

    ],
    image: [FIRE_ALARM],
  },
  {
    id: 3,
    name: "Access control Systems & Accessories",
    description: "Access control systems and accessories are designed to regulate and manage the entry and exit of individuals into secured areas. These systems provide security, monitor entry points, and track the movements of authorized personnel within a building or facility. By combining these components, access control systems provide a secure and efficient means of managing access to restricted areas within a facility.",
    price: [
      "- Card readers",
      "- Keyless entry systems",
      "- Biometric authentication devices",
      "- Access control panels",
      "- Door controllers",
      "- Door Position Sensors",
      "- Door sensors",
      "- Exit Devices",
      "- Electronic Locks",
      "- Access Control Cards/Key Fobs",
      "- Intercom/Video Entry Systems",
      "- Keypads",
      "- Mounting hardwares",
      "- Junction boxes",
      "- Power supply components",
      "- Alarm systems",
    ],
    image: [ACCESS_CONTROL],
  },
  {
    id: 4,
    name: "Intercomm Systems & Accessories",
    description: "Intercom systems and accessories are communication devices used to facilitate two-way audio or video communication within a building or a specific area. These systems enhance security, convenience, and efficiency in various settings, including residential buildings, commercial spaces, and healthcare facilities. Intercom systems and accessories play a vital role in enhancing communication, security, and access control in residential and commercial settings, providing users with a convenient and effective way to communicate with each other and manage entry into a premises.",
    price: [
      "- Intercom panels",
      "- Telephone Consoles",
      "- Indoor Intercom Stations",
      "- Outdoor Intercom Stations",
      "- Intercom speakers",
      "- Intercom microphones",
      "- Intercom cables",
      "- Mounting hardwares",
      "- Intercomm junction boxes",
      "- Modular Sockets", 
      "- Modular Faceplates",
      "- Power supply components",
      "- Alarm systems",
    ],
    image: [INTERCOM],
  },
  {
    id: 5,
    name: "Networking Devices & Accessories",
    description: "Networking devices and accessories are essential components for establishing and maintaining network connections, enabling devices to communicate and share data within a network infrastructure. These products facilitate internet access, data transfer, and communication between various devices. These devices and accessories work together to create and maintain efficient and reliable network connections, facilitating smooth communication and data sharing within organizations and households.",
    price: [
      "- Switches",
      "- Routers",
      "- Ethernet Cables",
      "- Network adapters",
      "- Network racks",
      "- Network hubs",
      "- Network Interface Card (NIC)",
      "- Patch Panels",
      "- Network Power Supplies",
      "- Network Security Devices",
      "- Power over Ethernet (PoE) Injectors",
      "- Network Test Equipment",
      

    ],
    image: [NDA],
  },
  {
    id: 6,
    name: "ELV Cable Solutions",
    description: "Extra Low Voltage (ELV) cable solutions encompass a wide range of cables and accessories designed for low-power and low-voltage applications. These products are used in various industries, including telecommunications, security, automation, and audio-visual systems. ELV cable solutions are crucial for establishing reliable and efficient connections across various low-voltage applications, contributing to seamless communication, security, and automation within different environments.",
    price: [
      "- Structured Cabling Systems",
      "- Fiber Optic Cables",
      "- Coaxial Cables",
      "- Control Cables",
      "- Audio-Video Cables",
      "- Security and Surveillance Cables",
      "- Data and Communication Cables",
    ],
    image: [ECS],
  },
  {
    id: 7,
    name: "Computers Devices & Accessories",
    description: "Computer devices and accessories encompass a wide range of hardware components and peripherals designed to enhance the functionality and performance of computers. These products enable users to customize their computing experience, improve productivity, and expand the capabilities of their systems. Computer devices and accessories play a critical role in enhancing user experience, productivity, and the overall utility of computing systems, offering users a diverse range of options to customize and optimize their computing environment.",
    price: [
      "- Desktop Computers",
      "- Laptops",
      "- Tablets",
      "- Computer Monitors",
      "- Keyboards",
      "- Computer Mice",
      "- External Storage Drives",
      "- Printers",
      "- Laptop Stands", 
      "- Track Pads",
      "- Webcams",
      "- Speakers",
      "- Headsets",
      "- Docking Stations",
      "- Computer Mouse",
      "- Smartphones",
      "- Computer Peripherals",
      "- Computer Accessories",
      "- Computer Security Devices",
    ],
    image: [CDA],
  },
];

const Products = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-20 p-6 pb-6 mt-24 lg:relative z-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-200 lg:flex lg:place-items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="lg:w-52 object-cover rounded-md mb- mr-10"
            />
            <div className="flex flex-col">
              <h2 className="lg:text-2xl sm:text-xl font-bold mb-2 text-blue-950">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-2 text-justify">{product.description}</p>
              <div className="text-base/6">
                {Array.isArray(product.price) ? (
                  <ul>
                    {product.price.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{product.price}</p>
                )}
              </div>{" "}
            </div>
          </div>
        ))}
      </div>
      <div className="pt-20">
        <h1 className="font-bold text-3xl text-center text-blue-950">
          {" "}
          Brands & Partners
        </h1>
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
            <div className="w-60 h-60 my-10">
              <img src={CITYMAX} width={100} height={100} />
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="w-60 h-60 mb-5 my-10">
              <img src={HIKVISION} width={100} height={100} />
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="w-40 h-40">
              <img src={CISCO} width={100} height={100} />
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="w-48 h-48 my-14">
              <img src={SYSTIMAX} width={100} height={100} />
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="w-60 h-60 my-10">
              <img src={PANASONIC} width={100} height={100} />
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="w-52 h-52 my-10">
              <img src={DLINK} width={100} height={100} />
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="w-80 h-80 my-5">
              <img src={HP} width={100} height={100} />
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="w-36 h-36 my-10">
              <img src={DELL} width={100} height={100} />
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="w-52 h-52 my-10">
              <img src={MICROSOFT} width={100} height={100} />
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
   <div className="p-5 w-52 h-52 pt-16 mb-5">         
     <img src={LOGITECH} width={100} height={100}/>
   </div>
   </div>
          <div className="flex justify-center items-center w-full">
   <div className="p-5 w-52 h-52 pt-10 mb-5">         
     <img src={SEAGATE} width={100} height={100}/>
   </div>
   </div>
          <div className="flex justify-center items-center w-full">
   <div className="p-5 w-52 h-52 pt-16 mb-5">         
     <img src={UBIQUITI} width={100} height={100}/>
   </div>
   </div>
          <div className="flex justify-center items-center w-full">
   <div className="p-5 w-52 h-52 pt-10 mb-5">         
     <img src={LENOVO} width={100} height={100}/>
   </div>
   </div>
          <div className="flex justify-center items-center w-full">
   <div className="w-44 h-44">         
     <img src={MAC} width={100} height={100}/>
   </div>
   </div>
          <div className="flex justify-center items-center w-full">
   <div className="w-60 h-60 pt-10 mb-5">         
     <img src={WD} width={100} height={100}/>
   </div>
   </div>
          {/*<div className="flex justify-center items-center w-full">
   <div className="p-5 w-52 h-52 pt-10 mb-5">         
     <img src={NNPC} width={100} height={100}/>
   </div>
   </div>
   <div className="flex justify-center items-center w-full">
   <div className="p-1 w-52 h-52 pt-10 mb-5">         
     <img src={NLPCPFA} width={100} height={100}/>
   </div>
   </div> */}
        </Carousel>
      </div>
    </>
  );
};

export default Products;
