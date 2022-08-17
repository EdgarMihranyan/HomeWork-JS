/* eslint-disable no-prototype-builtins */
import { ServerError } from '../../utils/custom-errors.js';
import {
     createMonitorR, getMonitorsR, getMonitorR, deleteMonitorR, updateMonitorR,
} from './monitor-repository.js';

export const getMonitorsS = async () => getMonitorsR();

export const getMonitorS = async (id) => {
     const monitor = await getMonitorR(id);
     if (monitor == null) throw new ServerError(404, `${id}\` monitor`, 'Monitor not a found');

     return monitor;
};

export const deleteMonitorS = async (id) => {
     const monitor = await getMonitorS(id);

     if (monitor == null) throw new ServerError(400, `${id}\` monitor`, 'Monitor not a found');

     deleteMonitorR(id);
     return monitor;
};

export const createMonitorS = async (monitor) => {
     createMonitorR(monitor);
};

export const updateMonitorS = async (id, monitorUpd) => {
     await updateMonitorR(id, monitorUpd);
};
