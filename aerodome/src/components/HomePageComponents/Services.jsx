import SubHeading from "../TextComponents/SubHeading";
import Heading from "../TextComponents/Heading";
import NormalText from "../TextComponents/NormalText";
import Button from "../Button/Button";
import Service from "./Service";
import droneImg from "../../assets/image 14.png";
import S1 from "../../assets/assured.png";
import S2 from "../../assets/dynamic.png";
import S3 from "../../assets/precision.png";
import { motion } from "framer-motion";
function Services() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id="service" className="flex flex-col md:flex-row items-center w-full">
      <div className="w-full md:w-1/3 flex flex-col gap-2 items-center md:items-start">
        <SubHeading txt={"Services"} textColor={"blue"} textCase={true} />
        <Heading
          txt={"Drone Light Shows"}
          textStyle={"text-center md:text-left"}
        />
        <NormalText
          txt={
            "A spectacular display of LED-equipped drones transforming the night sky into a canvas of breathtaking visuals - think fireworks, but smarter, brighter, and way more fun!"
          }
          txtStyle={"text-white/60 text-center md:text-left"}
        />

        <motion.div
          initial="hidden"
          variants={fadeIn}
          whileInView={"visible"}
          className="mt-5 mb-8 md:mb-0"
        >
          <Button txt={"Get Quotations"} link={"/contact-us"} />
        </motion.div>
      </div>
      <div className="w-full md:w-1/3 flex justify-center items-center  mb-8 md:mb-0">
        <img src={droneImg} alt="drone image" className="w-4/5" />/
      </div>
      <div className="w-full md:w-1/3 flex flex-col gap-5">
        <Service
          Headtxt="Highly Reliable Shows"
          txt="Through multiple safety layers, AeroDome’s system is completely fail-safe."
          img={S1}
          style={"md:mr-16"}
          orderOne={"order-2 md:order-1"}
          orderTwo={"order-1 md:order-2"}
        />
        <Service
          Headtxt="Dynamic Visualisation"
          txt="Integrating motion dynamics and 3D visualization for an immersive experience."
          img={S2}
          style={""}
          orderOne={"order-2 md:order-1"}
          orderTwo={"order-1 md:order-2"}
        />
        <Service
          Headtxt="Precise Picturisation"
          txt="Cutting-Edge GNSS technology for real-life high-quality visualization."
          img={S3}
          style={"md:mr-16"}
          orderOne={"order-2 md:order-1"}
          orderTwo={"order-1 md:order-2"}
        />
      </div>
    </div>
  );
}

export default Services;
