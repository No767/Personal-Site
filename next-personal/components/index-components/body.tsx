import { FC } from "react";
import {
  Text,
  Stack,
  Title,
  Avatar,
  ActionIcon,
  Divider,
  Group,
  Button,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import { FaGithub, FaGitlab } from "react-icons/fa";

export const IndexBody: FC = () => {
  return (
    <>
      <Stack align="center" justify="center" spacing="lg" pt={50}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/73260931?v=4"
          radius={360}
          size={256}
        />
        <Title
          order={1}
          sx={{
            color: "#FFFFFF",
          }}
          pt={5}
        >
          Noelle
        </Title>
        <Text color="white">
          Creative leader with a sense of community and room for expansion
        </Text>

        <Group>
          <ActionIcon
            sx={{
              fontSize: 200,
              color: "#FFFFFF",
            }}
            component="a"
            href="https://github.com/No767"
          >
            <FaGithub />
          </ActionIcon>
          <ActionIcon
            sx={{
              fontSize: 200,
              color: "#FFFFFF",
            }}
            component="a"
            href="https://gitlab.com/No767"
          >
            <FaGitlab />
          </ActionIcon>
        </Group>
      </Stack>
      <Divider
        mx={500}
        mt={50}
        sx={{
          color: "#FFFFFF",
        }}
      />
      <Group pt={35} position="center">
        <Button
          variant="outline"
          size="xl"
          radius="lg"
          component={NextLink}
          href="/personal"
          target="_self"
          styles={{ label: { color: "white" } }}
        >
          Personal
        </Button>

        <Button
          variant="outline"
          size="xl"
          radius="lg"
          component={NextLink}
          href="/about"
          target="_self"
          styles={{ label: { color: "white" } }}
        >
          Professional
        </Button>
      </Group>
    </>
  );
};
