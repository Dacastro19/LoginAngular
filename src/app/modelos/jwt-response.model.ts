export class JwtResponse {
    dataUser: {
      id: number;
      nombre: string;
      accessToken: string;
      expireIn: string;
    };
}
