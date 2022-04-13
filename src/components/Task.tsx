import {
  Card,
  Text,
  Badge,
  Group,
  ActionIcon,
  Accordion,
  ThemeIcon,
} from "@mantine/core";
import { BiCheck, BiDownArrowAlt, BiPencil, BiTrashAlt } from "react-icons/bi";
import { FaGithub, FaJira, FaLink } from "react-icons/fa";

const Task = () => {
  return (
    <Accordion>
      <Accordion.Item
        label="Today"
        icon={
          <ThemeIcon radius="xl" color="green" variant="light">
            <BiDownArrowAlt size={14} />
          </ThemeIcon>
        }
      >
        <Card mt={20} radius="md" shadow="xl" withBorder>
          <Group direction="row" position="apart">
            <Group>
              <Text size="md" weight={600}>
                #1 Bug Fix
              </Text>
              <Badge size="xs" variant="light" color="red">
                High Priority
              </Badge>
              <Badge size="xs" variant="light" color="green">
                in Progress
              </Badge>
            </Group>
            <Group direction="row" position="left">
              <ActionIcon variant="light" radius="xl" color="green">
                <BiCheck />
              </ActionIcon>
              <ActionIcon variant="light" radius="xl" color="blue">
                <BiPencil />
              </ActionIcon>
              <ActionIcon variant="light" radius="xl" color="red">
                <BiTrashAlt />
              </ActionIcon>
            </Group>
          </Group>
          <Group mt={16}>
            <Text color="red" size="xs" weight={500}>
              Should be done by 12:00 PM
            </Text>
          </Group>

          <Text size="xs" mt={20} weight={500}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            cupiditate officiis, doloribus atque vel reiciendis esse, quo nam
            dolorem, dolor illum? Esse non expedita debitis quae saepe veritatis
            officiis similique?
          </Text>
          <Group mt={20}>
            <ActionIcon size="sm" variant="light" radius="xl" color="green">
              <FaGithub />
            </ActionIcon>
            <ActionIcon size="sm" variant="light" radius="xl" color="blue">
              <FaJira />
            </ActionIcon>
            <ActionIcon size="sm" variant="light" radius="xl" color="gray">
              <FaLink />
            </ActionIcon>
          </Group>
        </Card>
      </Accordion.Item>
    </Accordion>
  );
};

export default Task;
