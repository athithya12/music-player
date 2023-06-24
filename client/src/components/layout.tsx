import { Box, Group, Stack, Tabs, Title } from '@mantine/core';
import { SideMenuItemLabelEnum } from 'enums';
import { ReactElement } from 'react';
import { sideMenuItems } from '../constants';
import CurrentlyPlaying from './currently-playing';
import Queue from './queue';

interface Props {
  currentPage: SideMenuItemLabelEnum;
  children: ReactElement;
}

const Layout: React.FC<Props> = ({ currentPage, children }) => {
  return (
    <Group spacing={0} align="flex-start" sx={{ height: '100vh' }}>
      <Tabs
        orientation="vertical"
        variant="pills"
        radius="md"
        pt={80}
        px={16}
        value={currentPage}
        sx={(theme) => ({
          height: '100%',
          borderRight: `1px solid ${theme.colors.gray['4']}`,
        })}
      >
        <Tabs.List>
          {sideMenuItems.map((el) => (
            <Tabs.Tab
              key={el.label}
              icon={el.icon}
              value={el.label}
              disabled={
                el.label === 'Playlists' || el.label === 'Queue' ? true : false
              }
              mb={8}
            />
          ))}
        </Tabs.List>
      </Tabs>
      <Stack
        spacing={0}
        sx={{ flex: 1, height: '100%' }}
        px={16}
        justify="flex-start"
      >
        <Box
          sx={{
            display: 'flex',
            height: 80,
            alignItems: 'center',
          }}
        >
          <Title align="start" order={2}>
            {currentPage}
          </Title>
        </Box>
        <Box sx={{ height: 'calc(100vh - 80px)' }}>{children}</Box>
      </Stack>
      <Stack
        px={16}
        spacing={16}
        sx={(theme) => ({
          height: '100%',
          borderLeft: `1px solid ${theme.colors.gray['4']}`,
        })}
      >
        <CurrentlyPlaying />
        <Queue />
      </Stack>
    </Group>
  );
};

export default Layout;
