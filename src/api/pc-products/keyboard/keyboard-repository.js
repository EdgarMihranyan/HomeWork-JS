import Keyboard from '../../../models/pc/keyboard-model.js';

export const getKeyboardsR = async () => Keyboard.find();
export const getKeyboardR = async (id) => Keyboard.findById(id);
export const deleteKeyboardR = async (id) => Keyboard.deleteOne({ _id: id });
export const updateKeyboardR = async (id, keyboardUpd) => Keyboard.updateOne(
     { _id: id },
     { $set: keyboardUpd },
);
export const createKeyboardR = async (keyboard) => new Keyboard(keyboard).save();
