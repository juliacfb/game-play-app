import type { Appointment } from '@/types';
import { getGuild } from './guilds';
import { members } from './members';

export const appointments: Appointment[] = [
  {
    id: 'a1',
    guild: getGuild('g1'),
    category: 'ranked',
    date: '2026-06-18T21:00:00',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    hosted: true,
    members,
  },
  {
    id: 'a2',
    guild: getGuild('g4'),
    category: 'fun',
    date: '2026-06-23T19:00:00',
    description: 'Assalto ao trem e depois caçada no pântano. Tragam munição.',
    hosted: false,
    members: members.slice(0, 2),
  },
  {
    id: 'a3',
    guild: getGuild('g2'),
    category: 'duel',
    date: '2026-06-20T09:00:00',
    description: 'Melhor de 3 no mapa da Dust 2. Quem perder paga o lanche.',
    hosted: true,
    members: members.slice(1),
  },
  {
    id: 'a4',
    guild: getGuild('g3'),
    category: 'ranked',
    date: '2026-06-20T14:20:00',
    description: 'Subindo de patente em squad fechado. Microfone obrigatório.',
    hosted: true,
    members,
  },
  {
    id: 'a5',
    guild: getGuild('g5'),
    category: 'fun',
    date: '2026-06-18T21:00:00',
    description: 'Partidas casuais para testar agentes novos.',
    hosted: true,
    members,
  },
  {
    id: 'a6',
    guild: getGuild('g7'),
    category: 'duel',
    date: '2026-06-25T20:00:00',
    description: 'Treino de redstone: vamos montar a fazenda automática.',
    hosted: false,
    members: members.slice(0, 1),
  },
];

export const getAppointment = (id: string): Appointment | undefined =>
  appointments.find((appointment) => appointment.id === id);
