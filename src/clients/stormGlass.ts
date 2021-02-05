import { AxiosStatic } from 'axios';

export class StormGlass {
  constructor(protected request: AxiosStatic);
  public async fetchPoints(lat: number, lng: number): Promise<{}> {
    return Promise.resolve({});
  }
}
