import React, {useState} from 'react';
import LoginImage from "../assets/Login Page Image.png";
import { useLoginStyles } from "../styles/loginStyles"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
    root: {
        "& label": {
            color: "#424E7D",
            fontFamily: "Montserrat",
            fontWeight: "500",
        },
        "& label.Mui-focused": {
            color: "#424E7D"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#424E7D"
        },
        "& .MuiOutlinedInput-root": {
            color: "#424E7D",
            fontFamily: "Montserrat",
            fontWeight: "500",
            "& fieldset": {
                borderColor: "#424E7D",
                border: "2px solid #424E7D",
                borderRadius: "7px"
            },
            "&:hover fieldset": {
                borderColor: "#424E7D"
            },
            "&.Mui-focused fieldset": {
                color: "#424E7D",
                borderColor: "#424E7D"
            }
        }
    }
})(TextField);

const Login = () => {
    const styles = useLoginStyles();

    const [data, setData] = useState({});

    const handleChange = (e, property) => {
        let obj = data;
        data[property] = e.target.value;
        setData(obj)
        console.log(data)
    }

    return ( 
        <div className={styles.container}>
            <img className={styles.backgroundImage} src={LoginImage} alt="backgroundimage"></img>
            <div className={styles.content}>
                <div className={styles.title}>Login</div>
                <CssTextField
                    className={styles.inputField}
                    label="Email"
                    variant="outlined"
                    id="custom-css-outlined-input1"
                    fullWidth
                    onChange={(e) => handleChange(e, "email")}
                />
                <CssTextField
                    className={styles.inputField}
                    label="Password"
                    variant="outlined"
                    id="custom-css-outlined-input2"
                    fullWidth
                    onChange={(e) => handleChange(e, "password")}
                />
                <Link to="/forgot-password" className={styles.helperText}>Forgot password?</Link>
                <Link to="/dashboard" className={styles.filledButton}>Login</Link>
                <Link to="/signup" className={styles.helperText}>Don't have an account? Sign up</Link>
            </div>
        </div>
    );
}
 
export default Login;