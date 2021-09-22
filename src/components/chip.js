import React from 'react';
import { useChipStyles } from "../styles/chipStyles"
import { lightenColor } from './colorLightner';

const Chip = (props) => {
    const styles = useChipStyles();
    return ( 
        props.type === "basic" ?
        <div onClick={() => props.onClickFunc ? props.onClickFunc() : null} className={styles.basicChip} style={{background: props.bgColor ? `${props.bgColor}` : "#d3d3d3", color: props.color ? props.color : "white"}}>
            {props.children}
        </div>
        :
        props.type === "avatar" ? 
        <div onClick={() => props.onClickFunc ? props.onClickFunc() : null} className={styles.avatarChip} style={{background: props.bgColor ? `${props.bgColor}` : "#d3d3d3", color: props.color ? props.color : "white"}}>
            {props.avatar ? 
                <div className={styles.avatarImageDiv}>
                    <img src={props.avatar} className={styles.avatarImage} alt="Avatar"></img>
                </div> : 
                <div className={styles.avatarLetterDiv}>
                    <div className={styles.avatarLetter} style={{backgroundColor: props.bgColor ? lightenColor(props.bgColor) : "#d3d3d3"}}>{props.children ? props.children[0] : ""}</div>
                </div>
            }
            <div className={styles.avatarText}>{props.children}</div>
        </div> 
        : 
        <div>lmao</div>
    );
}
 
export default Chip;