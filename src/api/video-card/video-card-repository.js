import VideoCard from '../../models/pc/video-card-model.js';

export const getVideoCardsR = async () => VideoCard.find();
export const getVideoCardR = async (id) => VideoCard.findById(id);
export const deleteVideoCardR = async (id) => VideoCard.deleteOne({ _id: id });
export const updateVideoCardR = async (id, videoCardUpd) => VideoCard.updateOne(
     { _id: id },
     { $set: videoCardUpd },
);
export const createVideoCardR = async (videoCard) => new VideoCard(videoCard).save();
