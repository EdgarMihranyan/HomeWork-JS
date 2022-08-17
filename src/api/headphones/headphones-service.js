/* eslint-disable no-prototype-builtins */
import { ServerError } from '../../utils/custom-errors.js';
import {
     createHeadphonesR, getHeadphonessR, getHeadphonesR, deleteHeadphonesR, updateHeadphonesR,
} from './headphones-repository.js';

export const getHeadphonessS = async () => getHeadphonessR();

export const getHeadphonesS = async (id) => {
     const headphones = await getHeadphonesR(id);
     if (headphones == null) throw new ServerError(404, `${id}\` headphones`, 'Headphones not a found');

     return headphones;
};

export const deleteHeadphonesS = async (id) => {
     const headphones = await getHeadphonesS(id);

     if (headphones == null) throw new ServerError(400, `${id}\` headphones`, 'Headphones not a found');

     deleteHeadphonesR(id);
     return headphones;
};

export const createHeadphonesS = async (headphones) => {
     createHeadphonesR(headphones);
};

export const updateHeadphonesS = async (id, headphonesUpd) => {
     await updateHeadphonesR(id, headphonesUpd);
};
