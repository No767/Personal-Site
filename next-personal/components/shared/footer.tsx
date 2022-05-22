import { FC } from "react";

import { Text, Group, Grid } from "@mantine/core";
import { SiNextdotjs, SiNetlify } from "react-icons/si";

export const Footer: FC = () => {
  return (
    <>
      <Group position="center" direction="column" spacing="sm" pt={100}>
        <Text size="md" align="center" color="white">
          Built With and Powered By
        </Text>
        <Grid gutter="xl">
          <Grid.Col span={4}>
            <SiNextdotjs className="iconColor" />
          </Grid.Col>
          <Grid.Col span={4}>
            <SiNetlify className="iconColor" />
          </Grid.Col>
        </Grid>
      </Group>
      <Text
        size="md"
        align="center"
        color="white"
        sx={{
          paddingTop: 30,
          paddingBottom: 30,
        }}
      >
        ©2022 No767 - Licensed under GPL-3.0
      </Text>
    </>
  );
};
