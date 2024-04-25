import {
  Box,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import BodyWrapper from "./BodyWrapper";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Flex
      zIndex={"100"}
      minW="20rem"
      h={{ base: "5rem" }}
      align="center"
      mx={"auto"}
      color="white"
      display={"flex"}
      alignItems={"center"}
      textDecoration={"none"}
      bg={"black"}
      position="fixed"
      top={"0px"}
      left={"0px"}
      w={{ base: "full" }}
      fontFamily={"body"}
    >
      <BodyWrapper>
        <Box w={{ base: "full" }} mx="auto">
          <Flex
            zIndex={"100"}
            w={{ base: "full" }}
            h="5rem"
            py="1.2rem"
            align="center"
            justifyContent={"space-between"}
            color="brand.light"
            px={{ base: "1rem" }}
            mx={{ md: "auto" }}
          >
            {" "}
            <a href="/">
              {/* <Flex alignItems={"center"}>
                <Text
                  color={"brand.secondary"}
                  fontWeight={"bold"}
                  fontSize={{ lg: "36px", base: "36px" }}
                >
                  MLS
                </Text>
              </Flex> */}
              <Box w={{ base: "60px" }} h={{ base: "full" }} p={"1.5"}>
                <Image
                  src={"/assets/images/mls_logo.png"}
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
              </Box>
            </a>
            <Flex
              alignItems={"center"}
              fontSize={{ lg: "18px" }}
              fontWeight={"600"}
              justifyContent={"flex-end"}
              display={{ lg: "none", base: "flex" }}
            >
              <Menu isLazy>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon color={"white"} />}
                  variant="outline"
                  flexDirection={"column"}
                />
                <MenuList
                  flexDirection={"column"}
                  display={"flex"}
                  gap={"5"}
                  bg={"black"}
                >
                  <MenuItem bg={"black"}>
                    <Box w={"full"}>
                      <a href={"#home"}>
                        <Text
                          transition="all 0.2s ease-in-out"
                          mr="1rem"
                          color="white"
                          _groupHover={{
                            color: "white",
                            fontWeight: "600",
                          }}
                        >
                          HOME
                        </Text>
                      </a>
                    </Box>
                  </MenuItem>
                  <MenuItem bg={"black"}>
                    <Box w={"full"}>
                      <a href={"#aboutus"}>
                        <Text
                          transition="all 0.2s ease-in-out"
                          mr="1rem"
                          color="white"
                          _groupHover={{
                            color: "white",
                            fontWeight: "600",
                          }}
                        >
                          ABOUT US
                        </Text>
                      </a>
                    </Box>
                  </MenuItem>
                  <MenuItem bg={"black"}>
                    <Box w={"full"}>
                      <a href={"#ourservices"}>
                        <Text
                          transition="all 0.2s ease-in-out"
                          mr="1rem"
                          color="white"
                          _groupHover={{
                            color: "white",
                            fontWeight: "600",
                          }}
                        >
                          OUR SERVICES
                        </Text>
                      </a>
                    </Box>
                  </MenuItem>

                  <MenuItem w={"full"} bg={"black"}>
                    <Box w={"full"}>
                      <a href={"#footer"}>
                        <Box
                          fontWeight={"500"}
                          borderRadius={"0.5rem"}
                          px={"1rem"}
                          py={"0.5rem"}
                          color={"white"}
                          bg={"brand.secondary"}
                          transition={"all 0.2s ease-in-out"}
                          _hover={{ filter: "brightness(105%)" }}
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          CONTACT US
                        </Box>
                      </a>
                    </Box>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={"10"}
              display={{ lg: "flex", base: "none" }}
            >
              <a href={"#home"}>
                <Text>HOME</Text>
              </a>
              <a href={"#aboutus"}>
                <Text>ABOUT US</Text>
              </a>
              <a href={"#ourservices"}>
                <Text>OUR SERVICES</Text>
              </a>

              <a href={"#footer"}>
                <Box
                  fontWeight={"500"}
                  borderRadius={"0.5rem"}
                  px={"1rem"}
                  py={"0.5rem"}
                  color={"white"}
                  bg={"brand.secondary"}
                  transition={"all 0.2s ease-in-out"}
                  _hover={{ filter: "brightness(105%)" }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  CONTACT US
                </Box>
              </a>
            </Flex>
          </Flex>
        </Box>
      </BodyWrapper>
    </Flex>
  );
};

export default Navbar;
