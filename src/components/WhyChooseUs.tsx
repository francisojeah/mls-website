import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <Box
      id="whychooseus"
      mt={"3rem"}
      bg={"brand.graya"}
      p={{ lg: "2rem", base: "1rem" }}
      py={"2rem"}
      borderRadius={"2rem"}
      gap={"10"}
      display={"flex"}
      flexDirection={"column"}
      color={"white"}
    >
      <Text
        textAlign={{ base: "center", lg: "unset" }}
        color={"brand.secondary"}
        fontWeight={"bold"}
        fontSize={{ base: "24px", lg: "48px" }}
      >
        WHY CHOOSE US
      </Text>
      <Text fontSize={{ base: "16px", lg: "24px" }}>
        We simply add quality to your business by giving you the best service
        you could ever get.
      </Text>
      <Grid
        gridTemplateColumns={{
          lg: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap="4"
        fontSize={"14px"}
      >
        <GridItem
          p="2rem"
          bg="brand.secondary"
          borderRadius={"2rem"}
          boxShadow={"rgba(16, 24, 40, 0.03)"}
          color="white"
        >
          <Flex
            justifyContent={"space-between"}
            flexDirection={"column"}
            gap={"5"}
          >
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text fontSize={{ base: "24px", lg: "48px" }} fontWeight={"700"}>
                01
              </Text>

              <Box w={{ lg: "80px", base: "40px" }} h={"full"}>
                <Image
                  src={"/assets/images/cardboard-box-nobackground.png"}
                  alt="Truck image"
                  width="100"
                  height="100"
                  quality={100}
                  priority={true}
                  layout="responsive"
                  style={{
                    objectFit: "contain",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </Box>
            </Flex>
            <Text fontSize={{ base: "16px", lg: "24px" }} fontWeight={"700"}>
              Reliable Expertise
            </Text>

            <Text fontSize={{ base: "14px", lg: "16px" }}>
              With nearly a decade of experience, we are your trusted partner
              for logistics, procurement, and IT solutions.
            </Text>
          </Flex>
        </GridItem>
        <GridItem
          p="2rem"
          bg="brand.grayb"
          borderRadius={"2rem"}
          boxShadow={"rgba(16, 24, 40, 0.03)"}
          color="white"
        >
          <Flex
            justifyContent={"space-between"}
            flexDirection={"column"}
            gap={"5"}
          >
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text fontSize={{ base: "24px", lg: "48px" }} fontWeight={"700"}>
                02
              </Text>

              <Box w={{ lg: "80px", base: "40px" }} h={"full"}>
                <Image
                  src={"/assets/images/cardboard-box-nobackground.png"}
                  alt="Truck image"
                  width="100"
                  height="100"
                  quality={100}
                  priority={true}
                  layout="responsive"
                  style={{
                    objectFit: "contain",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </Box>
            </Flex>

            <Text fontSize={{ base: "16px", lg: "24px" }} fontWeight={"700"}>
              Proven Track Record
            </Text>
            <Text fontSize={{ base: "14px", lg: "16px" }}>
              Since 2013, we have consistently delivered top-notch services,
              earning the trust of businesses across Nigeria.
            </Text>
          </Flex>
        </GridItem>
        <GridItem
          p="2rem"
          bg="brand.grayb"
          borderRadius={"2rem"}
          boxShadow={"rgba(16, 24, 40, 0.03)"}
          color="white"
        >
          <Flex
            justifyContent={"space-between"}
            flexDirection={"column"}
            gap={"5"}
          >
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text fontSize={{ base: "24px", lg: "48px" }} fontWeight={"700"}>
                03
              </Text>

              <Box w={{ lg: "80px", base: "40px" }} h={"full"}>
                <Image
                  src={"/assets/images/cardboard-box-nobackground.png"}
                  alt="Truck image"
                  width="100"
                  height="100"
                  quality={100}
                  priority={true}
                  layout="responsive"
                  style={{
                    objectFit: "contain",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </Box>
            </Flex>

            <Text fontSize={{ base: "16px", lg: "24px" }} fontWeight={"700"}>
              Quality-Driven
            </Text>

            <Text fontSize={{ base: "14px", lg: "16px" }}>
              Our core values revolve around enhancing your business with the
              best service in the industry.
            </Text>
          </Flex>
        </GridItem>
        <GridItem
          p="2rem"
          bg="brand.grayb"
          borderRadius={"2rem"}
          boxShadow={"rgba(16, 24, 40, 0.03)"}
          color="white"
        >
          <Flex
            justifyContent={"space-between"}
            flexDirection={"column"}
            gap={"5"}
          >
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text fontSize={{ base: "24px", lg: "48px" }} fontWeight={"700"}>
                04
              </Text>

              <Box w={{ lg: "80px", base: "40px" }} h={"full"}>
                <Image
                  src={"/assets/images/cardboard-box-nobackground.png"}
                  alt="Truck image"
                  width="100"
                  height="100"
                  quality={100}
                  priority={true}
                  layout="responsive"
                  style={{
                    objectFit: "contain",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </Box>
            </Flex>

            <Text fontSize={{ base: "16px", lg: "24px" }} fontWeight={"700"}>
              Comprehensive Solutions
            </Text>

            <Text fontSize={{ base: "14px", lg: "16px" }}>
              From logistics and procurement to IT equipment supply, we offer
              all-in-one solutions for your convenience.
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
