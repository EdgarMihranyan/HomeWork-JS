import Monitor from '../../../models/pc/monitor-model.js';

export const getMonitorsR = async () => Monitor.find();
export const getMonitorR = async (id) => Monitor.findById(id);
export const deleteMonitorR = async (id) => Monitor.deleteOne({ _id: id });
export const updateMonitorR = async (id, monitorUpd) => Monitor.updateOne(
     { _id: id },
     { $set: monitorUpd },
);
export const createMonitorR = async (monitor) => new Monitor(monitor).save();
