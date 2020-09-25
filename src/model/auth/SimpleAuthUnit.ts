import { AuthResponse, AuthUnit } from './types';

export class SimpleAuthUnit implements AuthUnit {
  Fetch(username: string, password: string): Promise<AuthResponse> {
    if (username === 'root' && password === '123') {
      return Promise.resolve({
        success: true,
        errors: [],
      });
    }

    return Promise.resolve({
      success: false,
      errors: ['Bad auth info'],
    });
  }
}
