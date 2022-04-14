import { Col, Grid, Title } from "@mantine/core";
import React from "react";
import EmptyAlert from "../../components/alerts/EmptyAlert";
import PRCard from "../../components/github/PRCard";
import Layout from "../../layout/Layout";

const Github = () => {
  return (
    <Layout>
      <Title order={4}>Pull Requests</Title>
      <Grid>
        <Col span={12}>
          <PRCard />
        </Col>
        <Col span={12}>
          <EmptyAlert />
        </Col>
      </Grid>
    </Layout>
  );
};

export default Github;
