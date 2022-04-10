import { Button, Col, Divider, Grid, Modal, Tabs } from "@mantine/core";
import React, { useState } from "react";
import Task from "../components/Task";
import Layout from "../layout/Layout";

const Tasks = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Layout>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        closeOnClickOutside={false}
        title="Create new Task"
        radius="lg"
      ></Modal>
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
