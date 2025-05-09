import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./index.css";

const Section = ({ id, title, children, bgColor }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [controls, inView]);

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`${bgColor} min-h-screen p-10 transition-all duration-700`}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <motion.h2 className="text-3xl font-bold mb-4" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        {title}
      </motion.h2>
      <motion.div transition={{ delay: 0.3 }}>{children}</motion.div>
    </motion.section>
  );
};

const SchmeitraWebsite = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-100">
      <header className="bg-green-800 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
        <h1 className="text-xl font-bold">Schmeitra Green Technologies</h1>
        <nav className="space-x-4 hidden md:flex">
          {["about", "services", "products", "projects", "contact"].map((id) => (
            <a href={`#${id}`} key={id} className="hover:underline capitalize">
              {id}
            </a>
          ))}
        </nav>
      </header>

      <motion.section
        className="bg-cover bg-center text-white text-center p-24 flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('hero-image.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="text-4xl font-bold mb-4" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
          Reliable Suppliers of Industrial Hardware
        </motion.h1>
        <motion.p className="mb-6" initial={{ x: -50 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          Your trusted engineering service partner in Zambia
        </motion.p>
        <motion.button
          className="bg-white text-green-800 px-6 py-2 rounded font-semibold shadow-lg"
          whileHover={{ scale: 1.05 }}
          onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
        >
          Request a Quote
        </motion.button>
      </motion.section>

      <Section id="about" title="About Us" bgColor="bg-white">
        <p>Schmeitra Green Technologies Ltd is a Zambian registered engineering firm offering top-tier supply and consultancy services across industries.</p>
      </Section>

      <Section id="services" title="Our Services" bgColor="bg-gray-50">
        <ul className="list-disc list-inside space-y-2">
          <li>Engineering consultancy</li>
          <li>Industrial hardware supply</li>
          <li>Equipment maintenance and support</li>
        </ul>
      </Section>

      <Section id="products" title="Our Products" bgColor="bg-white">
        <p>We offer a wide range of industrial tools, electrical equipment, and mechanical components tailored to client specifications.</p>
      </Section>

      <Section id="projects" title="Projects" bgColor="bg-gray-50">
        <p>Explore successful projects across mining, construction, and agriculture sectors that demonstrate our capabilities.</p>
      </Section>

      <Section id="contact" title="Contact Us" bgColor="bg-white">
        <p><strong>Address:</strong> Plot 3109 Sianjalika Road, Woodlands, Lusaka, Zambia</p>
        <p><strong>Phone:</strong> +260 770 284042</p>
        <p><strong>Email:</strong> schmeitragreen@gmail.com</p>
      </Section>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 Schmeitra Green Technologies Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SchmeitraWebsite;
