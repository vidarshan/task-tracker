import { Col, Grid, Title } from "@mantine/core";
import React from "react";
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
      </Grid>
    </Layout>
  );
};

export default Github;
