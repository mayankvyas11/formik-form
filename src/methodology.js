

import { Heading , Text , Box, Flex} from "@chakra-ui/react"

const TermsStyle =  {
    fontFamily : "Open Sans" , fontSize: '18',  fontStyle : 'normal' , fontWeight : '600' 
    
}
 

const Methodology =()=>{
    return (
        <>
        <Heading mb={5} fontFamily="Open Sans" as='h3' size='lg' ml={50}>Methodology</Heading>
        <Box ml={50} mr={50} gap={20}> 
        <Text  {...TermsStyle} >The 360-degree stock analytics model utilizes a rating and ranking system based on 18 diverse parameters grouped into five categories: </Text>
        <Text {...TermsStyle} mb={3}>   Trackrecord, Valuation, Outlook, Reliability, and Technicals. Each parameter is assigned a score, and stocks are rated as follows:</Text>
        <Text mb={3} ml={5} {...TermsStyle} >•  Trackrecord rating considers Sales 5 Yr CAGR, Profit 5 Yr CAGR, YoY Quarterly Sales Growth, YoY Quarterly Profit Growth, Operating Margins, Margin Expansion, and Fixed Assets Growth. Ratings are assigned as Excellent (7.5-10), Good (5.0-7.5), Average (2.5-5.0), or Weak ( less then 2.5).</Text>
        <Text mb={3} ml={5} {...TermsStyle} >•  Valuation rating is determined based on historical average and segment average. Stocks are rated according to their valuation metrics.</Text>
        <Text mb={3} ml={5} {...TermsStyle} >•  Reliability rating takes into account Promoter Holding, Institution Holding, Change in Institution Holding, Interest Coverage Ratio, Return on Capital Employed, and Dividend Yield. Ratings are assigned based on the reliability of these factors.</Text>
        <Text mb={3} ml={5} {...TermsStyle} >•  Technical rating includes 1-year and 3-year price performance, 200 and 50 Day Moving Average, and 52-week index. Stocks are rated based on their technical indicators.</Text>
        <Text mb={3} ml={5} {...TermsStyle} >•  Additionally, the model conducts peer benchmarking to rank stocks based on their respective performance within their segment. This comprehensive approach allows investors to assess stocks holistically and make informed decisions based on multiple dimensions of their performance.</Text>
      
        
        </Box>
        </>
    )
}
export default Methodology;
