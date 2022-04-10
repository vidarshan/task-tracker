import {
  Avatar,
  Box,
  Button,
  Col,
  Divider,
  Grid,
  Group,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";
import { BiLock, BiTrash, BiTrashAlt, BiUser } from "react-icons/bi";
import Layout from "../../layout/Layout";

const Profile = () => {
  return (
    <Layout>
      <Group position="apart">
        <Group>
          <Avatar size="lg" src="null" />
          <Box>
            <Title order={6}>John Doe</Title>
            <Text size="xs">john@gmail.com</Text>
          </Box>
        </Group>
        <Button size="xs" radius="md">
          Log out
        </Button>
      </Group>
      <Grid>
        <Col mt={30} span={12}>
          <Title order={4}>Profile Information</Title>
        </Col>
        <Col span={6}>
          <TextInput
            radius="md"
            label="Your Name"
            placeholder="Name"
            required
          />
          <TextInput
            mt={30}
            radius="md"
            label="Your Email"
            placeholder="Email"
            required
          />
        </Col>
        <Col span={12}>
          <Button leftIcon={<BiUser />} mt={16} color="grape" radius="md">
            Update Profile
          </Button>
        </Col>
        <Col mt={30}>
          <Divider />
        </Col>
      </Grid>
      <Grid>
        <Col mt={30} span={12}>
          <Title order={4}>Profile Credentials</Title>
        </Col>
        <Col span={6}>
          <PasswordInput
            radius="md"
            label="Your Password"
            description="Password should be 6 characters or longer"
            placeholder="Password"
            required
          />
          <PasswordInput
            mt={30}
            radius="md"
            label="Confirm Password"
            placeholder="Password Confirmation"
            required
          />
        </Col>
        <Col span={12}>
          <Button leftIcon={<BiLock />} mt={16} color="grape" radius="md">
            Update Credentials
          </Button>
        </Col>
        <Col mt={30}>
          <Divider />
        </Col>
      </Grid>
      <Grid>
        <Col mt={30} span={12}>
          <Title order={4}>Profile Actions</Title>
        </Col>
        <Button leftIcon={<BiTrashAlt />} mt={16} color="red" radius="md">
          Delete Account
        </Button>
      </Grid>
    </Layout>
  );
};

export default Profile;
