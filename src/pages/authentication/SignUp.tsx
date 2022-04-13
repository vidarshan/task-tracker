import React from "react";
import {
  Box,
  Button,
  Card,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { BiAt, BiKey, BiUser } from "react-icons/bi";

const SignUp = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "95vh",
      }}
    >
      <Card sx={{ minWidth: "400px" }} shadow="xl" radius="md" withBorder>
        <Title order={4}>Sign Up</Title>
        <Text size="sm">Create Account</Text>
        <TextInput
          icon={<BiUser />}
          mt={20}
          radius="md"
          label="Your Name"
          placeholder="Name"
          required
        />
        <TextInput
          icon={<BiAt />}
          mt={20}
          radius="md"
          label="Your Email"
          placeholder="Email"
          required
        />
        <PasswordInput
          icon={<BiKey />}
          mt={20}
          radius="md"
          label="Your Password"
          placeholder="Password"
          required
        />
        <PasswordInput
          icon={<BiKey />}
          mt={20}
          radius="md"
          label="Confirm Password"
          placeholder="Password Confirmation"
          required
        />
        <Button mt={20} color="grape" radius="md" fullWidth>
          Sign Up
        </Button>
        <Button mt={20} variant="subtle" radius="md" fullWidth>
          Existing User?
        </Button>
      </Card>
    </Box>
  );
};

export default SignUp;
