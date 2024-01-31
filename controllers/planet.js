const db = require('../models'); // Ensure the path to your models is correct

const index = async (req, res) => {
    try {
        const planets = await db.Planet.findAll();
        res.status(200).json(planets);
    } catch (error) {
        console.error('Error fetching planets:', error);
        res.status(500).json({ error: 'An error occurred while fetching planets' });
    }
};

const show = async (req, res) => {
    try {
        const planet = await db.Planet.findByPk(req.params.id);
        if (planet) {
            res.status(200).json(planet);
        } else {
            res.status(404).json({ error: 'Planet not found' });
        }
    } catch (error) {
        console.error('Error fetching planet:', error);
        res.status(500).json({ error: 'An error occurred while fetching the planet' });
    }
};

const create = async (req, res) => {
    try {
        const planet = await db.Planet.create(req.body);
        res.status(201).json(planet);
    } catch (error) {
        console.error('Error creating planet:', error);
        res.status(500).json({ error: 'An error occurred while creating the planet' });
    }
};

const update = async (req, res) => {
    try {
        const planet = await db.Planet.findByPk(req.params.id);
        if (planet) {
            await planet.update(req.body);
            res.status(200).json(planet);
        } else {
            res.status(404).json({ error: 'Planet not found' });
        }
    } catch (error) {
        console.error('Error updating planet:', error);
        res.status(500).json({ error: 'An error occurred while updating the planet' });
    }
};

const remove = async (req, res) => {
    try {
        const planet = await db.Planet.findByPk(req.params.id);
        if (planet) {
            await planet.destroy();
            res.status(200).json({ message: 'Planet successfully deleted' });
        } else {
            res.status(404).json({ error: 'Planet not found' });
        }
    } catch (error) {
        console.error('Error deleting planet:', error);
        res.status(500).json({ error: 'An error occurred while deleting the planet' });
    }
};

module.exports = { index, show, create, update, remove };
