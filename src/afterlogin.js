
import { Flex , Image , Menu , MenuButton , MenuList , MenuItem , Text,  Spacer , Center , Icon} from "@chakra-ui/react"
import logoo from './images/logoo.png'
import Frame from './images/Frame.svg'
import { ChevronDownIcon 
} from '@chakra-ui/icons'
import { useState } from "react"



const commonMenuItemStyles = {
  
   fontSize:'20', fontStyle:'normal', fontWeight:'600', gap:'10', borderBottom:'1',
  style:{
    borderBottom: '1px solid rgba(0, 125, 250, 0.30)',
    background: 'linear-gradient(0deg, rgba(0, 125, 250, 0.05) 0%, rgba(0, 125, 250, 0.05) 100%), #FFF',
  
  },
  
};
const commonMenu2ItemStyles = {
  color: '#000' ,  textAlign : 'center', fontSize : '18', fontStyle : 'normal', fontWeight : '600' ,  lineHeight : '24' , fontFamily : " Montserrat"
}


const AfterLogin = ()=>{
  const [isOpen, setIsOpen] = useState(false);
  const [issOpen, setIssOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  const togggleMenu = () => {
    setIssOpen(!issOpen);
  };
  
  
  return(
<>
<Flex width={1440} height={127} flexShrink={0} alignItems={"center"}   display={"inline-flex"}>
  <Center ml={50} mr={50}>
  
    <Center mr={2}><Image
    boxSize='32px'
    objectFit='cover'
    src={logoo}
    alt='Dan Abramov'
  /></Center>
  
  <Menu position="absolute" top="100%" left={0} flexDirection="column" alignItems={"flex-start" } gap={50}   mt={2}>
        <MenuButton  mr={5}  onClick={toggleMenu}>
        <Flex gap={4} alignItems={"center"}>
        <Text fontSize={32}  fontStyle={'normal'} fontWeight={"bold"} >HKKR FINKHOZ</Text>
        <Icon boxSize={8} as={ChevronDownIcon }   onClick={toggleMenu} transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'} /> 
        </Flex>
      
</MenuButton>
      
        <MenuList  w={326}  background='none' isOpen={isOpen}  position="absolute" top="100%" left={0} border={"none"} mt={4} animanpm install framer-motion
 >
          <Flex>
            <MenuList  border={"none"} background='none' isOpen={isOpen} >
                <MenuItem _hover ={ { bg: "red" }} {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
            </MenuList>
            <Spacer ml={2} />
            <MenuList  border={"none"} background='none'  >
              <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
             <MenuItem    {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
            </MenuList>
          </Flex>
        </MenuList>
      </Menu>
      <Center>
      
</Center>
    
</Center>

<Center  gap={25}  >
<Center >
<Text {...commonMenu2ItemStyles}>Stock Analytics </Text>
</Center>
<Center >
<Text {...commonMenu2ItemStyles}>Protfolio Checkup</Text>
</Center>
<Center >
<Text {...commonMenu2ItemStyles}>Screener</Text>
</Center>
<Center>
<Text {...commonMenu2ItemStyles}>Adaptive DashBoard</Text>
</Center>
</Center>

<Center ml={80} >
  
<Menu  background='none'>

  <MenuButton  onClick={togggleMenu}>
    <Flex gap={1} alignItems={"center"}>
  <Icon boxSize={8} as={ChevronDownIcon }   onClick={togggleMenu} transform={issOpen ? 'rotate(180deg)' : 'rotate(0deg)'} /> 
    <Image
    boxSize='34px'
    objectFit='cover'
    src={Frame}
    alt='Dan Abramov'
  /></Flex></MenuButton>

   <MenuList  border={"none"} background='none' mt={7} onClick={togggleMenu} >
              <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
             <MenuItem    {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                <MenuItem  {...commonMenuItemStyles}>Indepth Stock Analytics</MenuItem>
                </MenuList>      
</Menu>
</Center>

</Flex>
<Flex width= {1540}
height ={740}
flex-shrink ={0} backgroundColor={'#DBEDFF'}></Flex>
 </>
  )
}
export default AfterLogin;

