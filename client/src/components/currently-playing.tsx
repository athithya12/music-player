import {
  ActionIcon,
  Box,
  Group,
  Image,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import {
  IconArrowsShuffle,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerSkipBackFilled,
  IconPlayerSkipForwardFilled,
  IconPointFilled,
  IconRepeat,
  IconRepeatOnce,
} from '@tabler/icons-react';
import { SongRepeatStateEnum, SongStateEnum } from 'enums';
import { currentlyPlayingStore } from 'stores';

const CurrentlyPlaying = () => {
  const {
    currentlyPlayingSong,
    nextSongId,
    previousSongId,
    state,
    shuffle,
    repeatState,
  } = currentlyPlayingStore;
  return (
    <Stack spacing={0}>
      <Box
        sx={{
          display: 'flex',
          height: 80,
          width: 320,
          alignItems: 'center',
        }}
      >
        <Title align="start" order={2}>
          Now Playing
        </Title>
      </Box>
      <Stack spacing={16} align="center">
        <Image
          maw={240}
          mx="auto"
          radius="md"
          src={currentlyPlayingSong?.coverArtUrl}
          alt="Random image"
        />
        <Stack spacing={4} align="center">
          <Title order={3}>{currentlyPlayingSong?.song}</Title>
          <Group spacing={4} align="center">
            <Text color="dimmed" size="sm">
              {currentlyPlayingSong?.artist}
            </Text>
            <IconPointFilled size={12} style={{ marginTop: 1 }} />
            <Text color="dimmed" size="sm">
              {currentlyPlayingSong?.album}
            </Text>
          </Group>
        </Stack>
        <Group spacing={16}>
          <Tooltip label="Shuffle">
            <ActionIcon
              variant="transparent"
              size="sm"
              radius="xl"
              color={shuffle ? 'blue' : 'gray'}
            >
              <IconArrowsShuffle size={16} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Previous">
            <ActionIcon
              variant="transparent"
              size="sm"
              radius="xl"
              disabled={!previousSongId}
            >
              <IconPlayerSkipBackFilled size={16} />
            </ActionIcon>
          </Tooltip>
          <ActionIcon variant="filled" size="xl" radius="xl" color="blue">
            {state === SongStateEnum.PAUSED ? (
              <IconPlayerPlayFilled size={32} />
            ) : (
              <IconPlayerPauseFilled size={32} />
            )}
          </ActionIcon>
          <Tooltip label="Next">
            <ActionIcon
              variant="transparent"
              size="sm"
              radius="xl"
              disabled={!nextSongId}
            >
              <IconPlayerSkipForwardFilled size={16} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Repeat">
            <ActionIcon
              variant="transparent"
              size="sm"
              radius="xl"
              color={
                repeatState === SongRepeatStateEnum.REPEAT ||
                repeatState === SongRepeatStateEnum.REPEAT_ONE
                  ? 'blue'
                  : 'gray'
              }
            >
              {repeatState === SongRepeatStateEnum.REPEAT ||
              repeatState === SongRepeatStateEnum.DISABLED ? (
                <IconRepeat size={16} />
              ) : (
                <IconRepeatOnce size={16} />
              )}
            </ActionIcon>
          </Tooltip>
        </Group>
      </Stack>
    </Stack>
  );
};

export default CurrentlyPlaying;
