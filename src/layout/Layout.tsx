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
  Modal,
  Grid,
  Col,
  TextInput,
  Textarea,
  Select,
  MultiSelect,
  Switch,
  Button,
} from "@mantine/core";
import {
  BiCalendar,
  BiListCheck,
  BiListMinus,
  BiNote,
  BiParagraph,
  BiStar,
  BiSun,
  BiText,
  BiTime,
  BiTimer,
} from "react-icons/bi";
import {
  FaStickyNote,
  FaJira,
  FaGithub,
  FaUserCircle,
  FaPlus,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DatePicker, TimeInput } from "@mantine/dates";

interface ILayoutProps {
  children: any;
}

const Layout: React.FC<PropsWithChildren<ILayoutProps>> = ({ children }) => {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [createModalOpened, setCreateModalOpened] = useState(false);
  const [data, setData] = useState(["React", "Angular", "Svelte", "Vue"]);

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
          width={{ sm: 100, lg: 100 }}
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
              <ActionIcon
                size="xl"
                variant="filled"
                color="grape"
                radius="xl"
                onClick={() => setCreateModalOpened(true)}
              >
                <FaPlus size="16" />
              </ActionIcon>
              <ActionIcon
                size="lg"
                variant="light"
                color="yellow"
                radius="xl"
                onClick={() => navigate("/")}
              >
                <FaStickyNote size="16" />
              </ActionIcon>
              <ActionIcon
                size="lg"
                variant="light"
                color="green"
                radius="xl"
                onClick={() => navigate("/github")}
              >
                <FaGithub size="16" />
              </ActionIcon>
              <ActionIcon
                size="lg"
                variant="light"
                color="blue"
                radius="xl"
                onClick={() => navigate("/jira")}
              >
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
      <Modal
        opened={createModalOpened}
        onClose={() => setCreateModalOpened(false)}
        centered
        size="lg"
        closeOnClickOutside={false}
        title="Create new Task"
        radius="md"
      >
        <Grid>
          <Col span={12}>
            <TextInput
              icon={<BiText />}
              label="Task Name"
              radius="md"
              placeholder="Name"
              required
            />
          </Col>
          <Col span={12}>
            <Textarea
              icon={<BiParagraph />}
              label="Task Description"
              radius="md"
              placeholder="Description"
              required
            />
          </Col>
          <Col span={12}>
            <Select
              icon={<BiStar />}
              label="Task Priority"
              radius="md"
              placeholder="Priority"
              data={[
                {
                  value: "high",
                  label: "High Priority",
                },
                {
                  value: "mid",
                  label: "Medium Priority",
                },
                {
                  value: "low",
                  label: "Low Priority",
                },
              ]}
              required
            />
          </Col>
          <Col span={12}>
            <MultiSelect
              icon={<BiListMinus />}
              label="Add Labels"
              data={data}
              placeholder="Labels"
              radius="md"
              searchable
              creatable
              getCreateLabel={(query) => `+ Create ${query}`}
              onCreate={(query) => setData((current) => [...current, query])}
            />
          </Col>
          <Col span={12}>
            <Switch color="grape" label="Start Now" />
          </Col>
          <Col span={6}>
            <DatePicker
              icon={<BiCalendar />}
              radius="md"
              placeholder="Start Date"
              label="Start Date"
              required
            />
          </Col>
          <Col span={6}>
            <TimeInput
              icon={<BiTimer />}
              radius="md"
              placeholder="Start Time"
              label="Start Time"
              required
            />
          </Col>
          <Col span={6}>
            <DatePicker
              icon={<BiCalendar />}
              radius="md"
              placeholder="Due Date"
              label="Due Date"
              required
            />
          </Col>
          <Col span={6}>
            <TimeInput
              icon={<BiTimer />}
              radius="md"
              placeholder="Due Time"
              label="Due Time"
              required
            />
          </Col>

          <Col span={12}>
            <Button
              color="grape"
              leftIcon={<BiListCheck />}
              radius="md"
              fullWidth
            >
              Create Task
            </Button>
          </Col>
        </Grid>
      </Modal>
      {children}
    </AppShell>
  );
};

export default Layout;
