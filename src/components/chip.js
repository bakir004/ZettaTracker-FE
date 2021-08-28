import React from 'react';
import {useChipStyles} from "../styles/chipStyles"
import { lightenColor } from './colorLightner';

const Chip = (props) => {
    const styles = useChipStyles();
    return ( 
        props.type === "basic" ?
        <div className={styles.basicChip} style={{background: props.color ? `linear-gradient(to right, ${props.color},${lightenColor(props.color)}` : "#888888", }}>
            <div className={styles.basicText}>{props.children}</div>
        </div>
        :
        props.type === "avatar" ? 
        <div className={props.expandable ? styles.expandableAvatarChip : styles.avatarChip} style={{background: props.color ? `linear-gradient(to right, ${props.color},${lightenColor(props.color)}` : "#888888"}}>
            {props.avatar ? 
                <div className={styles.avatarImageDiv}>
                    <img src={props.avatar} className={styles.avatarImage} alt="Avatar"></img>
                </div> : 
                <div className={styles.avatarLetterDiv}>
                    <div className={styles.avatarLetter} style={{backgroundColor: props.color ? lightenColor(props.color) : "#666666"}}>{props.children[0]}</div>
                </div>
            }
            <div className={styles.avatarText}>{props.children}</div>
        </div> 
        : 
        <div>lmao</div>
    );
}
 
export default Chip;