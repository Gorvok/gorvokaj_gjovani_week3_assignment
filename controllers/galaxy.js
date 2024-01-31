const db = require('../models'); // Ensure the path to your models is correct

const index = async (req, res) => {
    try {
        const galaxies = await db.Galaxy.findAll();
        res.status(200).json(galaxies);
    } catch (error) {
        console.error('Error fetching galaxies:', error);
        res.status(500).json({ error: 'An error occurred while fetching galaxies' });
    }
};

const show = async (req, res) => {
    try {
        const galaxy = await db.Galaxy.findByPk(req.params.id);
        if (galaxy) {
            res.status(200).json(galaxy);
        } else {
            res.status(404).json({ error: 'Galaxy not found' });
        }
    } catch (error) {
        console.error('Error fetching galaxy:', error);
        res.status(500).json({ error: 'An error occurred while fetching the galaxy' });
    }
};

const create = async (req, res) => {
    try {
        const galaxy = await db.Galaxy.create(req.body);
        res.status(201).json(galaxy);
    } catch (error) {
        console.error('Error creating galaxy:', error);
        res.status(500).json({ error: 'An error occurred while creating the galaxy' });
    }
};

const update = async (req, res) => {
    try {
        const galaxy = await db.Galaxy.findByPk(req.params.id);
        if (galaxy) {
            await galaxy.update(req.body);
            res.status(200).json(galaxy);
        } else {
            res.status(404).json({ error: 'Galaxy not found' });
        }
    } catch (error) {
        console.error('Error updating galaxy:', error);
        res.status(500).json({ error: 'An error occurred while updating the galaxy' });
    }
};

const remove = async (req, res) => {
    try {
        const galaxy = await db.Galaxy.findByPk(req.params.id);
        if (galaxy) {
            await galaxy.destroy();
            res.status(200).json({ message: 'Galaxy successfully deleted' });
        } else {
            res.status(404).json({ error: 'Galaxy not found' });
        }
    } catch (error) {
        console.error('Error deleting galaxy:', error);
        res.status(500).json({ error: 'An error occurred while deleting the galaxy' });
    }
};

module.exports = { index, show, create, update, remove };
