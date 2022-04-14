import { Alert, Text } from "@mantine/core";
import { BiHappy } from "react-icons/bi";

const EmptyAlert = () => {
  return (
    <Alert
      radius="md"
      icon={<BiHappy size={16} />}
      title="No Pull Requests"
      color="blue"
    >
      <Text size="sm" weight={500}>
        You have no pull requests that needs reviewing or merging.
      </Text>
    </Alert>
  );
};

export default EmptyAlert;
