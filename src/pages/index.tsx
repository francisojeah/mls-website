import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import BodyWrapper from "@/components/BodyWrapper";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Box } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
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
      </main>
    </>
  );
}
