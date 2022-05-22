import { FC } from "react";
import { Text, Stack, Title, Divider } from "@mantine/core";

export const PersonalBody: FC = () => {
  return (
    <>
      <Stack
        align="center"
        justify="center"
        spacing="lg"
        pt={50}
        sx={{ color: "#FFFFFF" }}
      >
        <Title order={1} align="center">
          Personal
        </Title>
        <Title order={2} pt={25} align="center">
          About
        </Title>
        <Text align="center" size="xl">
          Hey there, I&apos;m Noelle, a high school student who does programming
          and works with web development. My pronouns are she/they, and I strive
          to continue to have the passion to lead.
        </Text>
      </Stack>
      <Divider
        mx={250}
        mt={50}
        sx={{
          color: "#FFFFFF",
        }}
      />
      <Stack
        align="center"
        justify="center"
        spacing="lg"
        pt={50}
        sx={{ color: "#FFFFFF" }}
      >
        <Title order={1} align="center">
          Fun Facts
        </Title>
        <Text size="xl" align="center">
          I spend way too much time programming...
        </Text>
      </Stack>
    </>
  );
};
