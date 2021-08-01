import React from 'react';
import SignupImage from "../assets/Sign Up Page Image.png";
import { useSignupStyles } from "../styles/signUpStyles"
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

const Signup = () => {
    const styles = useSignupStyles();
    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return ( 
        <div className={styles.container}>
            <img className={styles.backgroundImage} src={SignupImage} alt="backgroundimage"></img>
            <div className={styles.content}>
                <div className={styles.title}>Sign up</div>
                <div className={styles.halfInputsDiv}>
                    <div className={styles.inputDiv}>
                        <CssTextField
                            className={styles.inputField}
                            label="First name"
                            variant="outlined"
                            id="custom-css-outlined-input"
                            fullWidth
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className={styles.inputDiv}>
                        <CssTextField
                            className={styles.inputField}
                            label="Last name"
                            variant="outlined"
                            id="custom-css-outlined-input"
                            fullWidth
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <CssTextField
                    className={styles.inputField}
                    label="Email"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    fullWidth
                    onChange={(e) => handleChange(e)}
                />
                <CssTextField
                    className={styles.inputField}
                    label="Password"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    fullWidth
                    onChange={(e) => handleChange(e)}
                />
                <CssTextField
                    className={styles.inputField}
                    label="Repeat password"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    fullWidth
                    onChange={(e) => handleChange(e)}
                />
                <Link className={styles.filledButton}>Sign up</Link>
                <Link to="/login" className={styles.helperText}>Already have an account? Login</Link>
                <Link to="/role-select" className={styles.helperText}>Sign in as demo guest</Link>
            </div>
        </div>
    );
}
 
export default Signup;