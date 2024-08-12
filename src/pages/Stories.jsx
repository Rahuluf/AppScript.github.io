import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

export default function Stories  ()  {
  return (
   <Box pt="80px">Stories</Box>
  )
}
// import React, { useState } from 'react';
// import {
//   Box,
//   Heading,
//   Container,
//   Button,
//   Flex,
//   Stack,
//   Drawer,
//   DrawerBody,
//   DrawerCloseButton,
//   DrawerContent,
//   DrawerHeader,
//   DrawerOverlay,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   Text,
//   Image,
//   useDisclosure,
//   Divider,
//   ButtonGroup,
//   Spacer,
//   Card,
//   CardBody,
//   CardFooter,
//   SimpleGrid
// } from '@chakra-ui/react';
// import { ChevronDownIcon } from '@chakra-ui/icons';
// import '../css/shop.css';

// export default function Shop() {
//   const [selectedFilter, setSelectedFilter] = useState([]);
//   const [selectedRecommended, setSelectedRecommended] = useState('');
//   const [activeFilter, setActiveFilter] = useState(null);

//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const handleCheckboxChange = (value) => {
//     setSelectedFilter((prev) =>
//       prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
//     );
//   };

//   const handleRecommendedChange = (value) => {
//     setSelectedRecommended(value);
//   };

//   const handleFilterClick = (filterValue) => {
//     setActiveFilter((prev) => (prev === filterValue ? null : filterValue));
//   };

//   const filterOptions = [
//     { value: 'customizable', label: 'Customizable' },
//     { value: 'ideal-for', label: 'Ideal for' },
//     { value: 'occasion', label: 'Occasion' },
//     { value: 'work', label: 'Work' },
//     { value: 'fabric', label: 'Fabric' },
//     { value: 'segment', label: 'Segment' },
//     { value: 'suitable-for', label: 'Suitable for' },
//     { value: 'raw-material', label: 'Raw Material' },
//     { value: 'pattern', label: 'Pattern' },
//   ];

//   const recommendedOptions = [
//     { value: 'newest', label: 'Newest First' },
//     { value: 'popular', label: 'Popular' },
//     { value: 'high-to-low', label: 'Price: High to Low' },
//     { value: 'low-to-high', label: 'Price: Low to High' },
//   ];

//   const categories = ['All', 'Men', 'Women', 'Baby & Kids'];

//   const items = [
//     {
//       id: 1,
//       name: 'Customizable T-Shirt',
//       category: 'Fabric',
//       occasion: 'Casual',
//       gender: 'Men',
//       imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//     },
//     {
//       id: 2,
//       name: 'Elegant Dress',
//       category: 'Work',
//       occasion: 'Formal',
//       gender: 'Women',
//       imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//     },
//     {
//       id: 3,
//       name: 'Patterned Scarf',
//       category: 'Fabric',
//       occasion: 'Casual',
//       gender: 'Women',
//       imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//     },
//     {
//       id: 4,
//       name: 'Raw Material Jacket',
//       category: 'Raw Material',
//       occasion: 'Casual',
//       gender: 'Men',
//       imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//     },
//     {
//       id: 5,
//       name: 'Baby Romper',
//       category: 'Fabric',
//       occasion: 'Casual',
//       gender: 'Baby & Kids',
//       imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//     },
//     {
//       id: 6,
//       name: 'Baby Romper',
//       category: 'Fabric',
//       occasion: 'Casual',
//       gender: 'Baby & Kids',
//       imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//     },
//     {
//       id: 7,
//       name: 'Baby Romper',
//       category: 'Fabric',
//       occasion: 'Casual',
//       gender: 'Baby & Kids',
//       imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//     },
//     {
//       id: 8,
//       name: 'Baby Romper',
//       category: 'Fabric',
//       occasion: 'Casual',
//       gender: 'Baby & Kids',
//       imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//     },
//     {
//       id: 9,
//       name: 'Baby Romper',
//       category: 'Fabric',
//       occasion: 'Casual',
//       gender: 'Baby & Kids',
//       imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//     },
//     {
//       id: 10,
//       name: 'Baby Romper',
//       category: 'Fabric',
//       occasion: 'Casual',
//       gender: 'Baby & Kids',
//       imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
//     },
    
//   ];

//   const filterItems = (item) => {
//     const matchFilters =
//       selectedFilter.length === 0 || selectedFilter.includes(item.category.toLowerCase());
//     const matchCategory = categories.includes(item.gender) || categories[0] === 'All';
//     return matchFilters && matchCategory;
//   };

//   const selectedFilterText =
//     selectedFilter.length > 0
//       ? selectedFilter
//           .map((value) => filterOptions.find((option) => option.value === value)?.label)
//           .join(', ')
//       : 'Select Filters';

//   return (
//     <>
//       <Heading pt="80px" textAlign="center">
//         DISCOVER OUR PRODUCT
//       </Heading>
//       <Container maxWidth="80%" textAlign="center" mt={4}>
//         <Text>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aut blanditiis cumque
//           totam nulla explicabo illum dolorem fugiat facilis modi.
//         </Text>
//       </Container>

//       <Container maxWidth="100%" p={0}>
//         <Flex mt={4} align="center" width="100%" flexWrap="nowrap">
//           <Button
//             onClick={onOpen}
//             rightIcon={<ChevronDownIcon />}
//             mb={{ base: 2, md: 0 }}
//             flexShrink={0}
//             className="custom-button"
//           >
//             {selectedFilter.length > 0 ? `Filters (${selectedFilterText})` : 'Show Filters'}
//           </Button>

//           <Spacer />

//           <Box flexShrink={0}>
//             <Menu>
//               <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
//                 {selectedRecommended || 'Recommended'}
//               </MenuButton>
//               <MenuList>
//                 {recommendedOptions.map((option) => (
//                   <MenuItem key={option.value} onClick={() => handleRecommendedChange(option.value)}>
//                     {option.label}
//                   </MenuItem>
//                 ))}
//               </MenuList>
//             </Menu>
//           </Box>
//         </Flex>
//       </Container>

//       <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader borderBottomWidth="1px">Filters</DrawerHeader>
//           <DrawerBody>
//             <Stack spacing={1}>
//               {filterOptions.map((option) => (
//                 <Box key={option.value}>
//                   <Button onClick={() => handleFilterClick(option.value)} rightIcon={<ChevronDownIcon />}>
//                     {option.label}
//                   </Button>
//                   {activeFilter === option.value && (
//                     <Box mt={4}>
//                       <Stack spacing={2} align="flex-start">
//                         {categories.map((category) => (
//                           <Checkbox
//                             key={category}
//                             value={category}
//                             isChecked={selectedFilter.includes(category)}
//                             onChange={() => handleCheckboxChange(category)}
//                           >
//                             {category}
//                           </Checkbox>
//                         ))}
//                       </Stack>
//                     </Box>
//                   )}
//                 </Box>
//               ))}
//             </Stack>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>

//       <Container mt={4} maxW='container.lg'>
//         <Flex wrap="wrap" gap={4} justify="center">
//           {items.filter(filterItems).map((item) => (
//             <Box key={item.id} p={4} borderWidth="1px" borderRadius="md" width="200px">
//               <Image src={item.imageUrl} alt={item.name} borderRadius="md" />
//               <Text mt={2} fontWeight="bold">
//                 {item.name}
//               </Text>
//               <Text mt={1} color="gray.600">
//                 Category: {item.category}
//               </Text>
//               <Text mt={1} color="gray.600">
//                 Occasion: {item.occasion}
//               </Text>
//               <Text mt={1} color="gray.600">
//                 Gender: {item.gender}
//               </Text>
//             </Box>
//           ))}
//         </Flex>
//       </Container>

//     </>
//   );
// }











      {/* <Container maxWidth="100%" p={0}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing="6" mt={4}>
          <Card maxW="xs">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                
                <Text color="blue.600" fontSize="2xl">
                  100
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

         
          <Card maxW="xs">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                
                <Text color="blue.600" fontSize="2xl">
                  390
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW="xs">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
               
                <Text color="blue.600" fontSize="2xl">
                  300
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW="xs">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                
                <Text color="blue.600" fontSize="2xl">
                  2500
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW="xs">
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
              
                <Text color="blue.600" fontSize="2xl">
                  2500
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container> */}