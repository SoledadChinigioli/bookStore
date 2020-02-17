import { ResolveStart } from '@angular/router';

export interface Roles {
    editor?: boolean;
    admin?: boolean;
  }
  

export interface UserInterface{
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    photoUrl?: string;
    roles: Roles;
}