import { AuthResponse, AuthUnit } from './types';

export class DefaultAuthUnit implements AuthUnit {
  Fetch(username: string, password: string): Promise<AuthResponse> {
    throw new Error('Auth unit not provided');
  }
}
