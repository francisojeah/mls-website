import { Box } from "@chakra-ui/react"
import BodyWrapper from "../components/BodyWrapper"
import Meta from "../components/Meta"
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import WhyChooseUs from "../components/WhyChooseUs"
import AboutUs from "../components/AboutUs"
import OurServices from "../components/OurServices"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <>
      <Meta />
      <Navbar />
      <BodyWrapper>
        <Box
          w={{ base: "full" }}
          maxW={{ lg: "1199px" }}
          mt={{ lg: "6rem", base: "8rem" }}
          mx="auto"
          mb={"50px"}
          px={{ base: "1rem", lg: "unset" }}
        >
          <Banner />
          <WhyChooseUs />
          <AboutUs />
          <OurServices />
        </Box>
      </BodyWrapper>
      <Footer />
    </>
  )
}

export default HomePage