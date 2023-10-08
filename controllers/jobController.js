import Job from '../models/JobModel.js';
import {StatusCodes} from 'http-status-codes';
import mongoose from 'mongoose';
import day from 'dayjs';

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
    // console.log(req); //Find cookie here in token
    const { search, jobStatus, jobType, sort } = req.query;
    // const jobs = await Job.find({ createdBy: req.user.userId});

    const queryObject = {
        createdBy: req.user.userId,
    };

    if (search) {
        queryObject.$or = [
            { position: { $regex: search, $options: 'i' } },
            { company: { $regex: search, $options: 'i' } },
        ];
    }
    if (jobStatus && jobStatus !== 'all') {
        queryObject.jobStatus = jobStatus;
    }
    if (jobType && jobType !== 'all') {
        queryObject.jobType = jobType;
    }

    const sortOptions = {
        newest: '-createdAt',
        oldest: 'createdAt',
        'a-z': 'position',
        'z-a': '-position',
    };

    const sortKey = sortOptions[sort] || sortOptions.newest;

    // setup pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const jobs = await Job.find(queryObject)
        .sort(sortKey)
        .skip(skip)
        .limit(limit);

    const totalJobs = await Job.countDocuments(queryObject);
    const numOfPages = Math.ceil(totalJobs / limit);

    //Approach 1:
    // res.status(200).json({ jobs });
    //Approach 2:
    res.status(StatusCodes.OK).json({ totalJobs, numOfPages, currentPage: page, jobs });
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
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);
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

export const showStats = async (req, res) => {
    let stats = await Job.aggregate([
        { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
        { $group: { _id: '$jobStatus', count: { $sum: 1 } } },
    ]);
    stats = stats.reduce((acc, curr) => {
        const { _id: title, count } = curr;
        acc[title] = count;
        return acc;
    }, {});

    const defaultStats = {
        pending: stats.pending || 0,
        interview: stats.interview || 0,
        declined: stats.declined || 0,
    };

    let monthlyApplications = await Job.aggregate([
        { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
        {
            $group: {
                _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
                count: { $sum: 1 },
            },
        },
        { $sort: { '_id.year': -1, '_id.month': -1 } },
        { $limit: 6 },
    ]);
    monthlyApplications = monthlyApplications
        .map((item) => {
            const {
                _id: { year, month },
                count,
            } = item;

            const date = day()
                .month(month - 1)
                .year(year)
                .format('MMM YY');
            return { date, count };
        })
        .reverse();

    res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};