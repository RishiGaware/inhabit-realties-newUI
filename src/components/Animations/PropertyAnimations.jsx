import { Box, SimpleGrid, Icon, Text, VStack, keyframes, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaHome, FaChartLine, FaHandshake, FaSearch } from "react-icons/fa";
import { MdSecurity, MdLocationOn } from "react-icons/md";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const bounceAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-30px) scale(1.1); }
`;

const fadeInOut = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.6 } }
};

const PropertyAnimations = () => {
  const navigate = useNavigate();
  const animationItems = [
    {
      icon: FaHome,
      text: "Find Your Dream Home",
      delay: 0.2,
      bounce: true
    },
    {
      icon: FaChartLine,
      text: "Market Analysis",
      delay: 0.4
    },
    {
      icon: FaHandshake,
      text: "Trusted Partners",
      delay: 0.6
    },
    {
      icon: FaSearch,
      text: "Smart Search",
      delay: 0.8
    },
    {
      icon: MdSecurity,
      text: "Secure Transactions",
      delay: 1.0
    },
    {
      icon: MdLocationOn,
      text: "Prime Locations",
      delay: 1.2
    }
  ];

  // Popup badge state
  const [showBadge, setShowBadge] = useState(false);
  useEffect(() => {
    setShowBadge(true);
    const timer = setTimeout(() => setShowBadge(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box py={10} px={4} position="relative">
      {/* Floating Badge Popup */}
      <motion.div
        style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}
        variants={fadeInOut}
        initial="initial"
        animate={showBadge ? "animate" : "exit"}
      >
        <Box
          px={6}
          py={2}
          bg="brand.primary"
          color="white"
          borderRadius="full"
          fontWeight="bold"
          boxShadow="lg"
          fontSize="md"
        >
          New Listing Alert!
        </Box>
      </motion.div>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={8}>
        {animationItems.map((item, index) => (
          <MotionBox
            key={index}
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { delay: item.delay } }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <VStack
              spacing={4}
              p={6}
              bg="light.cardBackground"
              borderRadius="xl"
              boxShadow="lg"
              _hover={{
                boxShadow: "2xl",
                transform: "translateY(-5px)",
                transition: "all 0.3s ease"
              }}
            >
              <Box
                animation={item.bounce ? `${bounceAnimation} 1.2s infinite` : `${floatAnimation} 2.2s ease-in-out infinite`}
                animationDelay={`${index * 0.2}s`}
              >
                <Icon
                  as={item.icon}
                  w={8}
                  h={8}
                  color="brand.primary"
                />
              </Box>
              <Text
                fontSize="sm"
                fontWeight="medium"
                color="light.darkText"
                textAlign="center"
              >
                {item.text}
              </Text>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>

      {/* Get Started Button */}
      {/* <Box display="flex" justifyContent="center" mt={10}>
        <Button
          size="lg"
          px={10}
          py={6}
          fontWeight="bold"
          fontSize="xl"
          bgGradient="linear(to-r, brand.primary, brand.secondary)"
          color="white"
          boxShadow="2xl"
          borderRadius="full"
          _hover={{
            bgGradient: "linear(to-r, brand.secondary, brand.primary)",
            transform: "scale(1.07)",
            boxShadow: "3xl"
          }}
          _active={{
            transform: "scale(0.98)"
          }}
          transition="all 0.2s"
          onClick={() => navigate('/login')}
        >
          Get Started
        </Button>
      </Box> */}

      {/* Floating House Animation */}
      {/* <Box position="relative" h="200px" mt={10} overflow="hidden">
        <MotionBox
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <Icon
            as={FaHome}
            w={20}
            h={20}
            color="brand.primary"
            filter="drop-shadow(0 0 10px rgba(0,0,0,0.2))"
          />
        </MotionBox>
      </Box> */}
    </Box>
  );
};

export default PropertyAnimations; 