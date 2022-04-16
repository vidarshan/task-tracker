import { Col, Grid, Tabs, Title } from "@mantine/core";
import React from "react";
import { BiCheck, BiLoader, BiPin } from "react-icons/bi";
import Layout from "../../layout/Layout";

const Jira = () => {
  return (
    <Layout>
      <Title order={4}>Tickets</Title>
      <Tabs mt={20} color="grape" variant="pills" tabPadding="xl">
        <Tabs.Tab icon={<BiPin />} label="Assigned">
          <Grid>
            <Col span={12}>content</Col>
          </Grid>
        </Tabs.Tab>
        <Tabs.Tab icon={<BiLoader />} label="In Progress">
          Messages tab content
        </Tabs.Tab>
        <Tabs.Tab icon={<BiCheck />} label="Done">
          Settings tab content
        </Tabs.Tab>
      </Tabs>
    </Layout>
  );
};

export default Jira;
