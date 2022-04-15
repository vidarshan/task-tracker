import { Button, Card, Group, Text, ThemeIcon } from "@mantine/core";
import React from "react";
import { BiArrowToRight, BiLink } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const PRCard = () => {
  return (
    <Card mt={20} radius="md" shadow="xl" withBorder>
      <Group direction="row" position="apart">
        <Group>
          <ThemeIcon variant="light" radius="xl" size="lg" color="green">
            <FaGithub />
          </ThemeIcon>
          <span>
            <Text size="xs" weight={600}>
              vidarshanadithya/task-tracker
            </Text>
            <Text color="cyan" mt={10} weight={700}>
              Implemented Sign Up
            </Text>
          </span>
        </Group>

        <Button color="grape" leftIcon={<BiArrowToRight />} radius="md">
          View
        </Button>
      </Group>
    </Card>
  );
};

export default PRCard;
