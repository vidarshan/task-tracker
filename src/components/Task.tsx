import { Card, Title, Text, Badge, Group, ActionIcon } from "@mantine/core";
import React from "react";
import { FaCheck, FaLink, FaStop, FaStopCircle, FaTrash } from "react-icons/fa";

const Task = () => {
  return (
    <Card radius="lg" shadow="xl">
      <Group direction="row" position="apart">
        <Group>
          <Title order={5}>Bug Fixes</Title>
          <Badge color="red" radius="md" variant="light">
            High
          </Badge>
        </Group>
        <Group direction="row">
          <ActionIcon variant="light" radius="xl" size="md" color="green">
            <FaCheck />
          </ActionIcon>
          <ActionIcon variant="light" radius="xl" size="md" color="yellow">
            <FaStop />
          </ActionIcon>
          <ActionIcon variant="light" radius="xl" size="md" color="red">
            <FaTrash />
          </ActionIcon>
        </Group>
      </Group>
      <Text weight={500} sx={{ marginTop: "20px" }} size="sm">
        Bug Fix for the authentication page in my new project
      </Text>

      <Text size="sm"> https://github.com/sample/pr1</Text>
    </Card>
  );
};

export default Task;
