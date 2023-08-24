

import { Heading , Text , Box} from "@chakra-ui/react"

const TermsStyle =  {
    fontFamily : "Open Sans" , fontSize: '18',  fontStyle : 'normal' , fontWeight : '600',  mb : '4'
    
}

const Disclosure =()=>{
    return (
        <>
        <Heading mb={5} fontFamily="Open Sans" as='h3' size='lg' ml={50}>Disclosures</Heading>
        <Box ml={50} mr={50} > 
        <Text {...TermsStyle}  >The information, analytics, rating, and estimates provided on the website has been prepared by Arpit Goel, a SEBI Registered Investment Adviser, having registration number – INA100014055, working as an independent consultant with FINKHOZ. </Text>
        <Text {...TermsStyle}  >The views and opinions expressed on the platform and reports are independent and may or may not match or may be contrary to the views, estimates, rating, and target price of other research intermediaries.</Text>
        <Text {...TermsStyle} >The report and information contained herein are strictly confidential and meant solely for the selected recipient and may not be altered in any way, transmitted to, copied, or distributed, in part or in whole, to any other person or to the media or reproduced in any form, without prior written consent.</Text>
        <Text {...TermsStyle} >No penalties/directions have been issued by SEBI under the SEBI Act or any other regulatory body. We do not receive any consideration by way of remuneration or compensation or in any other form whatsoever from any company, broker, or intermediary.</Text>
        <Text {...TermsStyle} >If the client wants an opinion on the specific positions made by him only, we will be able to suggest an appropriate view on the securities. Such a suggestion/view under any circumstances shall be considered as an opinion (not advice) from our side, and we advise the client to consider our opinion and not consultancy to make his/her final decision. We are not liable for any losses whatsoever the client may incur in accepting this opinion.</Text>
        <Text {...TermsStyle} >The names of the products/nature of investments do not in any manner indicate their prospects or returns. The performance in the equity products may be adversely affected by the performance of individual companies, changes in the marketplace, and industry-specific and macro-economic factors.</Text>
        <Text {...TermsStyle} >We do not have any association in any manner with any issuer of products/securities, ensuring that there are no actual or potential conflicts of interest. This also ensures that objectivity or independence in the carrying on of investment advisory services is not compromised.</Text>
        <Text {...TermsStyle} >Investment in the market is subject to market risk, and though best attempts are made for predicting markets, no surety of return or accuracy of any kind is guaranteed.</Text>
        <Text {...TermsStyle} >The information on the website is updated from time to time. Arpit Goel, Investment Adviser, however, excludes any warranties (whether expressed or implied), as to the quality, consistency, efficacy, completeness, performance, fitness, or any of the contents of the website.</Text>
        <Text {...TermsStyle} >We do not guarantee any profit/return. The performance of the investments/products may be affected by changes in government policies, general levels of interest rates, and risks associated with trading volumes, liquidity, and settlement systems in equity and debt markets.</Text>
        <Text {...TermsStyle} >We do not guarantee any profit/return. The performance of the investments/products may be affected by changes in government policies, general levels of interest rates, and risks associated with trading volumes, liquidity, and settlement systems in equity and debt markets.</Text>
        <Text {...TermsStyle} >We do not provide any profit/loss sharing services, guaranteed profit services, DEMAT services.</Text>
        </Box>
        </>
    )
}
export default Disclosure;