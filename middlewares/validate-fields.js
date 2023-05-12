import { validationResult } from 'express-validator';

const validate = (req, res, next) => {
    const result = validationResult(req);

    const { errors } = result

    if(!result.isEmpty()) {
        return res.status(400).json({errors: errors});
    }

    next();
}

export{
    validate
}