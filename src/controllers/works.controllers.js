import { Work } from "../models/Work"

export const workPost = async (req, res) => {
    try {
        const { originalActor, title, character, year, imageURL } = req.body;

        const newWork = await new Work({
            originalActor,
            title,
            character,
            year,
            imageURL
        });

        const saveWork = await newWork.save();

        res.status(200).json({
            saveWork
        });
    } catch (error) {
        res.status(500).json({
            msg: error
        });
    };
};

export const worksGet = async (req, res) => {
    try {
        const works = await Work.find({});

        res.status(200).json({
            works
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error
        })
    };
};