import Mouse from '../../../models/pc/mouse-model.js';

export const getMousesR = async () => Mouse.find();
export const getMouseR = async (id) => Mouse.findById(id);
export const deleteMouseR = async (id) => Mouse.deleteOne({ _id: id });
export const updateMouseR = async (id, mouseUpd) => Mouse.updateOne(
     { _id: id },
     { $set: mouseUpd },
);
export const createMouseR = async (mouse) => new Mouse(mouse).save();
