import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box id="home" w={{ base: "full" }} color={"white"}>
      <Box color={"white"} mt={{ base: "5rem", md: "64px" }}>
        <Grid gridTemplateColumns={"45% 55%"}>
          <GridItem display={"flex"} alignItems={"center"}>
            <Flex flexDirection={"column"}>
              <Text
                fontSize={{ base: "24px", lg: "48px" }}
                fontWeight={"bold"}
                mb={"0.5rem"}
              >
                MODERN LOGISTICS SERVICES LIMITED
              </Text>
              <Text
                color={"brand.secondary"}
                fontSize={{ base: "16px", lg: "24px" }}
                fontWeight={"bold"}
              >
                LOGIN WITH US TO EXPEDITE
              </Text>
            </Flex>
          </GridItem>
          <GridItem w={"full"} h={"full"}>
            <Image
              src={"/assets/images/truck.png"}
              alt="Truck image"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Banner;
