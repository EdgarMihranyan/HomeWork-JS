/* eslint-disable no-prototype-builtins */
import { ServerError } from '../../../utils/custom-errors.js';
import {
     createVideoCardR, getVideoCardsR, getVideoCardR, deleteVideoCardR, updateVideoCardR,
} from './video-card-repository.js';

export const getVideoCardsS = async () => getVideoCardsR();

export const getVideoCardS = async (id) => {
     const videoCard = await getVideoCardR(id);
     if (videoCard == null) throw new ServerError(404, `${id}\` videoCard`, 'Video Card not a found');

     return videoCard;
};

export const deleteVideoCardS = async (id) => {
     const videoCard = await getVideoCardS(id);

     if (videoCard == null) throw new ServerError(400, `${id}\` videoCard`, 'Video Card not a found');

     deleteVideoCardR(id);
     return videoCard;
};

export const createVideoCardS = async (videoCard) => {
     createVideoCardR(videoCard);
};

export const updateVideoCardS = async (id, videoCardUpd) => {
     await updateVideoCardR(id, videoCardUpd);
};
