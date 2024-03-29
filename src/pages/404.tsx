import { Flex, Icon, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { RiWhatsappFill } from "react-icons/ri";

export default function Index() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  const size = useWindowSize();

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        // Handler to call on window resize

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const router = useRouter();

  function ToolsMarquee() {
    function Item({ title, url }) {
      return (
        <Flex flexDir="column" align="center" mr="20">
          <Image
            src={url}
            style={{
              width: 150,
              height: 150,
            }}
          />
          <Text mt="2" color="#333" fontWeight="bold">
            {title}
          </Text>
        </Flex>
      );
    }

    return (
      <Flex maxW={1000} mx="auto" w="100%">
        <Marquee>
          <Item
            title="React"
            url="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          />
          <Item
            title="React Native"
            url="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          />
          <Item
            title="Node.js"
            url="https://hermes.digitalinnovation.one/tracks/673c85f4-a1cb-40b7-a6fd-7f9becb379f6.png"
          />
          <Item
            title="MongoDB"
            url="http://mongodb-js.github.io/leaf/mongodb-leaf_512x512@2x.png"
          />
          <Item
            title="Next.js"
            url="https://iconape.com/wp-content/files/gm/82643/svg/next-js.svg"
          />
          <Item
            title="styled components"
            url="https://miro.medium.com/max/318/1*p1TndLk3UsGPBsM7qHPZIw.png"
          />
          {/* <Item
            title="GSAP"
            url="https://assets.codepen.io/16327/hero-logo.svg"
          /> */}
          <Item
            title="Typescript"
            url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
          />
          <Item
            title="Javascript"
            url="https://logospng.org/download/javascript/logo-javascript-1024.png"
          />
        </Marquee>
      </Flex>
    );
  }

  return (
    <>
      <Flex
        flexDir="column"
        justify="space-between"
        bg="#FFF"
        h="100vh"
        w="100vw"
        p="5"
      >
        <Flex flexDir="column">
          <Text
            fontWeight="bold"
            fontFamily="'Comfortaa', cursive"
            color="#000"
            fontSize={isWideVersion ? "5xl" : "4xl"}
          >
            Uppernodes
          </Text>
          <Flex
            maxW={1000}
            w="100%"
            mx="auto"
            align="center"
            mt={!isWideVersion && "5"}
          ></Flex>
        </Flex>

        <Flex
          mt="10"
          flexDir="column"
          bg="#fafafa"
          borderRadius="5"
          p="6"
          maxW={1000}
          w="100%"
          mx="auto"
          mb="10"
        >
          <Text
            fontWeight="medium"
            fontFamily="'Quicksand', sans-serif"
            color="#000"
            fontSize={isWideVersion ? "3xl" : "xl"}
          >
            Página não encontrada
          </Text>
          <Flex mt="4">
            <Text fontWeight="bold" color="#333">
              🔴 404
            </Text>
          </Flex>
          <Flex
            cursor="pointer"
            onClick={() => router.push("/")}
            borderRadius="5"
            mt="4"
            bg="#000"
            justify="center"
            align="center"
            py="3"
            px="6"
          >
            <Text color="#FFF" fontWeight="bold">
              Voltar para página inicial
            </Text>
          </Flex>
        </Flex>

        <Flex flexDir="column" mt="20">
          <Text
            fontWeight="regular"
            fontFamily="'Quicksand', sans-serif"
            color="#555"
            fontSize="xl"
          >
            Ricardo F. S. Domene
          </Text>
          <Text
            fontWeight="regular"
            fontFamily="'Quicksand', sans-serif"
            color="#333"
            my="2"
            fontSize="sm"
          >
            ricardofsdomene@icloud.com
          </Text>
          <Link
            href="https://api.whatsapp.com/send?phone=13473700427&text=Preciso%20de%20um%20aplicativo"
            passHref={true}
          >
            <Text
              cursor="pointer"
              fontWeight="regular"
              fontFamily="'Quicksand', sans-serif"
              color="#333"
              fontSize="md"
            >
              +1 347 370 0427
            </Text>
          </Link>
        </Flex>
      </Flex>
      <Link
        href="https://api.whatsapp.com/send?phone=13473700427&text=Preciso%20de%20um%20aplicativo"
        passHref={true}
      >
        <Flex
          cursor="pointer"
          position="fixed"
          bottom={10}
          right={isWideVersion ? 10 : 4}
        >
          <Icon as={RiWhatsappFill} color="#44C455" fontSize="60" />
        </Flex>
      </Link>
    </>
  );
}
