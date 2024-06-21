const express = require('express');
const router = express.Router();
const { getAccount, updateAccount, getUser, createNewUser, loginAccount, requestRefreshToken, profileAccount, userLogout } = require('../controllers/account');

const middlewareToken = require('../middleware/authenticate');

router.get('/account', getUser);
router.post('/account/register', createNewUser);
router.post('/account/login', loginAccount);
router.get('/profile', middlewareToken.verifyToken, profileAccount);
router.get('/refresh', requestRefreshToken);
router.get('/logout', userLogout);
router.put('/account/:id', updateAccount);
router.get('/account/:id', getAccount);
module.exports = router;