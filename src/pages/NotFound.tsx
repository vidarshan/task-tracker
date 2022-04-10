import { Box, Button, Group, Title } from "@mantine/core";
import React from "react";
import { BiLeftArrow, BiSad } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "98vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Group direction="column" position="center">
        <BiSad />
        <Title order={4}>Not Found</Title>
        <Button
          radius="md"
          size="xs"
          leftIcon={<BiLeftArrow />}
          color="grape"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Group>
    </Box>
  );
};

export default NotFound;
