import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      {/* Animated Heading */}
      <motion.h1 
        className="text-4xl font-bold text-center text-blue-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Our Blog Platform
      </motion.h1>
      
      {/* Description Section */}
      <p className="text-lg text-gray-700 text-center mb-6">
        Welcome to our **Technology Blog** – a place where technology enthusiasts can 
        **share their opinions, experiences, and insights** about various tech trends.
      </p>
      
      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Feature Card */}
        <motion.div 
          className="p-5 bg-white shadow-md rounded-lg border-l-4 border-blue-500"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold text-blue-700">Share Your Knowledge</h2>
          <p className="text-gray-600">Post blogs about the latest technology trends, software development, AI, and more.</p>
        </motion.div>
        
        <motion.div 
          className="p-5 bg-white shadow-md rounded-lg border-l-4 border-green-500"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold text-green-700">Full Control Over Blogs</h2>
          <p className="text-gray-600">Users can edit, update, or delete their blogs at any time.</p>
        </motion.div>
        
        <motion.div 
          className="p-5 bg-white shadow-md rounded-lg border-l-4 border-purple-500"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold text-purple-700">Community Driven</h2>
          <p className="text-gray-600">Engage with other tech enthusiasts by commenting and discussing blog posts.</p>
        </motion.div>
        
        <motion.div 
          className="p-5 bg-white shadow-md rounded-lg border-l-4 border-red-500"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-semibold text-red-700">Stay Updated</h2>
          <p className="text-gray-600">Get insights on the latest tech innovations and industry trends.</p>
        </motion.div>
      </div>
      
      {/* Call to Action */}
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg text-gray-700">Join our community and start sharing your tech stories today!</p>
        <NavLink to='/add_blog'>
            
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
          Start Writing
        </button>
        </NavLink>
      </motion.div>
    </div>
  );
};

export default About;
