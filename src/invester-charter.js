

import { Heading , Text , Box ,Flex} from "@chakra-ui/react"

const TermsStyle =  {
    fontFamily : "Open Sans" , fontSize: '18',  fontStyle : 'normal' , fontWeight : '500'
    
}

const InvesterCharter =()=>{
    return (
        <>
        <Box>
        <Heading mb={5} fontFamily="Open Sans" as='h3' size='lg' ml={50} mr={50}>Investor Charter</Heading>
       <Box mb={4}>
       <Heading mb={2} fontWeight={700} fontFamily="Open Sans" as='h3' size='md' ml={50}>A. Vision and Mission Statements for investors</Heading>
      <Flex gap={2} mb={2}>
       <Heading fontWeight={700} fontFamily="Open Sans" as='h3' size='md' ml={50}>Vision:</Heading><Text {...TermsStyle}>Invest with knowledge & safety.</Text>
       </Flex>
       <Flex  gap={2}>
       <Heading fontWeight={700}  fontFamily="Open Sans" as='h3' size='md' ml={50}>Mission:</Heading><Text {...TermsStyle}> Every investor should be able to invest in the right investment products based on their needs, manage and monitor them to meet their goals, access reports, and enjoy financial wellness.</Text>
       </Flex>
        </Box>
        <Box mb={4} >
       <Heading mb={2} fontWeight={700} fontFamily="Open Sans" as='h3' size='md' ml={50}>
        B. Details of business transacted by the Investment Advisor with respect to the investors.</Heading>
        <Box ml={50} mr={50}>
      <Text {...TermsStyle}>• Onboarding of Clients</Text>
      <Text {...TermsStyle}>• Disclosure to Clients</Text>
      <Text {...TermsStyle}>•  To distribute research reports and recommendations to the clients without discrimination.</Text>
      <Text {...TermsStyle}>•  To maintain confidentiality w.r.t publication of the research report until made available in the public domain.</Text>
      </Box>
      
        </Box>
        <Box  mb={4}>
       <Heading mb={2} fontWeight={700} fontFamily="Open Sans" as='h3' size='md' ml={50}>
       C. Details of services provided to investors</Heading>
       <Box ml={50} mr={50}>
      <Text {...TermsStyle}>• Onboarding of Clients</Text>
      <Text {...TermsStyle}>• Disclosure to Clients</Text>
      <Text {...TermsStyle}>•  To distribute research reports and recommendations to the clients without discrimination.</Text>
      <Text {...TermsStyle}>•  To maintain confidentiality w.r.t publication of the research report until made available in the public domain.</Text>
      </Box>
      
        </Box>
        <Box  mb={4}>
       <Heading mb={2} fontWeight={700} fontFamily="Open Sans" as='h3' size='md' ml={50}>
        
D. Details of grievance redressal mechanism and how to access it</Heading>
<Box ml={50} mr={50}>
      <Text {...TermsStyle}>In case of any grievance / complaint, an investor should approach the concerned investment advisor and shall ensure that the grievance is resolved within 30 days.</Text>
      <Text {...TermsStyle}>• Disclosure to Clients</Text>
      <Text {...TermsStyle}>If the investor’s complaint is not redressed satisfactorily, one may lodge a complaint with SEBI on SEBI’s SCORES portal, which is a centralized web-based complaints redressal system. SEBI takes up the complaints registered via SCORES with the concerned intermediary for timely redressal. SCORES facilitates tracking the status of the complaint.</Text>
      <Text {...TermsStyle}>With regard to physical complaints, investors may send their complaints to: Office of Investor Assistance and Education, Securities and Exchange Board of India, SEBI Bhavan. Plot No. C4-A, ‘G’ Block, Bandra-Kurla Complex, Bandra (E), Mumbai - 400 051.</Text>
        </Box>
        </Box>
        <Box mb={4} >
       <Heading mb={2} fontWeight={700} fontFamily="Open Sans" as='h3' size='md' ml={50}>
E. Expectations from the investors (Responsibilities of investors)</Heading>
       <Heading mb={2} fontWeight={700} fontFamily="Open Sans" as='h3' size='md' ml={50}>Do’s</Heading>
        <Box ml={50} mr={50}>
      <Text {...TermsStyle}>i. Always deal with SEBI registered Investment Advisor.</Text>
      <Text {...TermsStyle}>ii. Ensure that the Investment Advisor has a valid registration certificate.</Text>
      <Text {...TermsStyle}>iii. Check for SEBI registration number.</Text>
      <Text {...TermsStyle}>iv. Please refer to the list of all SEBI registered Investment Advisors, which is available on the SEBI website in the following link:https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14v. Always pay attention to the disclosures made in the research reports before investing.vi. Pay your Investment Advisor through banking channels only and maintain duly signed receipts mentioning the details of your payments.</Text>
      <Text {...TermsStyle}>v. Before buying securities or applying in a public offer, check for the research recommendation provided by your Investment Advisor..</Text>
      <Text {...TermsStyle}>vi. Ask all relevant questions and clear your doubts with your Investment Advisor before acting on the recommendation.</Text>
      <Text {...TermsStyle}>vii. Inform SEBI about Investment Advisors offering assured or guaranteed returns.</Text>
      </Box>

      <Heading mb={2} mt={3} fontWeight={700} fontFamily="Open Sans" as='h3' size='md' ml={50}>Don’ts</Heading>
      <Box ml={50} mr={50}>
      <Text {...TermsStyle}>i. Do not provide funds for investment to the Investment Advisor</Text>
      <Text {...TermsStyle}>ii. Don’t fall prey to luring advertisements or market rumors.</Text>
      <Text {...TermsStyle}>iii. Do not get attracted to limited-period discounts or other incentives, gifts, etc. offered by Investment Advisors.</Text>
      <Text {...TermsStyle}>iv. Do not share login credentials and password of your trading and demat accounts with the Investment Advisor.</Text>
        </Box>
        </Box>
        </Box>
       
        </>
    )
}
export default InvesterCharter;