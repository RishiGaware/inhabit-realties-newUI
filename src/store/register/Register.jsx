import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Image,
  VStack,
  InputGroup,
  InputLeftElement,
  Icon,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('var(--lightDarkText)', 'white');
  const primaryColor = useColorModeValue('var(--lightPrimary)', 'blue.400');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Add your registration logic here
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
    }
  };

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
          <Stack spacing="6" align="center">
            <Image
              src="/logo.png"
              alt="Estatery Logo"
              boxSize="80px"
              objectFit="contain"
            />
            <Stack spacing="3" textAlign="center">
              <Heading size="lg" color={textColor}>Create your account</Heading>
              <Text color="gray.600">
                Already have an account?{' '}
                <Link to="/login">
                  <Text as="span" color={primaryColor} fontWeight="bold">
                    Sign in
                  </Text>
                </Link>
              </Text>
            </Stack>
          </Stack>

          <Box
            py={{ base: '8', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={bgColor}
            boxShadow={{ base: 'none', sm: '2xl' }}
            borderRadius={{ base: 'none', sm: 'xl' }}
            border="1px solid"
            borderColor="gray.200"
            mb="8"
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing="6">
                <Stack spacing="5">
                  <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor="name" color={textColor}>Full Name</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <Icon as={FaUser} color="gray.400" />
                      </InputLeftElement>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        size="lg"
                        border="1px solid"
                        borderColor={errors.name ? 'red.500' : 'gray.300'}
                        _focus={{
                          borderColor: primaryColor,
                          boxShadow: `0 0 0 1px ${primaryColor}`,
                        }}
                      />
                    </InputGroup>
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.email}>
                    <FormLabel htmlFor="email" color={textColor}>Email</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <Icon as={FaEnvelope} color="gray.400" />
                      </InputLeftElement>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        size="lg"
                        border="1px solid"
                        borderColor={errors.email ? 'red.500' : 'gray.300'}
                        _focus={{
                          borderColor: primaryColor,
                          boxShadow: `0 0 0 1px ${primaryColor}`,
                        }}
                      />
                    </InputGroup>
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.password}>
                    <FormLabel htmlFor="password" color={textColor}>Password</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <Icon as={FaLock} color="gray.400" />
                      </InputLeftElement>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        size="lg"
                        border="1px solid"
                        borderColor={errors.password ? 'red.500' : 'gray.300'}
                        _focus={{
                          borderColor: primaryColor,
                          boxShadow: `0 0 0 1px ${primaryColor}`,
                        }}
                      />
                    </InputGroup>
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={errors.confirmPassword}>
                    <FormLabel htmlFor="confirmPassword" color={textColor}>Confirm Password</FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <Icon as={FaLock} color="gray.400" />
                      </InputLeftElement>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        size="lg"
                        border="1px solid"
                        borderColor={errors.confirmPassword ? 'red.500' : 'gray.300'}
                        _focus={{
                          borderColor: primaryColor,
                          boxShadow: `0 0 0 1px ${primaryColor}`,
                        }}
                      />
                    </InputGroup>
                    <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                  </FormControl>
                </Stack>

                <Button
                  type="submit"
                  size="lg"
                  bg={primaryColor}
                  color="white"
                  border="2px solid"
                  borderColor={primaryColor}
                  _hover={{
                    bg: 'var(--brandPrimary)',
                    borderColor: 'var(--brandPrimary)',
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  _active={{
                    bg: 'var(--brandPrimary)',
                    borderColor: 'var(--brandPrimary)',
                    transform: 'translateY(0)',
                  }}
                  isLoading={isSubmitting}
                  transition="all 0.2s"
                >
                  Create Account
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Register; 