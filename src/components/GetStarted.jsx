import { Box, Button, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      py={8}
      position="relative"
      overflow="hidden"
    >
      {/* Animated background elements */}
      <MotionBox
        position="absolute"
        top="50%"
        left="10%"
        w="100px"
        h="100px"
        borderRadius="full"
        bg="brand.primary"
        opacity="0.1"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <MotionBox
        position="absolute"
        top="30%"
        right="15%"
        w="150px"
        h="150px"
        borderRadius="full"
        bg="brand.secondary"
        opacity="0.1"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Main button */}
      <MotionBox
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animation={`${floatAnimation} 3s ease-in-out infinite`}
      >
        <Button
          size="lg"
          px={12}
          py={7}
          fontWeight="bold"
          fontSize="2xl"
          bgGradient="linear(to-r, brand.primary, brand.secondary)"
          color="white"
          boxShadow="2xl"
          borderRadius="full"
          _hover={{
            bgGradient: "linear(to-r, brand.secondary, brand.primary)",
            transform: "scale(1.07)",
            boxShadow: "3xl",
            _before: {
              left: "100%"
            }
          }}
          _active={{
            transform: "scale(0.98)"
          }}
          transition="all 0.3s"
          onClick={() => navigate('/login')}
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            transition: "0.5s"
          }}
        >
          Get Started
        </Button>
      </MotionBox>
    </Box>
  );
};

export default GetStarted; 