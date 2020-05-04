import models from '../models'
import Bcrypt from 'bcrypt'
import config from '../config'
import { google } from 'googleapis'
import { oauth2 } from 'googleapis/build/src/apis/oauth2'
import axios from 'axios'


// here user is created and passed to other middleware 
async function SignUpHandler(req, res, next) {
    const { email, password, name } = req.body;
    const hashPassword = Bcrypt.hashSync(password, parseInt(config.brctyptSalt));
    const User = models.userModel();
    const user = new User({ email, hashPassword, name, source: 'local' })
    try {
        const savedUser = await user.save();
        req.user = savedUser;
        next();
    }
    catch (e) { res.status(400).send({ result: false, error: e }) }

}

function createConnection() {
    return new google.auth.OAuth2(
        config.GoogleClientId,
        config.GoogleClientSecret,
        config.GoggleRedirectUrl
    );
}


async function loginLocal(req, res, next) {
    const { email, password } = req.body
    const User = models.userModel();
    try {
        const savedUser = await User.findOne({ email });
        if (!savedUser) res.status(400).send({ result: false, data: "email not found" })
        const result = await Bcrypt.compare(password, savedUser.hashPassword);
        if (result) {
            req.user = savedUser;
            next();
        }
        else {
            res.status(400).send({ result: false, data: "Wrong  password" })
        }
    } catch (e) {
        console.log(e);
        res.status(400).send({ result: false, data: e })
    }
}

async function loginGoogle(req, res, next) {
    console.log("request recieved")
    try {
        const { code } = req.body;
        const { result, data } = await getTokenFromCode(code);
        if (!result) return res.status(400).send({ result: false, data: data })
        const userInfo = await getuserInfo(data)
        if (!userInfo.result) res.status.send({ result: false, data: userInfo.data })
        //  res.status(200).send({ result: true, data: userInfo.data})
        saveGoogleUser({ email: userInfo.data.email, name: userInfo.data.name, next, req, res })
    } catch (error) {
        res.send({ result: false, data: error })
    }
}

async function saveGoogleUser({ email, name, next, req, res }) {
    const UserModel = models.userModel();
    let fetchUser = await UserModel.findOne({ email });
    try {
        if (!fetchUser) {
            const newuser = new UserModel({ name, email, source: 'google' });
            fetchUser = await newuser.save();
        }
        req.user = fetchUser;
        next();
    }
    catch (e) {
        res.send({ result: false, data: error })
    }
}

async function getuserInfo({ access_token }) {
    try {
        const { data } = await axios.get(`${config.GoogleInfoUrl}${access_token}`)
        return { result: true, data }
    } catch (e) {
        console.log("there is the errro", e)
        return { result: false, data: e }
    }
}

async function getTokenFromCode(code) {

    try {
        const auth = createConnection();
        const data = await auth.getToken(code);
        const tokens = data.tokens;
        return { result: true, data: tokens }
    }
    catch (e) {
        console.log(e)
        return { result: false, data: e }
    }

}

export default {
    SignUpHandler, loginLocal, loginGoogle
}