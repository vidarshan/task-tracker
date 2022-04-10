import React, { PropsWithChildren, useEffect, useState } from "react";
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
  useMantineColorScheme,
} from "@mantine/core";
import { BiNote, BiSun } from "react-icons/bi";
import {
  FaStickyNote,
  FaJira,
  FaGithub,
  FaUserCircle,
  FaPlus,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface ILayoutProps {
  children: any;
}

const Layout: React.FC<PropsWithChildren<ILayoutProps>> = ({ children }) => {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  useEffect(() => {
    console.log(theme);
  }, []);

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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Group direction="column" position="center">
              <ActionIcon size="xl" variant="hover" color="red" radius="xl">
                <FaPlus size="16" />
              </ActionIcon>
              <ActionIcon size="lg" variant="light" color="yellow" radius="xl">
                <FaStickyNote size="16" />
              </ActionIcon>
              <ActionIcon size="lg" variant="light" color="green" radius="xl">
                <FaGithub size="16" />
              </ActionIcon>
              <ActionIcon size="lg" variant="light" color="blue" radius="xl">
                <FaJira size="16" />
              </ActionIcon>
            </Group>
            <Group direction="column" position="center">
              <ActionIcon
                size="lg"
                variant="light"
                color="gray"
                radius="xl"
                onClick={() => navigate("/profile")}
              >
                <FaUserCircle size="16" />
              </ActionIcon>
            </Group>
          </Box>
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
              <ActionIcon onClick={() => toggleColorScheme()}>
                <BiSun />
              </ActionIcon>
            </Group>
          </Box>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

export default Layout;
