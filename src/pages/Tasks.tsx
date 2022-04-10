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
  Title,
} from "@mantine/core";
import { DatePicker, TimeInput } from "@mantine/dates";
import React, { useState } from "react";
import {
  BiCalendar,
  BiCheck,
  BiListCheck,
  BiListMinus,
  BiMinus,
  BiParagraph,
  BiStar,
  BiText,
  BiTime,
  BiTimer,
} from "react-icons/bi";
import Task from "../components/Task";
import Layout from "../layout/Layout";

const Tasks = () => {
  return (
    <Layout>
      <Title mb={20} order={3}>
        Tasks
      </Title>
      <Tabs color="grape" variant="default" tabPadding="xl">
        <Tabs.Tab icon={<BiTime />} label="Current">
          <Grid>
            <Col span={12}>
              <Task />
            </Col>
          </Grid>
        </Tabs.Tab>
        <Tabs.Tab icon={<BiCheck />} label="Completed">
          Messages tab content
        </Tabs.Tab>
        <Tabs.Tab icon={<BiMinus />} label="Hold">
          Settings tab content
        </Tabs.Tab>
      </Tabs>
    </Layout>
  );
};

export default Tasks;
