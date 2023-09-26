import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
// const YouTubeVideo = ({ videoId }: { videoId: string }) => {
//   const embedUrl = `https://www.youtube.com/embed/${videoId}`;

//   return (
//     <AspectRatio ratio={21 / 9}>
//       <iframe
//         src={embedUrl}
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       />
//     </AspectRatio>
//   );
// };

const AboutUs = () => {
  return (
    <Box
      id="aboutus"
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
        color={"brand.secondary"}
        fontWeight={"bold"}
        fontSize={{ base: "24px", lg: "48px" }}
        textAlign={"center"}
      >
        ABOUT US
      </Text>
      <Grid
        gridTemplateColumns={{ lg: "40% 40%", base: "unset" }}
        justifyContent={"space-between"}
        fontSize={"14px"}
        gap={{ lg: "full", base: "10" }}
      >
        <GridItem>
          <Text fontSize={{ base: "16px", lg: "24px" }}>
            Modern Logistics services limited is one of the most reliable medium
            sized logistics, procurement and IT equipment suppliers in Nigeria
            and was incorporated in 19th July 2013 as a Limited Liability
            Company by the Companies and Allied Matters Act (CAMA) 1990
          </Text>
        </GridItem>
        <GridItem
          borderRadius={"2rem"}
          w={"full"}
          h={"full"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src={"/assets/images/mls-truck-white.png"}
            alt="Truck image"
            width="0"
            height="0"
            sizes="100vw"
            quality={100}
            priority={true}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "2rem",
            }}
          />
        </GridItem>
      </Grid>
      {/* <Box minH={"300"} bg="brand.grayb" borderRadius={"2rem"}>
        <YouTubeVideo videoId="SE_dPa1d4ok?si=Xkk_eXXOtqQY-XPl" />
      </Box> */}
    </Box>
  );
};

export default AboutUs;
