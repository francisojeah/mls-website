import { EmailIcon, InfoIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import { MirrowIcon } from "./MirrowIcon";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      id="footer"
      mt={{ lg: "3rem" }}
      bg={"brand.graya"}
      p="2rem"
      gap={"10"}
      display={"flex"}
      flexDirection={"column"}
      color={"white"}
    >
      <Grid
        gridTemplateColumns={{
          lg: "50% 20% 30%",
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap="4"
        fontSize={"14px"}
      >
        <GridItem p={{lg:"2rem", base:"1rem"}}>
          <Text fontSize={{ base: "16px", lg: "24px" }} fontWeight={"bold"} mb={{lg:"0.2rem", base: "unset"}}>
            MODERN LOGISTICS SERVICES LIMITED
          </Text>
          <Text>
          One of the most reliable medium
        sized logistics, procurement and IT equipment suppliers in Nigeria
          </Text>
        </GridItem>
        <GridItem p={{lg:"2rem", base:"1rem"}}>
          <Flex flexDirection={"column"} gap={"5"}>
            <Link href={"#home"}>
              <Text>HOME</Text>
            </Link>
            <Link href={"#aboutus"}>
              <Text>ABOUT US</Text>
            </Link>
            <Link href={"#ourservices"}>
              <Text>OUR SERVICES</Text>
            </Link>
          </Flex>{" "}
        </GridItem>
        <GridItem p={{lg:"2rem", base:"1rem"}}>
          <Flex flexDirection={"column"} gap={"5"}>
            <Text>
              <InfoIcon mr={"5"} />
              22 king George V.Road,Onikan Lagos.
            </Text>
            <Link href={"tel:+2348055404765"}>
              <Text>
                <PhoneIcon mr={"5"} />
                +234 805 540 4765
              </Text>
            </Link>
            <Link href={"mailto:femiakintilo@yahoo.com"}>
              <Text>
                <EmailIcon mr={"5"} />
                femiakintilo@yahoo.com
              </Text>
            </Link>
          </Flex>{" "}
        </GridItem>
      </Grid>
      <Grid
      gridTemplateColumns={{
        lg: "30% 30%",
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
      }}
      gap={{lg:"full", base:"5"}}
        flexDirection={{lg:"row", base: "column"}}
        w={"full"}
        borderTop={"2px"}
        p={"4"}
        mx={"auto"}
        justifyContent={"space-between"}
      >
        <GridItem>
          <Flex alignItems={"center"} justifyContent={"center"}>
        <Link href={"tel:+2348055404765"}>
          <Text display={"flex"}  textAlign={{ base: "center", lg: "unset" }}>
            Powered by Mirrow
            <MirrowIcon />
          </Text>
        </Link>
        </Flex>
        </GridItem>
        <GridItem display={"flex"} justifyContent={"space-between"} w={"full"}>
          <Link
            href="https://www.linkedin.com/in/francis-okocha-ojeah/"
            target="_blank"
          >
            <FaLinkedin style={{fontSize: "25px"}}/>
          </Link>
          <Link href="https://github.com/francisojeah" target="_blank">
            <FaGithub style={{fontSize: "25px"}}/>
          </Link>

          <Link href="https://twitter.com/FrancisOjeah" target="_blank">
            <FaTwitter style={{fontSize: "25px"}}/>
          </Link>
          </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
