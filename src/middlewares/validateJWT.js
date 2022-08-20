import { GenerateJWT } from "../helpers/generateJWT";

// Json Web Token middleware to protect routes.
export const validateToken = (req, res, next) => {
    try {
      const accesToken = req.header('authorization') || req.query.accesToken;
      
      if(!accesToken){
        res.status(400).json({
            msg: 'Access Denied, you need a token to access this route.'
        });
      };

      const jwt = new GenerateJWT(accesToken);
      jwt.validate();

    } catch (error) {
        res.status(400).json({
            msg: 'Access denied, token expired or incorrect.'
        });
    };

    next();
};