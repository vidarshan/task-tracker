import { Alert } from "@mantine/core";
import React from "react";
import { BiHappy, BiSad } from "react-icons/bi";

const EmptyAlert = () => {
  return (
    <Alert
      radius="md"
      icon={<BiHappy size={16} />}
      title="No Pull Requests"
      color="indigo"
    >
      You have no pull requests that needs reviewing or merging.
    </Alert>
  );
};

export default EmptyAlert;
