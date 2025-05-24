import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaHome, FaSearch, FaHandshake, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: FaHome,
    title: "Wide Range of Properties",
    description: "Browse through thousands of verified properties across different locations and price ranges."
  },
  {
    icon: FaSearch,
    title: "Smart Search",
    description: "Find your perfect home with our advanced search filters and location-based recommendations."
  },
  {
    icon: FaHandshake,
    title: "Trusted Partners",
    description: "Work with verified real estate agents and property owners for a secure transaction."
  },
  {
    icon: FaChartLine,
    title: "Market Insights",
    description: "Get real-time market trends and property value insights to make informed decisions."
  }
];

const Features = () => {
  const bgColor = useColorModeValue("var(--lightBackground)", "gray.800");
  const cardBg = useColorModeValue("var(--lightCardBackground)", "gray.700");
  const textColor = useColorModeValue("var(--lightDarkText)", "white");
  const primaryColor = useColorModeValue("var(--lightPrimary)", "blue.400");

  return (
    <Box w="100vw" position="relative" left="50%" right="50%" marginLeft="-50vw" marginRight="-50vw" bg={bgColor}>
      <Container maxW="container.lg" px="6" py="16">
        <VStack spacing={12} align="stretch">
          <VStack spacing={4} textAlign="center">
            <Heading color={textColor} fontSize={{ base: "2xl", md: "4xl" }}>
              Our Features
            </Heading>
            <Text color={textColor} fontSize={{ base: "md", md: "lg" }} maxW="2xl">
              Discover why thousands of people trust us for their real estate needs
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {features.map((feature, index) => (
              <Box
                key={index}
                bg={cardBg}
                p={8}
                borderRadius="xl"
                boxShadow="md"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "lg",
                }}
              >
                <VStack spacing={4} align="start">
                  <Icon
                    as={feature.icon}
                    w={10}
                    h={10}
                    color={primaryColor}
                  />
                  <Heading size="md" color={textColor}>
                    {feature.title}
                  </Heading>
                  <Text color={textColor} fontSize="sm">
                    {feature.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Features; 