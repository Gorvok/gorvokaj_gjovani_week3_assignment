const db = require('../models'); // Ensure the path to your models is correct

const index = async (req, res) => {
    try {
        const stars = await db.Star.findAll();
        res.status(200).json(stars);
    } catch (error) {
        console.error('Error fetching stars:', error);
        res.status(500).json({ error: 'An error occurred while fetching stars' });
    }
};

const show = async (req, res) => {
    try {
        const star = await db.Star.findByPk(req.params.id);
        if (star) {
            res.status(200).json(star);
        } else {
            res.status(404).json({ error: 'Star not found' });
        }
    } catch (error) {
        console.error('Error fetching star:', error);
        res.status(500).json({ error: 'An error occurred while fetching the star' });
    }
};

const create = async (req, res) => {
    try {
        const star = await db.Star.create(req.body);
        res.status(201).json(star);
    } catch (error) {
        console.error('Error creating star:', error);
        res.status(500).json({ error: 'An error occurred while creating the star' });
    }
};

const update = async (req, res) => {
    try {
        const star = await db.Star.findByPk(req.params.id);
        if (star) {
            await star.update(req.body);
            res.status(200).json(star);
        } else {
            res.status(404).json({ error: 'Star not found' });
        }
    } catch (error) {
        console.error('Error updating star:', error);
        res.status(500).json({ error: 'An error occurred while updating the star' });
    }
};

const remove = async (req, res) => {
    try {
        const star = await db.Star.findByPk(req.params.id);
        if (star) {
            await star.destroy();
            res.status(200).json({ message: 'Star successfully deleted' });
        } else {
            res.status(404).json({ error: 'Star not found' });
        }
    } catch (error) {
        console.error('Error deleting star:', error);
        res.status(500).json({ error: 'An error occurred while deleting the star' });
    }
};

module.exports = { index, show, create, update, remove };
