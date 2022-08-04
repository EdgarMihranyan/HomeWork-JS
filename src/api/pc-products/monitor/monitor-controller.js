/* eslint-disable max-len */
import {
     createMonitorS, deleteMonitorS, getMonitorS, getMonitorsS, updateMonitorS,
} from './monitor-service.js';

export const getMonitorsC = async (req, res, next) => {
     try {
          const got = await getMonitorsS();
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const getMonitorC = async (req, res, next) => {
     try {
          const got = await getMonitorS(req.params.id);
          res.status(200).json(got);
     } catch (err) {
          next(err);
     }
};
export const deleteMonitorC = async (req, res, next) => {
     try {
          await deleteMonitorS(req.params.id);
          res.status(200).json({ message: 'Monitor deleted' });
     } catch (err) {
          next(err);
     }
};
export const createMonitorC = async (req, res, next) => {
     try {
          console.log('aaaaaaaaaaaaaa');
          await createMonitorS(req.body);
          res.status(201).json({ message: 'Monitor created' });
     } catch (err) {
          next(err);
     }
};
export const updateMonitorC = async (req, res, next) => {
     try {
          const { body, params } = req;
          await updateMonitorS(params.id, body);
          res.status(201).json({ message: 'Monitor updated' });
     } catch (err) {
          next(err);
     }
};
