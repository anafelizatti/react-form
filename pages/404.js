import { Box, Button, Image, Text } from "@skynexui/components";
import { useRouter } from "next/router";

import appConfig from "../config.json";

import Head from "next/head";

function IndexPage() {
  return (
    <Head>
      <title>404</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}

export default function Custom404() {
  const roteamento = useRouter();

  return (
    <>
      <IndexPage />
      <Box
        styleSheet={{
          backgroundColor: "#100C1D",
          height: "100vh",
          display: "flex",
          flexDirection: 'column',
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          styleSheet={{
            height: "30%",
          }}
          src="https://cdn.dribbble.com/users/2594343/screenshots/6537210/404-animation-cat.gif"

        ></Image>
    
        <Button
          type="submit"
          iconName="home"
          onClick={function (e) {
            e.preventDefault;
            roteamento.push("/");
          }}
          styleSheet={{
            marginBottom: "20px",
          }}
          buttonColors={{
            contrastColor: appConfig.theme.colors.neutrals["100"],
            mainColor: appConfig.theme.colors.primary["500"],
            mainColorLight: appConfig.theme.colors.primary[400],
            mainColorStrong: appConfig.theme.colors.primary[600],
          }}
        />
      </Box>
    </>
  );
}