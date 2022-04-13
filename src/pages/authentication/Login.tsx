import {
  Box,
  Button,
  Card,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { BiAt, BiKey } from "react-icons/bi";

const Login = () => {
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
        <Title order={4}>Log In</Title>
        <Text size="sm">Welcome Back</Text>
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
        <Button mt={20} color="grape" radius="md" fullWidth>
          Log In
        </Button>
        <Button mt={20} variant="subtle" radius="md" fullWidth>
          New User?
        </Button>
      </Card>
    </Box>
  );
};

export default Login;
