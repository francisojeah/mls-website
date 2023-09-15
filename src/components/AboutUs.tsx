import { AspectRatio, Box, Text } from "@chakra-ui/react";

const YouTubeVideo = ({ videoId }: { videoId: string }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <AspectRatio ratio={21 / 9}>
      <iframe
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </AspectRatio>
  );
};

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
        textAlign={{ base: "center", lg: "unset" }}
      >
        ABOUT US
      </Text>
      <Text fontSize={{ base: "16px", lg: "24px" }}>
        Modern Logistics services limited is one of the most reliable medium
        sized logistics, procurement and IT equipment suppliers in Nigeria and
        was incorporated in 19th July 2013 as a Limited Liability Company by the
        Companies and Allied Matters Act (CAMA) 1990
      </Text>
      <Box minH={"300"} bg="brand.grayb" borderRadius={"2rem"}>
        <YouTubeVideo videoId="SE_dPa1d4ok?si=Xkk_eXXOtqQY-XPl" />
      </Box>
    </Box>
  );
};

export default AboutUs;
