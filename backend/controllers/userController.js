//Controllador de Signin y Signup
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypjs = require('bcryptjs')

const signUpUsers = async (req, res) => {
    let { nombre, apellido, email, password, from} = req.body
    try{
        const userExist = await User.findOne({ email });
        if(userExist){
            res.json({
                success: false,
                message:"User already exists, please login"
            })
        } else {
            const passwordHash = await bcrypjs.hash(password, 10);
            const newUser = new User({
                nombre,
                apellido,
                email,
                password: passwordHash,
                from
            })
            console.log(newUser)
            if(from == "form-signup"){
                await newUser.save();
                res.json({
                    success: true,
                    message:"User registered successfully"
                })

            }
        }
    } catch (error) {
        res.json({
            success: false,
            message: "Something went wrong, please try again later"
        })
    }

}

const signInUsers = async (req, res) => {
    const { email, password } = req.body
     console.log(req.body)
    try{
        const userExist = await User.findOne({ email });
        if(userExist){
            const passwordMatch = await bcrypjs.compare(password, userExist.password);
            if(passwordMatch){
                const token = jwt.sign({email: userExist.email, id: userExist._id}, 'secret', {expiresIn : '1h'})
                res.json({
                    token,
                    success: true,
                    message:"User logged in successfully"
                })
            } else {
                res.json({
                    success: false,
                    message:"Invalid credentials"
                })
            }
        } else {
            res.json({
                success: false,
                error: "User does not exist, please register",
                message:"User does not exist, please register"
            })
        }

    }

    catch (error) {
        res.json({
            success: false,
            message: "Something went wrong, please try again later"
        })
    }
}


module.exports = {
    signUpUsers,
    signInUsers
}