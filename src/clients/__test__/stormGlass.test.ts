import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWeatherTimeNow from '@test/fixtures/stormglass_weather_time_now.json';
import stormGlassWeatherNormalize from '@test/fixtures/stormglass_weather_time_normalize.json';

jest.mock('axios');

describe('StormGlass client', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  it('should return the normalized forecast from the StormGlass service', async () => {
    const lat = -33.793736;
    const lng = 151.289824;

    mockedAxios.get.mockResolvedValue({data: stormGlassWeatherTimeNow});

    const stormGlass = new StormGlass(mockedAxios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual(stormGlassWeatherNormalize);
  });
});
