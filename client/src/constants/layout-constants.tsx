import { IconList, IconMusic, IconPlaylist } from '@tabler/icons-react';
import { SideMenuItemLabelEnum } from 'enums';

export const sideMenuItems = [
  {
    label: SideMenuItemLabelEnum.SONGS,
    icon: <IconMusic />,
  },
  {
    label: SideMenuItemLabelEnum.PLAYLISTS,
    icon: <IconPlaylist />,
  },
  {
    label: SideMenuItemLabelEnum.QUEUE,
    icon: <IconList />,
  },
];
