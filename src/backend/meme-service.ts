import axios from 'axios';
import { IMemeObject } from 'model/meme.model';

const API_URL = 'https://api.imgflip.com/get_memes';

interface MemeResponse {
    success: boolean,
    data: { memes: Array<IMemeObject> }
}

export async function getMemes(): Promise<MemeResponse> {
    const response = await axios.get<MemeResponse>(API_URL);
    return response.data;
}