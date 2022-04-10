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

  return (
    <Layout>
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
