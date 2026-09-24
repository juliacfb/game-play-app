import type { Guild } from '@/types';

export const guilds: Guild[] = [
  {
    id: 'g1',
    name: 'Lendários',
    game: 'League of Legends',
    owner: true,
    icon: require('@/assets/images/guilds/lol.png'),
    banner: require('@/assets/images/banners/lol.png'),
  },
  {
    id: 'g2',
    name: 'Rumo ao topo',
    game: 'Counter Strike: Global Offensive',
    owner: true,
    icon: require('@/assets/images/guilds/csgo.png'),
  },
  {
    id: 'g3',
    name: 'Bora queimar tudo',
    game: 'Apex Legends',
    owner: false,
    icon: require('@/assets/images/guilds/apex.png'),
  },
  {
    id: 'g4',
    name: 'Yeah, Boy',
    game: 'Red Dead Redemption 2',
    owner: false,
    icon: require('@/assets/images/guilds/rdr2.png'),
  },
  {
    id: 'g5',
    name: 'Valorosos',
    game: 'Valorant',
    owner: false,
    icon: require('@/assets/images/guilds/valorant.png'),
  },
  {
    id: 'g6',
    name: 'Rolezão Monstro',
    game: 'Grand Theft Auto V',
    owner: false,
    icon: require('@/assets/images/guilds/gta.png'),
  },
  {
    id: 'g7',
    name: 'Construtores',
    game: 'Minecraft',
    owner: false,
    icon: require('@/assets/images/guilds/minecraft.png'),
  },
  {
    id: 'g8',
    name: 'Battle Insane',
    game: 'Battlefield 1',
    owner: false,
    icon: require('@/assets/images/guilds/battlefield.png'),
  },
];

export const getGuild = (id: string): Guild =>
  guilds.find((guild) => guild.id === id) ?? guilds[0];
