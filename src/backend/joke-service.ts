import axios, { AxiosResponse } from 'axios';
import _ from 'lodash';

const API_URL = 'https://icanhazdadjoke.com';
const RESPONSE_DELAY = 2 * 1000;

export async function getJokes(jokesNumber: number): Promise<ReadonlyArray<string>> {
     const responses: Array<Promise<AxiosResponse<string>>> = [];
    
    _.times(jokesNumber, () => responses.push(fetchRandomJoke()));

    const jokesResponses: AxiosResponse<string>[] = await Promise.all(responses)

    await new Promise(r => setTimeout(r, RESPONSE_DELAY));
    
    return jokesResponses.map(res => res.data);
}

const fetchRandomJoke = (): Promise<AxiosResponse<string>> =>
    axios.get<string>(API_URL, { 
        headers: {
            accept: 'text/plain'
        }
    });
