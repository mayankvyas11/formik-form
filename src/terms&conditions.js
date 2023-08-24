

import { Heading , Text , Box} from "@chakra-ui/react"

const TermsStyle =  {
    fontFamily : "Open Sans" , fontSize: '18',  fontStyle : 'normal' , fontWeight : '600'
    
}

const Terms =()=>{
    return (
        <>
        <Heading mb={5} fontFamily="Open Sans" as='h3' size='lg' ml={50}>Terms & Conditions</Heading>
        <Box ml={50} mr={50} gap={20}> 
        <Text {...TermsStyle}  >1. Please read and understand the following points before using the website, www.finkhoz.com, and the services it offers: By using the site or downloading any information, you agree to the terms and conditions. </Text>
        <Text {...TermsStyle}  >2. If you subscribe to paid services, you may receive reports and suggestions for making investment decisions.</Text>
        <Text {...TermsStyle} >3. FINKHOZ is not responsible for any damages resulting from the use of the site for illegal purposes.</Text>
        <Text {...TermsStyle} >4. FINKHOZ is not a portfolio manager, broker, or investment advisor, and it doesn't manage funds.</Text>
        <Text {...TermsStyle} >5. The site offers free and paid subscription services. Read all information before subscribing.</Text>
        <Text {...TermsStyle} >6. FINKHOZ can activate or terminate user accounts based on its discretion and without prior notice.</Text>
        <Text {...TermsStyle} >7. No refunds will be provided for paid plans upon account deactivation or termination. However, FINKHOZ may consider providing refunds fully or partially on a case-by-case basis for genuine reasons. Management will assess each request individually, taking the user's reasons and circumstances into consideration.</Text>
        <Text {...TermsStyle} >8. FINKHOZ provides information on the site but doesn't guarantee its accuracy or suitability for users' needs.</Text>
        <Text {...TermsStyle} >9. The site may contain links to third-party sites, but FINKHOZ is not responsible for their content or policies.</Text>
        <Text {...TermsStyle} >10. FINKHOZ may modify the terms of use without prior notification.</Text>
        <Text {...TermsStyle} >11. The site's content is protected by intellectual property laws, and users are granted limited rights for personal use only.</Text>
        <Text {...TermsStyle} >12. FINKHOZ is not liable for any direct or indirect damages or interruptions caused by the site or its services.</Text>
        <Text {...TermsStyle} >13. Users are responsible for their posted content and interactions with others on the site.</Text>
        <Text {...TermsStyle} >14. FINKHOZ is not liable for any failed transactions made through the payment gateway service.</Text>
        <Text {...TermsStyle} >15. Read the privacy policy for information about data collection and security measures.</Text>
        <Text {...TermsStyle} >16. FINKHOZ its directors, employees, affiliates, or agents are not liable for losses due to delays or interruptions caused by technical issues, weather, strikes, fires, riots, acts of God, or similar events. During such occurrences, FINKHOZ is not obligated to provide access to the Website and its Services.</Text>
        <Text {...TermsStyle} >17. The site may be accessed from outside India, but users are responsible for complying with local laws.</Text>
        <Text {...TermsStyle} >18. Users may receive communications from FINKHOZ through various channels.</Text>
        <Text {...TermsStyle} >19. Users are responsible for updating their contact details and bearing any associated costs.</Text>
        <Text {...TermsStyle} >20. All notices to FINKHOZ should be made in writing to the specified addresses.</Text>
        <Text {...TermsStyle} >21. The agreement is governed by Indian laws, and disputes will be resolved in the Courts of Ghaziabad, Uttar Pradesh, India.</Text>
        <Text {...TermsStyle} >22. The terms and conditions, privacy policy, and disclaimer constitute the entire agreement between the parties.Remember to abide by these terms while using the website and its services.  </Text>
        </Box>
        </>
    )
}
export default Terms;