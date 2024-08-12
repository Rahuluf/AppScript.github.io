import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, Flex, Box, IconButton, Collapse, VStack, Image } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const links = [
    { to: "/", label: "Shop" },
    { to: "/skills", label: "Skills" },
    { to: "/stories", label: "Stories" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <Box position="fixed" top={0} left={0} width="100%" zIndex={1000}>
            {/* Navbar Container */}
            <Box
                p={2}
                boxShadow="md"
                backgroundColor="white"
            >
                <Flex
                    align="center"
                    justify="space-between"
                    wrap="wrap"
                >
                   
                    <Flex align="center">
                        <Box>
                            <Image
                                src="https://banner2.cleanpng.com/20180625/czz/kisspng-react-computer-icons-redux-javascript-5b30e9690ee2c2.325839961529932137061.jpg"
                                alt="Logo Image"
                                boxSize="40px" 
                                mr={2} 
                            />
                        </Box>
                        <IconButton
                            icon={<FontAwesomeIcon icon={isOpen ? faTimes : faBars} />}
                            aria-label="Toggle Menu"
                            onClick={toggleMenu}
                            display={{ base: 'flex', md: 'none' }}
                        />
                    </Flex>

                   
                    <Flex flexGrow={1} justify="center">
                        <Box
                            as="span"
                            fontWeight="bold"
                            fontSize="lg"
                        >
                            LOGO
                        </Box>
                    </Flex>

                   
                    <Flex
                        justify="flex-end"
                        align="center"
                        display={{ base: 'flex', md: 'flex' }}
                    >
                        <Box as="a" href="#" mx={2}>
                            <FontAwesomeIcon icon={faSearch} size="lg" />
                        </Box>
                        <Box as="a" href="#" mx={2}>
                            <FontAwesomeIcon icon={faHeart} size="lg" />
                        </Box>
                        <Box as="a" href="#" mx={2}>
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                        </Box>
                        <Box as="a" href="#" mx={2}>
                            <FontAwesomeIcon icon={faUser} size="lg" />
                        </Box>
                    </Flex>
                </Flex>

             
                <Collapse in={isOpen}>
                    <VStack
                        spacing={4}
                        align="start"
                        mt={0}
                        display={{ base: 'flex', md: 'none' }}
                        backgroundColor="white"
                        boxShadow="md"
                        p={2}
                    >
                        {links.map((link) => (
                            <ChakraLink
                                as={ReactRouterLink}
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </ChakraLink>
                        ))}
                    </VStack>
                </Collapse>

               
                <Flex
                    align="center"
                    justify="center"
                    wrap="wrap"
                    display={{ base: 'none', md: 'flex' }}
                    mt={0}
                >
                    {links.map((link) => (
                        <ChakraLink
                            as={ReactRouterLink}
                            key={link.to}
                            to={link.to}
                            mx={4}
                        >
                            {link.label}
                        </ChakraLink>
                    ))}
                </Flex>
            </Box>
        </Box>
    );
}
