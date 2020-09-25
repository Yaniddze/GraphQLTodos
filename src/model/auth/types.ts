export type AuthResponse = {
  success: boolean;
  errors: string[];
};

export type AuthState = {
  fetching: boolean;
  data: AuthResponse;
};

export interface AuthUnit {
  Fetch: (username: string, password: string) => Promise<AuthResponse>;
}
