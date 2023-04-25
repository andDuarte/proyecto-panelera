import { validationResult } from 'express-validator';

const validate = (req, res, next) => {
    const result = validationResult(req);

    if(!result.isEmpty()) {
        return res.status(400).json({errors: result})
    }

    next();
}

export{ validate }