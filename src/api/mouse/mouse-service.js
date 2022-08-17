/* eslint-disable no-prototype-builtins */
import { ServerError } from '../../utils/custom-errors.js';
import {
     createMouseR, getMousesR, getMouseR, deleteMouseR, updateMouseR,
} from './mouse-repository.js';

export const getMousesS = async () => getMousesR();

export const getMouseS = async (id) => {
     const mouse = await getMouseR(id);
     if (mouse == null) throw new ServerError(404, `${id}\` mouse`, 'Mouse not a found');

     return mouse;
};

export const deleteMouseS = async (id) => {
     const mouse = await getMouseS(id);

     if (mouse == null) throw new ServerError(400, `${id}\` mouse`, 'Mouse not a found');

     deleteMouseR(id);
     return mouse;
};

export const createMouseS = async (mouse) => {
     createMouseR(mouse);
};

export const updateMouseS = async (id, mouseUpd) => {
     await updateMouseR(id, mouseUpd);
};
