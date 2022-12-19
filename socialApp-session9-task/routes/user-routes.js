const userRouter = require("express").Router();
const user = require("../app/controlers/user-controllers");
const userController = require("../app/controlers/user-controllers");
const {auth} = require("../app/middleware")
const {adminAuth} =  require("../app/middleware")


userRouter.post("/register", userController.register)

userRouter.post("/login", userController.login)

userRouter.get("/", auth , userController.show)
//change status
userRouter.post("/activate", auth , userController.activate)

userRouter.post("/diactivate", auth , userController.diActivate)
//edit
userRouter.patch("/editme", auth, userController.editMe)

userRouter.patch("/edituser/:id", adminAuth , userController.editUser)
//delete
userRouter.patch("/deleteme", auth, userController.deleteMe)

userRouter.patch("/delete/:id", adminAuth , userController.deleteUser)
//address
userRouter.patch("/address", auth , userController.addAddress)

userRouter.patch("/deketeadress" , auth , userController.deleteAddress)


module.exports = userRouter