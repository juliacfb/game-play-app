import type { ImageSourcePropType } from 'react-native';

export type CategoryId = 'ranked' | 'duel' | 'fun';

export interface Category {
  id: CategoryId;
  title: string;
  /** Texto curto usado na listagem da Home (ex.: "1x1"). */
  shortTitle: string;
}

export interface Guild {
  id: string;
  name: string;
  game: string;
  owner: boolean;
  icon: ImageSourcePropType;
  /** Imagem larga usada no topo de Detalhes. Sem ela, usa o ícone. */
  banner?: ImageSourcePropType;
}

export type MemberStatus = 'online' | 'busy';

export interface Member {
  id: string;
  username: string;
  avatar: ImageSourcePropType;
  status: MemberStatus;
}

export interface Appointment {
  id: string;
  guild: Guild;
  category: CategoryId;
  /** ISO local, ex.: 2026-06-18T21:00:00 */
  date: string;
  description: string;
  hosted: boolean;
  members: Member[];
}

export interface User {
  id: string;
  firstName: string;
  avatar: ImageSourcePropType;
}
