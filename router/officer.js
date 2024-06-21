const express = require('express');
const router = express.Router();
const { getOfficer, getOfficerById, addOfficer, updateOfficer, deleteOfficer } = require('../controllers/officer');
router.get('/nhan_vien', getOfficer);
router.get('/nhan_vien/:id', getOfficerById);
router.post('/nhan_vien', addOfficer);
router.put('/nhan_vien/:id', updateOfficer);
router.delete('/nhan_vien/:id', deleteOfficer);
module.exports = router;