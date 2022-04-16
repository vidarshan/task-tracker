import { Col, Grid, Tabs, Title } from "@mantine/core";
import { BiCheck, BiMinus, BiTime } from "react-icons/bi";
import Task from "../components/Task";
import Layout from "../layout/Layout";

const Tasks = () => {
  return (
    <Layout>
      <Title mb={20} order={4}>
        Tasks
      </Title>
      <Tabs color="grape" variant="pills" tabPadding="xl">
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
