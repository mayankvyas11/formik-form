import React from 'react';
import { Flex, Box , Text, Divider , Heading , Card, Icon,  Table, Thead, Tbody, Tr, Th, Td , Image ,  UnorderedList , ListItem } from '@chakra-ui/react';
import kotak from './images/Kotak.png'
import Axis from './images/Axis.png'
import { ChevronDownIcon 
} from '@chakra-ui/icons'
const StockCompare = () => {
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
  const commonMenu2ItemStyles = {
    color: '#000' ,  textAlign : 'center', fontSize : '18', fontStyle : 'normal', fontWeight : '700'  , 
  }
  
  
  const tableStyles = {
    background: '#FFF',
    border: '1px solid rgba(0, 0, 0, 0.60)',
   
  };

  const cellStyles = {
    border: '1px solid rgba(0, 0, 0, 0.60)',
    padding: '8px',
    textAlign : 'center'
  };

  const rowHeights = ['150px', '300px', '100', '170px', '300px', '330px'];
  const columnWidths = ['340px', '300px', '300px', '340px'];
  
 
  const commonMenu2ItemStyles1  = {
    color: '#007DFA' ,  textAlign : 'center', fontSize : '18', fontStyle : 'normal', fontWeight : '600'  
  }
  
  return (
   <>
    <Flex justify="center" mx="50px" background="#FFF" w={1440} h={90}>
      <Box style={boxStyles }><Text style={commonMenu2ItemStyles}>Curated Screeners</Text></Box>
      <Box style={boxStyles}><Text style={commonMenu2ItemStyles}>Custom Screeners</Text></Box>
      <Box style={boxStyles}><Text style={commonMenu2ItemStyles}>Technical Scannar</Text></Box>
      <Box style={boxStyles2} borderColor="#007DFA"><Text style={ commonMenu2ItemStyles1 }>Point by Point stock comparison</Text></Box>
    </Flex>
  
  <Flex  ml={50} mr={50} mb={15}>
  <Box mt={10} width="265px" height="68px" mr={110}>
      <Box textAlign="center"><Heading as='h3' size='lg' >
     Point by Point </Heading></Box>
     <Box textAlign="center"><Heading as='h3' size='lg' >
       Stock  Analysis </Heading></Box>
     </Box>
     <Card mt={4}w={194} h={141} mr={144} alignItems="center" background="white" border="none">
    <Image w={135} h={141}
     src={kotak}
     gap={2}
    />
      <Heading size='md'>KOTAK BANK</Heading>
</Card>
<Card mt={4} w={194} h={141} mr={110} alignItems="center" background="white" border="none">
    <Image w={135} h={141}
     src={Axis}
     border="none"
     gap={2}
    />
      <Heading size='md'>Axis BANK</Heading>
</Card>
<Box mt={20} width="265px" height="68px" mr={50}>
      <Box textAlign="center"><Heading as='h3' size='lg' >Add a comparison
      </Heading></Box>
      <Divider mt={4} mb={3} orientation="vertical" width="257px" height="0px" borderBottomWidth="1px" borderColor="rgba(0, 0, 0, 0.60)" />
      <Flex alignItems='center'>
     <Box textAlign="center">< Text   fontSize={24}  fontWeight={600}>
       choose company </Text>
       </Box>
       <Icon boxSize={8} as={ChevronDownIcon } />
       </Flex>
     </Box>
    
    
  </Flex>
  <Flex ml={55}  mt={12}>
      <Table style={tableStyles} width="auto">
        <Tbody>
          <Tr style={{ height: rowHeights[0] }}>
            <Td style={{ ...cellStyles, width: columnWidths[0] }}>
         
            </Td>
            <Td style={{ ...cellStyles, width: columnWidths[1] }}>
           
            </Td>
            <Td style={{ ...cellStyles, width: columnWidths[2] }}>
           
            </Td>
            <Td style={{ ...cellStyles, width: columnWidths[3] }}>
            
            </Td>
          
          </Tr>
          <Tr style={{ height: rowHeights[0] }}>
            <Td style={{ ...cellStyles, width: columnWidths[0] }}>
             
            </Td>
            <Td style={{ ...cellStyles, width: columnWidths[1] }}>
             
            </Td>
            <Td style={{ ...cellStyles, width: columnWidths[1] }}>
            
            </Td>
            <Td style={{ ...cellStyles, width: columnWidths[1] }}>
             
            </Td>
          
          </Tr>
          <Tr style={{ height: rowHeights[1] }}>
            <Td style={{ ...cellStyles, width: columnWidths[0] }}>
             
            </Td>
            <Td style={{ ...cellStyles, width: columnWidths[1] }}>
              
            </Td>
            <Td style={{ ...cellStyles, width: columnWidths[1] }}>
             
            </Td>
            <Td style={{ ...cellStyles, width: columnWidths[1] }}>
            
            </Td>
          
          </Tr>
          <Tr style={{ height: rowHeights[2] }}>
            <Td style={{ ...cellStyles, width: columnWidths[0] }}>
             
            </Td>
            <Td style={{ ...cellStyles, width: columnWidths[1] }}>
              
            </Td>
            <Td style={{ ...cellStyles, width: columnWidths[1] }}>
             
            </Td>
            <Td style={{ ...cellStyles, width: columnWidths[1] }}>
             
            </Td>
          
          </Tr>
          <Tr style={{ height: rowHeights[3] }}>
            <Td style={{ ...cellStyles, width: columnWidths[0] }}>
             
            </Td>
            <Td style={{ ...cellStyles, width: columnWidths[1] }}>
            
            </Td>
            <Td style={{ ...cellStyles, width: columnWidths[1] }}>
              
            </Td>
            <Td style={{ ...cellStyles, width: columnWidths[1] }}>
             
            </Td>
          
          </Tr>
          <Tr style={{ height: rowHeights[0] }}>
            <Td style={{ ...cellStyles, width: columnWidths[0] }}>
             
            </Td>
            <Td style={{ ...cellStyles, width: columnWidths[1] }}>
             
            </Td>
            <Td style={{ ...cellStyles, width: columnWidths[1] }}>
              
            </Td>
            <Td style={{ ...cellStyles, width: columnWidths[1] }}>
             
            </Td>
          
          </Tr>
          
        </Tbody>
      </Table>
    </Flex>
  
  </>
  );
};

export default StockCompare;
