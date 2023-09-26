"use client";

import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import BodyWrapper from "./BodyWrapper";
import Link from "next/link";
import Image from "next/image";
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
            <Link href="/">
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
                  width="100"
                  height="100"
                  quality={100}
                  priority={true}
                  style={{
                    objectFit: "contain",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </Box>
            </Link>
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
                <MenuList>
                  <MenuItem>
                    <Box w={"full"}>
                      <Link href={"#home"}>
                        <Text
                          transition="all 0.2s ease-in-out"
                          mr="1rem"
                          color="black"
                          _groupHover={{
                            color: "black",
                            fontWeight: "600",
                          }}
                        >
                          HOME
                        </Text>
                      </Link>
                    </Box>
                  </MenuItem>
                  <MenuItem>
                    <Box w={"full"}>
                      <Link href={"#aboutus"}>
                        <Text
                          transition="all 0.2s ease-in-out"
                          mr="1rem"
                          color="black"
                          _groupHover={{
                            color: "black",
                            fontWeight: "600",
                          }}
                        >
                          ABOUT US
                        </Text>
                      </Link>
                    </Box>
                  </MenuItem>
                  <MenuItem>
                    <Box w={"full"}>
                      <Link href={"#ourservices"}>
                        <Text
                          transition="all 0.2s ease-in-out"
                          mr="1rem"
                          color="black"
                          _groupHover={{
                            color: "black",
                            fontWeight: "600",
                          }}
                        >
                          OUR SERVICES
                        </Text>
                      </Link>
                    </Box>
                  </MenuItem>

                  <MenuItem>
                    <Box w={"full"}>
                      <Link href={"#footer"}>
                        <Button
                          color={"white"}
                          bg={"brand.secondary"}
                          transition={"all 0.2s ease-in-out"}
                          _hover={{ filter: "brightness(105%)" }}
                        >
                          CONTACT US
                        </Button>
                      </Link>
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
              <Link href={"#home"}>
                <Text>HOME</Text>
              </Link>
              <Link href={"#aboutus"}>
                <Text>ABOUT US</Text>
              </Link>
              <Link href={"#ourservices"}>
                <Text>OUR SERVICES</Text>
              </Link>

              <Link href={"#footer"}>
                <Button
                  color={"white"}
                  bg={"brand.secondary"}
                  transition={"all 0.2s ease-in-out"}
                  _hover={{ filter: "brightness(105%)" }}
                >
                  CONTACT US
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Box>
      </BodyWrapper>
    </Flex>
  );
};

export default Navbar;
