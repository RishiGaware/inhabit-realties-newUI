import { Flex, Heading, Button, HStack, chakra, ButtonGroup, useBreakpointValue, Divider } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import NavMobile from './NavMobile';

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <chakra.header id="header" borderBottom='1px solid rgb(0,0,0,0.3)'>
      <Flex w='100%' py='5' px={{ base: '4', md: '8', lg: '16' }} align='center' justify='space-between'>
        <Link to='/'>
          <Heading fontSize='3xl' color='pink.700'>Estatery.</Heading>
        </Link>
        {
          isDesktop ? (
          <>
            <ButtonGroup as='nav' variant='link' spacing='5'>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  fontSize='16px'
                  as={Link}
                  to={item.path}
                  color={location.pathname === item.path ? 'var(--lightPrimary)' : 'var(--lightDarkText)'}
                  _hover={{ color: 'var(--brandPrimary)' }}
                >
                  {item.name}
                </Button>
              ))}
            </ButtonGroup>

            <HStack spacing={4}>
              <Link to="/contact">
                <Button
                  size='sm'
                  variant='outline'
                  borderColor='var(--lightPrimary)'
                  color='var(--lightPrimary)'
                  _hover={{ bg: 'var(--lightPrimary)', color: 'white' }}
                >
                  Contact Us
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  size='sm'
                  variant='outline'
                  borderColor='var(--lightPrimary)'
                  color='var(--lightPrimary)'
                  _hover={{ bg: 'var(--lightPrimary)', color: 'white' }}
                >
                  Sign up
                </Button>
              </Link>
            </HStack>
          </>
          ) : (
            <NavMobile />
          )
        }
      </Flex>
      {/* <Divider color='pink.800' w={}='20px' />  */}
    </chakra.header>
  )
}

export default Header