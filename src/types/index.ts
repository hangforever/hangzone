import Routes from './Routes';

type ID = string;
export type LatLng = [number, number];

export interface Invitation {
  invitedProfileId: ID;
  inviterProfileId: ID;
  hangzoneId: ID;
  body: string;
}

export interface Hangzone {
  id: string;
  name: string;
  description: string;
  isPrivate: boolean;
  checkedInProfileIds: ID[];
  adminProfileZIds: ID[];
  position: LatLng;
}

export interface ISettings {
  gpsOn: boolean;
  emailOnFriendHang: boolean;
  notifications: boolean;
}

export interface IProfile {
  displayName: string;
  friendIds: { [userId: string]: boolean };
  bio?: string;
  photoURL?: string;
  position?: LatLng;
  hangzoneId?: ID;
}

export enum Status {
  Active = 'active',
  Inactive = 'inactive',
  Offline = 'offline',
}

export type ToolColor = 'green' | 'red' | 'black' | 'turquoise' | 'white';

export { Routes };
