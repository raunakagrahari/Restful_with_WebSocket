const userService = require('./services');
const { response } = require('../../helpers');
const { logger } = require('../../utilities');
const { BadRequestException } = require('../../helpers/errorResponse');

exports.signUp = async (req, res, next) => {
    try {
        const responsePayload = await userService.signUp(req.body);

        return response.success(res, responsePayload, "success");
    } catch (error) {
        logger.error('Exception Occurred');
        logger.error(error.message);
        logger.error('signUp-Controller ended with exception');
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        let { email, password } = req.body;

        const responsePayload = await userService.login(email, password);

        return response.success(res, responsePayload, 'success');
    } catch (error) {
        logger.error('Exception Occurred');
        logger.error(error.message);
        logger.error('loginController ended with exception');
        next(error);
    }
};

exports.updateProfile = async (req, res, next) => {
    try {
        if(!req.body) throw new BadRequestException('Body is empty');
        const responsePayload = await userService.profileUpdate(req.params.id, req.body);
        return response.success(res, responsePayload, 'success');
    } catch (error) {
        logger.error('Exception Occurred');
        logger.error(error.message);
        logger.error('updateProfile ended with exception');
        next(error);
    }
};

exports.logout = async (req, res, next) => {
    try {
        console.log(req.params.id);
        const responsePayload = await userService.logout(req.params.id );
        return response.success(res, responsePayload, 'successfully logged out');
    } catch (error) {
        logger.error('Exception Occurred');
        logger.error(error.message);
        logger.error('logout ended with exception');
        next(error);
    }
};
