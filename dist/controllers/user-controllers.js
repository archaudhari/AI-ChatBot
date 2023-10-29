import User from "../models/User.js";
// To Handle the incoming requests for the users
export const getAllUsers = async (req, res, next) => {
    // Get all users directly from the db
    try {
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.error(error); // Use console.error for error logging
        return res.status(500).json({ message: "Internal Server Error", cause: error.message });
    }
};
export const userSignup = async (req, res, next) => {
    // Get all users directly from the db
    try {
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.error(error); // Use console.error for error logging
        return res.status(500).json({ message: "Internal Server Error", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map