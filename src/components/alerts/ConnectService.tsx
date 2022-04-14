import { Alert, Text } from "@mantine/core";
import React from "react";
import { BiSad } from "react-icons/bi";

const ConnectService = () => {
  return (
    <Alert
      radius="md"
      icon={<BiSad size={16} />}
      title="Connect Github"
      color="green"
    >
      <Text size="sm" weight={500}>
        Please connect your Github account to see your PRs.
      </Text>
    </Alert>
  );
};

export default ConnectService;
