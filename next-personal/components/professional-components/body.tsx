import { FC } from "react";
import { Text, Stack, Title, Divider, Group, List } from "@mantine/core";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiUbuntu,
  SiFedora,
  SiCentos,
  SiArchlinux,
  SiGithub,
  SiGit,
  SiVisualstudiocode,
  SiVisualstudio,
  SiPycharm,
  SiIntellijidea,
  SiWebstorm,
  SiVim,
  SiNeovim,
  SiDocker,
  SiNginx,
  SiTailwindcss,
  SiFastapi,
  SiDjango,
  SiGnu,
  SiGradle,
  SiRedis,
  SiRabbitmq,
} from "react-icons/si";

export const ProfessionalBody: FC = () => {
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
          Professional
        </Title>
      </Stack>
      <Divider
        mx={250}
        mt={50}
        sx={{
          color: "#FFFFFF",
        }}
      />
      <Title order={1} align="center" sx={{ color: "#FFFFFF" }} pt={25}>
        Tools
      </Title>
      <Group
        align="center"
        position="center"
        direction="row"
        spacing="lg"
        pt={50}
        sx={{ color: "#FFFFFF" }}
      >
        <Stack
          align="center"
          justify="center"
          spacing="md"
          sx={{ color: "#FFFFFF" }}
          px={75}
        >
          <Text>Expert</Text>
          <List sx={{ color: "#FFFFFF" }}>
            <List.Item icon={<SiPython />}>Python</List.Item>
            <List.Item icon={<SiJavascript />}>JavaScript</List.Item>
            <List.Item icon={<SiTypescript />}>TypeScript</List.Item>
            <List.Item icon={<SiReact />}>React</List.Item>
            <List.Item icon={<SiReact />}>React Native</List.Item>
            <List.Item icon={<SiNextdotjs />}>Next.js</List.Item>
            <List.Item icon={<SiMysql />}>MySQL</List.Item>
            <List.Item icon={<SiPostgresql />}>PostgreSQL</List.Item>
            <List.Item icon={<SiMongodb />}>MongoDB</List.Item>
            <List.Item icon={<SiUbuntu />}>Ubuntu</List.Item>
            <List.Item icon={<SiFedora />}>Fedora</List.Item>
            <List.Item icon={<SiCentos />}>CentOS</List.Item>
            <List.Item icon={<SiArchlinux />}>Arch Linux</List.Item>
            <List.Item icon={<SiGithub />}>GitHub</List.Item>
            <List.Item icon={<SiGit />}>Git</List.Item>
          </List>
        </Stack>
        <Stack
          align="center"
          justify="center"
          spacing="md"
          sx={{ color: "#FFFFFF" }}
          px={75}
        >
          <Text>Experience</Text>
          <List sx={{ color: "#FFFFFF" }}>
            <List.Item icon={<SiVisualstudiocode />}>VS Code</List.Item>
            <List.Item icon={<SiVisualstudio />}>Visual Studio</List.Item>
            <List.Item icon={<SiPycharm />}>PyCharm</List.Item>
            <List.Item icon={<SiIntellijidea />}>IntelliJ IDEA</List.Item>
            <List.Item icon={<SiWebstorm />}>WebStorm</List.Item>
            <List.Item icon={<SiVim />}>Vim</List.Item>
            <List.Item icon={<SiNeovim />}>NeoVim</List.Item>
            <List.Item icon={<SiDocker />}>Docker</List.Item>
            <List.Item icon={<SiNginx />}>Nginx</List.Item>
            <List.Item icon={<SiTailwindcss />}>TailWindCSS</List.Item>
            <List.Item icon={<SiFastapi />}>FastAPI</List.Item>
            <List.Item icon={<SiDjango />}>Django</List.Item>
            <List.Item icon={<SiGnu />}>GCC</List.Item>
            <List.Item icon={<SiGradle />}>Gradle</List.Item>
            <List.Item icon={<SiRedis />}>Redis</List.Item>
            <List.Item icon={<SiRabbitmq />}>RabbitMQ</List.Item>
          </List>
        </Stack>
      </Group>

      <Divider
        mx={250}
        mt={100}
        sx={{
          color: "#FFFFFF",
        }}
      />
      <Title order={1} align="center" sx={{ color: "#FFFFFF" }} pt={25}>
        Experience
      </Title>

      <Group
        align="center"
        position="center"
        direction="column"
        spacing="lg"
        pt={50}
        sx={{ color: "#FFFFFF" }}
      >
        <Stack
          align="center"
          justify="center"
          spacing="sm"
          sx={{ color: "#FFFFFF" }}
        >
          <Title order={4} align="center">
            Hardware Leader
          </Title>
          <Title order={5} align="center">
            Robotics Eagles
          </Title>
          <Title order={5} align="center">
            2019 - Present
          </Title>
          <Text align="center" mx={50}>
            We work as an FRC robotics team, and compete within competitions. As
            I am the hardware leader, orchestrating the entirely of the hardware
            workforce, this allowed me to deeply work with my peers, and formed
            deeper connections and trust within each other
          </Text>
        </Stack>

        <Stack
          align="center"
          justify="center"
          spacing="sm"
          sx={{ color: "#FFFFFF" }}
          pt={75}
        >
          <Title order={4} align="center">
            President
          </Title>
          <Title order={5} align="center">
            Girls Who Code
          </Title>
          <Title order={5} align="center">
            2022 - Present
          </Title>
          <Text align="center" mx={50}>
            I have also developed a passion for spreading the words and
            teachings of STEM, and empowering women, including trans and
            non-binary folks, to contribute and learn about STEM and the world
            of software and engineering{" "}
          </Text>
        </Stack>
      </Group>
    </>
  );
};
