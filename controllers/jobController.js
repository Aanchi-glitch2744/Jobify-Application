import Job from '../models/JobModel.js';
import {StatusCodes} from 'http-status-codes';

//import { nanoid } from 'nanoid';
//Nano ID: Library used for generating unique and compact identifiers in web applications or databases. It creates short
// and URL-safe IDs by combining random characters from a set of 64 characters.
// let jobs = [
//     { id: nanoid(), company: 'apple', position: 'front-end' },
//     { id: nanoid(), company: 'google', position: 'back-end' },
// ];

/* StatusCodes
200 OK OK 201 CREATED Created
400 BAD_REQUEST Bad Request 401 UNAUTHORIZED Unauthorized
403 FORBIDDEN Forbidden 404 NOT_FOUND Not Found
500 INTERNAL_SERVER_ERROR Internal Server Error
 */

export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({});
    //Approach 1:
    // res.status(200).json({ jobs });
    //Approach 2:
    res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
    const { company, position } = req.body;
    //Manual approach commented. TIP: use express-async-errors package instead
    // try {
    //     const job = await Job.create({ company, position });
    //     res.status(201).json({ job });
    // } catch (error) {
    //     res.status(500).json({ msg: 'server error' });
    // }

    //Using express-async-errors :
    const job = await Job.create({ company, position });
    res.status(StatusCodes.CREATED).json({ job });
    //Errors automatically caught in server.js error middleware.

};

export const getJob = async (req, res) => {
    const job = await Job.findById(req.params.id);
    //handled in validationMiddleware
    // if (!job) throw new NotFoundError(`no job with id : ${id}`);
    res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(StatusCodes.OK).json({ msg: 'job modified', job: updatedJob });
};

export const deleteJob = async (req, res) => {
    const removedJob = await Job.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removedJob });;
};