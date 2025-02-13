import { motion } from "framer-motion";
// import "./LandingPage.css"; // Import external CSS

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="content-wrapper">
        {/* Hero Section */}
        <motion.div
          className="hero-section"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Recipe Builder 🤦‍♂</h1>
          <p>
          A quirky full-stack website where users can create, view, and share their most bizarre,best and unconventional recipes. Each user has a unique list of recipes that they can build using random ingredients, humorous steps, and creative descriptions.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="features-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <FeatureCard
            icon="😋"
            title="Yummy Dish"
            description="Read the recipe and enjoy the dish after making it ."
          />
          <FeatureCard
            icon="📝"
            title="Contribute"
            description="Add your own  unique recipes to the collection."
          />
          <FeatureCard
            icon="🔥"
            title="Vote & React"
            description="Like, dislike, and rate the best/unique recipes."
          />
        </motion.div>

        {/* Call-to-Action Button */}
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started 🚀
        </motion.button>
      </div>

      {/* Footer */}
      <motion.p
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      >
        {/* Made with ❤ by Cringe Enthusiasts */}
      </motion.p>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="feature-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default LandingPage;
