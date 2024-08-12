import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, Flex, Box, IconButton, Collapse, VStack } from '@chakra-ui/react';
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
                    {/* Toggle Button on the Left Side */}
                    <IconButton
                        icon={<FontAwesomeIcon icon={isOpen ? faTimes : faBars} />}
                        aria-label="Toggle Menu"
                        onClick={toggleMenu}
                        display={{ base: 'flex', md: 'none' }}
                    />

                    {/* Icons on the Right Side */}
                    <Flex
                        justify="flex-end"
                        align="center"
                        flexGrow={1} // This will push the icons to the right
                        display={{ base: 'flex', md: '' }} // Only show on small screens
                    >
                        <Box as="a" href="/search" mx={2}>
                            <FontAwesomeIcon icon={faSearch} size="lg" />
                        </Box>
                        <Box as="a" href="/favorites" mx={2}>
                            <FontAwesomeIcon icon={faHeart} size="lg" />
                        </Box>
                        <Box as="a" href="/cart" mx={2}>
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                        </Box>
                        <Box as="a" href="/profile" mx={2}>
                            <FontAwesomeIcon icon={faUser} size="lg" />
                        </Box>
                    </Flex>
                </Flex>

                {/* Mobile Menu */}
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

                {/* Desktop Navigation Links */}
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
