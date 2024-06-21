const db = require('../config/dtbs')
const getOfficer = (req, res) => {
    db.query('SELECT id, ho, ten, ngay_sinh, phai, khu_vuc FROM nhan_vien', (error, data, fields, ) => {
        if (error) {
            return res.json({ 'message': error.message });
        } else {
            return res.json(data);
        }
    });
};
const getOfficerById = (req, res) => {
    let id = req.params.id;
    if (isNaN(id)) {
        return res.json({ 'message': 'Nhân viên không tồn tại' });
    }

    let sql = 'SELECT id, ho, ten, ngay_sinh, phai, khu_vuc FROM nhan_vien  WHERE id = ? ';
    db.query(sql, [id], function(err, data) {
        if (err) {
            return res.json({ 'message': err.message });
        } else if (data.length === 0) {
            return res.json({ 'message': 'nhân viên không có' });
        } else {
            return res.json(data[0]);
        }
    });
};
const addOfficer = (req, res) => {
    let { ho, ten, ngay_sinh, phai, khu_vuc } = req.body;
    let sql = "INSERT INTO nhan_vien SET ho=?, ten=?, ngay_sinh=?, phai=?, khu_vuc=?";
    db.query(sql, [ho, ten, ngay_sinh, phai, khu_vuc], (err, d) => {
        if (err) res.json({ 'thongbao': 'Lỗi khi chèn nhan_vien: ' + err });
        else res.json({ "thongbao": "Đã chèn xong nhan_vien" });
    });
};
const updateOfficer = (req, res) => {
    let id = req.params.id;
    let { ho, ten, ngay_sinh, phai, khu_vuc } = req.body;
    let sql = 'UPDATE nhan_vien SET ho=?, ten=?, ngay_sinh=?, phai=?, khu_vuc=? WHERE id = ?';
    db.query(sql, [ho, ten, ngay_sinh, phai, khu_vuc, id], (err, data) => {
        if (err) {
            return res.status(500).json({ 'thongbao': 'Lỗi khi cập nhật nhan vieen: ' + err.message });
        }
        res.json({ 'thongbao': 'Đã cập nhật dự án' });
    });
};

// Delete a project
const deleteOfficer = (req, res) => {
    let id = req.params.id;
    let sql = 'DELETE FROM nhan_vien WHERE id = ?';
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.status(500).json({ 'thongbao': 'Lỗi khi xóa dự án: ' + err.message });
        }
        res.json({ 'thongbao': 'Đã xóa nhan vien' });
    });
};

module.exports = {
    getOfficer,
    getOfficerById,
    addOfficer,
    updateOfficer,
    deleteOfficer
};