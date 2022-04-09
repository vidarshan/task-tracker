import { Tabs } from "@mantine/core";
import React from "react";
import Layout from "../layout/Layout";

const Tasks = () => {
  return (
    <Layout>
      <Tabs color="violet" variant="default" tabPadding="xl">
        <Tabs.Tab label="Current">Gallery tab content</Tabs.Tab>
        <Tabs.Tab label="Completed">Messages tab content</Tabs.Tab>
        <Tabs.Tab label="Hold">Settings tab content</Tabs.Tab>
      </Tabs>
    </Layout>
  );
};

export default Tasks;
