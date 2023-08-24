import React from 'react';
import { Flex, Box , Text , Heading , Button } from '@chakra-ui/react';

const Technical = () => {
  const boxStyles = {
    width: '234px',
    height: '52px',
    borderWidth: '1.5px', 
    borderColor: '#000',
    borderStyle: 'solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const boxStyles2 = {
    width: '373px',
    height: '52px',
    borderWidth: '1.5px', 
    borderColor: '#000',
    borderStyle: 'solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
  const boxStyles1 = {
    width: '274px',
    height: '52px',
    borderWidth: '1.5px', 
    borderColor: '#007DFA',
    borderStyle: 'solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  

  const commonMenu2ItemStyles  = {
    color: '#000' ,  textAlign : 'center', fontSize : '20', fontStyle : 'normal', fontWeight : '700'  
  }
 
  const commonMenu2ItemStyles1  = {
    color: '#007DFA' ,  textAlign : 'center', fontSize : '20', fontStyle : 'normal', fontWeight : '700'  
  }
  
  return (
   <>
   
    <Flex ml={50} mr={50} mx="50px" background="#FFF" w={1440} h={90}>
      <Box style={boxStyles}><Text {...commonMenu2ItemStyles}>Curated Screeners</Text></Box>
      <Box style={boxStyles}><Text style={ commonMenu2ItemStyles }>Custom Screeners</Text></Box>
      <Box style={boxStyles1}><Text {...commonMenu2ItemStyles1}>Technical Scannar</Text></Box>
      <Box  style={boxStyles2} ><Text {...commonMenu2ItemStyles} >Point by Point stock comparison</Text></Box>
    </Flex>
    <Box gap={2}>
    <Flex justify="space-between" mx="50" ml={50} mr={50} w={1281} h={20}>
      <Text fontSize={30} fontWeight={700} fontStyle={'normal'}>Technical Scanner</Text>
    </Flex>
    <Flex  ml={50} mr={50}>
    <Box display="flex" gap={25}>
        <Box width="125px" height="32px"  borderRadius={10}  border= '1px solid rgba(0, 0, 0, 0.50)'></Box>
        <Box width="125px" height="32px" borderRadius={10}  border= '1px solid rgba(0, 0, 0, 0.50)'></Box>
        <Box width="125px" height="32px" borderRadius={10}  border= '1px solid rgba(0, 0, 0, 0.50)'></Box>
        <Box width="125px" height="32px" borderRadius={10}  border= '1px solid rgba(0, 0, 0, 0.50)'></Box>
        <Box width="125px" height="32px" borderRadius={10}   border='1px solid rgba(0, 0, 0, 0.50)'></Box>
        <Box width="125px" height="32px" borderRadius={10}   border='1px solid rgba(0, 0, 0, 0.50)'></Box>
        </Box>
    </Flex>
    <Flex mt={2} mb={3}  ml={50} mr={50}><Box display="flex" gap={25}>
        <Box width="125px" height="32px" borderRadius={10} border= '1px solid rgba(0, 0, 0, 0.50)'></Box>
        <Box width="125px" height="32px" borderRadius={10}  border= '1px solid rgba(0, 0, 0, 0.50)'></Box>
        </Box>
        </Flex>
    <Flex  ml={50} mr={50}  >
      <Box display="flex">
        <Box width="125px" height="78px"  border= '1px solid rgba(0, 0, 0, 0.50)'></Box>
        <Box width="125px" height="78px" border= '1px solid rgba(0, 0, 0, 0.50)'></Box>
        <Box width="125px" height="78px" border= '1px solid rgba(0, 0, 0, 0.50)'></Box>
        <Box width="125px" height="78px" border= '1px solid rgba(0, 0, 0, 0.50)'></Box>
        <Box width="125px" height="78px"  border='1px solid rgba(0, 0, 0, 0.50)'></Box>
        <Box width="125px" height="78px"  border='1px solid rgba(0, 0, 0, 0.50)'></Box>
        <Box width="125px" height="78px"  border= '1px solid rgba(0, 0, 0, 0.50)'></Box>
        <Box width="125px" height="78px" border= '1px solid rgba(0, 0, 0, 0.50)'></Box>
        <Box width="125px" height="78px" border= '1px solid rgba(0, 0, 0, 0.50)'></Box>
        <Box width="125px" height="78px" border= '1px solid rgba(0, 0, 0, 0.50)'></Box>
        <Box width="125px" height="78px" border= '1px solid rgba(0, 0, 0, 0.50)'></Box>
      </Box>
    </Flex>
    </Box>
    </>
    )
  }
  export default Technical;