import { FC } from "react";
import React, { useState } from "react";
import { NextLink } from "@mantine/next";
import {
  Container,
  Group,
  Button,
  Menu,
  MediaQuery,
  Burger,
  Drawer,
} from "@mantine/core";
import {
  MdHome,
  MdOutlineCollectionsBookmark,
  MdOutlineBook,
  MdWork,
  MdOutlineFreeBreakfast,
} from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { SiGithub } from "react-icons/si";

export const NavBar: FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Container fluid={true} pt={25}>
        <MediaQuery largerThan="md" styles={{ display: "none" }}>
          <Group position="right">
            <Drawer
              opened={opened}
              onClose={() => setOpened(false)}
              title="Register"
              padding="xl"
              size="md"
            >
              <Group position="right" align="center" direction="column">
                <Button
                  variant="outline"
                  size="md"
                  radius="lg"
                  component={NextLink}
                  href="/"
                  target="_self"
                  styles={{ label: { color: "white" } }}
                  leftIcon={<MdHome />}
                >
                  Home
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  radius="lg"
                  component={NextLink}
                  href="/personal"
                  target="_self"
                  styles={{ label: { color: "white" } }}
                  leftIcon={<MdOutlineFreeBreakfast />}
                >
                  Personal
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  radius="lg"
                  component={NextLink}
                  href="/professional"
                  target="_self"
                  styles={{ label: { color: "white" } }}
                  leftIcon={<MdWork />}
                >
                  Professional
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  radius="lg"
                  component={NextLink}
                  href="https://github.com/No767/Personal-Site"
                  target="_self"
                  styles={{ label: { color: "white" } }}
                  leftIcon={<SiGithub />}
                >
                  GitHub
                </Button>
                <Menu
                  control={
                    <Button
                      variant="outline"
                      size="md"
                      radius="lg"
                      styles={{ label: { color: "white" } }}
                      leftIcon={<MdOutlineCollectionsBookmark />}
                    >
                      Showcase
                    </Button>
                  }
                >
                  <Menu.Item
                    component={NextLink}
                    href="/showcase/projects"
                    target="_self"
                    icon={<AiOutlineProject />}
                  >
                    Projects
                  </Menu.Item>
                  <Menu.Item
                    component={NextLink}
                    href="/showcase/research-paper"
                    target="_self"
                    icon={<MdOutlineBook />}
                  >
                    Research Paper
                  </Menu.Item>
                </Menu>
              </Group>
            </Drawer>
            <Burger
              opened={opened}
              onClick={() => setOpened(true)}
              mx={15}
              size="md"
            />
          </Group>
        </MediaQuery>

        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          <Group position="right" align="center" direction="row">
            <Button
              variant="outline"
              size="md"
              radius="lg"
              component={NextLink}
              href="/"
              target="_self"
              styles={{ label: { color: "white" } }}
              leftIcon={<MdHome />}
            >
              Home
            </Button>
            <Button
              variant="outline"
              size="md"
              radius="lg"
              component={NextLink}
              href="/personal"
              target="_self"
              styles={{ label: { color: "white" } }}
              leftIcon={<MdOutlineFreeBreakfast />}
            >
              Personal
            </Button>
            <Button
              variant="outline"
              size="md"
              radius="lg"
              component={NextLink}
              href="/professional"
              target="_self"
              styles={{ label: { color: "white" } }}
              leftIcon={<MdWork />}
            >
              Professional
            </Button>
            <Button
              variant="outline"
              size="md"
              radius="lg"
              component={NextLink}
              href="https://github.com/No767/Personal-Site"
              target="_self"
              styles={{ label: { color: "white" } }}
              leftIcon={<SiGithub />}
            >
              GitHub
            </Button>
            <Menu
              control={
                <Button
                  variant="outline"
                  size="md"
                  radius="lg"
                  styles={{ label: { color: "white" } }}
                  leftIcon={<MdOutlineCollectionsBookmark />}
                >
                  Showcase
                </Button>
              }
            >
              <Menu.Item
                component={NextLink}
                href="/showcase/projects"
                target="_self"
                icon={<AiOutlineProject />}
              >
                Projects
              </Menu.Item>
              <Menu.Item
                component={NextLink}
                href="/showcase/research-paper"
                target="_self"
                icon={<MdOutlineBook />}
              >
                Research Paper
              </Menu.Item>
            </Menu>
          </Group>
        </MediaQuery>
      </Container>
    </>
  );
};
