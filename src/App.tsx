import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Box,
  Group,
  ActionIcon,
} from "@mantine/core";
import "./App.css";
import { BiNote, BiSun } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { FaStickyNote, FaJira } from "react-icons/fa";

function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 100 }}
        >
          <Group direction="column" position="center">
            <ActionIcon size="xl" variant="light" color="yellow" radius="xl">
              <FaStickyNote size="18" />
            </ActionIcon>
            <ActionIcon size="xl" variant="light" color="green" radius="xl">
              <AiOutlineGithub size="18" />
            </ActionIcon>
            <ActionIcon size="xl" variant="light" color="blue" radius="xl">
              <FaJira size="18" />
            </ActionIcon>
          </Group>
        </Navbar>
      }
      header={
        <Header height={60} p="md">
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Group>
              <Text size="md">Application header</Text>
              <ActionIcon>
                <BiSun />
              </ActionIcon>
            </Group>
          </Box>
        </Header>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}

export default App;
