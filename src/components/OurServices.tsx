import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const OurServices = () => {
  return (
    <Box
      id="ourservices"
      padding={{ lg: "2rem" }}
      mt={{ base: "66px", lg: "120px" }}
      w={{ base: "full" }}
      mx="auto"
    >
      <Text
        color="brand.secondary"
        fontSize={{ base: "24", lg: "36px" }}
        textAlign="center"
        fontWeight="bold"
        display={"block"}
      >
        OUR SERVICES
      </Text>

      <Box
        mt={"3rem"}
        p={{ lg: "2rem", base: "1rem" }}
        gap={"10"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Text fontWeight={"bold"} fontSize={{ base: "24px", lg: "48px" }}>
          MLS - LOGIN WITH US TO EXPEDITE
        </Text>
        <Grid
          gridTemplateColumns={{lg:"40% 60%", base:"unset"}}
          justifyContent={"space-between"}
          fontSize={"14px"}
          gap={"10"}
        >
          <GridItem
            borderRadius={"2rem"}
            w={"full"}
            h={"full"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              src={"/assets/images/vehicles-boxes.jpg"}
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
                borderRadius: "2rem",
              }}
            />
          </GridItem>
          <GridItem>
            <Flex flexDirection={"column"} gap={"10"}>
              <Box borderTop={"1px"} py={"1rem"}>
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "16px", lg: "24px" }}
                  color={"brand.secondary"}
                  mb={"0.5rem"}
                >
                  Logistics Solutions
                </Text>
                <Text fontSize={{ base: "14px", lg: "16px" }}>
                  Modern Logistics Services Limited offers comprehensive
                  logistics solutions designed to streamline the movement of
                  goods and materials. Our efficient logistics services ensure
                  timely delivery, optimized routes, and cost-effective supply
                  chain management. We provide end-to-end logistics support,
                  from warehousing and inventory management to transportation
                  and distribution.
                </Text>
              </Box>
              <Box borderTop={"1px"} py={"1rem"}>
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "16px", lg: "24px" }}
                  color={"brand.secondary"}
                  mb={"0.5rem"}
                >
                  Procurement Services
                </Text>
                <Text fontSize={{ base: "14px", lg: "16px" }}>
                  With a strong focus on procurement excellence, we specialize
                  in sourcing and supplying a wide range of products and
                  equipment to meet the diverse needs of our clients. Our
                  procurement services encompass everything from vendor
                  selection and negotiation to quality control and on-time
                  delivery. Count on us for cost-effective and reliable
                  procurement solutions.
                </Text>
              </Box>
              <Box borderTop={"1px"} borderBottom={"1px"} py={"1rem"}>
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "16px", lg: "24px" }}
                  color={"brand.secondary"}
                  mb={"0.5rem"}
                >
                  IT Equipment Supply
                </Text>
                <Text fontSize={{ base: "14px", lg: "16px" }}>
                  Modern Logistics Services Limited is a trusted IT equipment
                  supplier in Nigeria. We offer a broad selection of
                  high-quality IT hardware and software solutions. Whether you
                  need computers, networking equipment, or software licenses, we
                  have the expertise to source and deliver the right IT
                  equipment to enhance your business operations.
                </Text>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default OurServices;
