import { EmailIcon, InfoIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import BodyWrapper from "./BodyWrapper";

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
      <BodyWrapper>
        <>
          <Grid
            gridTemplateColumns={{
              lg: "40% 25% 35%",
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap="4"
            fontSize={"14px"}
          >
            <GridItem p={{ lg: "2rem", base: "1rem" }}>
              <Text
                fontSize={{ base: "16px", lg: "24px" }}
                fontWeight={"bold"}
                mb={{ lg: "0.2rem", base: "unset" }}
              >
                MODERN LOGISTICS SERVICES LIMITED
              </Text>
              <Text>
                One of the most reliable medium sized logistics, procurement and
                IT equipment suppliers in Nigeria
              </Text>
            </GridItem>
            <GridItem p={{ lg: "2rem", base: "1rem" }}>
              <Flex flexDirection={"column"} gap={"5"}>
                <a href={"#home"}>
                  <Text>HOME</Text>
                </a>
                <a href={"#aboutus"}>
                  <Text>ABOUT US</Text>
                </a>
                <a href={"#ourservices"}>
                  <Text>OUR SERVICES</Text>
                </a>
              </Flex>{" "}
            </GridItem>
            <GridItem p={{ lg: "2rem", base: "1rem" }}>
              <Flex flexDirection={"column"} gap={"5"}>
                <Text>
                  <InfoIcon mr={"5"} />
                  22 king George V.Road,Onikan Lagos.
                </Text>
                <a href={"tel:+2348055404765"}>
                  <Text>
                    <PhoneIcon mr={"5"} />
                    +234 805 540 4765
                  </Text>
                </a>
                <a href={"mailto:aderibigbe@modernlogistics.org"}>
                  <Text>
                    <EmailIcon mr={"5"} />
                    aderibigbe@modernlogistics.org
                  </Text>
                </a>
              </Flex>{" "}
            </GridItem>
          </Grid>
          <Grid
            gridTemplateColumns={{
              lg: "30% 30%",
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap={{ lg: "full", base: "5" }}
            flexDirection={{ lg: "row", base: "column" }}
            w={"full"}
            borderTop={"2px"}
            px={{ base: "4", lg: " 6rem" }}
            pt={"6"}
            mx={"auto"}
            justifyContent={"space-between"}
          >
            <GridItem>
              <Flex
                justifyContent={{ base: "center", md: "unset" }}
                alignItems={"center"}
              >
                <a href={"tel:+2348055404765"}>
                  <Text
                    display={"flex"}
                    textAlign={{ base: "center", lg: "unset" }}
                  >
                    Powered by Francis Okocha-Ojeah
                  </Text>
                </a>
              </Flex>
            </GridItem>
            <GridItem
              display={"flex"}
              justifyContent={"space-between"}
              w={"full"}
            >
              <a
                href="https://www.linkedin.com/in/francis-okocha-ojeah/"
                target="_blank"
              >
                <FaLinkedin style={{ fontSize: "25px" }} />
              </a>
              <a href="https://github.com/francisojeah" target="_blank">
                <FaGithub style={{ fontSize: "25px" }} />
              </a>

              <a href="https://twitter.com/FrancisOjeah" target="_blank">
                <FaTwitter style={{ fontSize: "25px" }} />
              </a>
            </GridItem>
          </Grid>
        </>
      </BodyWrapper>
    </Box>
  );
};

export default Footer;
