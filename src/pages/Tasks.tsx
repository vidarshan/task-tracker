import {
  Button,
  Checkbox,
  Col,
  Divider,
  Grid,
  Modal,
  MultiSelect,
  Select,
  Switch,
  Tabs,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import React, { useState } from "react";
import {
  BiCalendar,
  BiListCheck,
  BiListMinus,
  BiParagraph,
  BiStar,
  BiText,
  BiTimer,
} from "react-icons/bi";
import Task from "../components/Task";
import Layout from "../layout/Layout";

const Tasks = () => {
  const [opened, setOpened] = useState(false);
  const [data, setData] = useState(["React", "Angular", "Svelte", "Vue"]);

  return (
    <Layout>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
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
      <Button onClick={() => setOpened(true)}>Open</Button>
      <Tabs color="violet" variant="default" tabPadding="xl">
        <Tabs.Tab label="Current">
          <Grid>
            <Col span={12}>
              <Task />
            </Col>
          </Grid>
        </Tabs.Tab>
        <Tabs.Tab label="Completed">Messages tab content</Tabs.Tab>
        <Tabs.Tab label="Hold">Settings tab content</Tabs.Tab>
      </Tabs>
    </Layout>
  );
};

export default Tasks;
