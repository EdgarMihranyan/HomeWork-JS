/* eslint-disable no-prototype-builtins */
import { ServerError } from '../../utils/custom-errors.js';
import {
     createKeyboardR, getKeyboardsR, getKeyboardR, deleteKeyboardR, updateKeyboardR,
} from './keyboard-repository.js';

export const getKeyboardsS = async () => getKeyboardsR();

export const getKeyboardS = async (id) => {
     const keyboard = await getKeyboardR(id);
     if (keyboard == null) throw new ServerError(404, `${id}\` keyboard`, 'Keyboard not a found');

     return keyboard;
};

export const deleteKeyboardS = async (id) => {
     const keyboard = await getKeyboardS(id);

     if (keyboard == null) throw new ServerError(400, `${id}\` keyboard`, 'Keyboard not a found');

     deleteKeyboardR(id);
     return keyboard;
};

export const createKeyboardS = async (keyboard) => {
     createKeyboardR(keyboard);
};

export const updateKeyboardS = async (id, keyboardUpd) => {
     await updateKeyboardR(id, keyboardUpd);
};
