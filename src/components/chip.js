import React from 'react';
import {useChipStyles} from "../styles/chipStyles"

const Chip = (props) => {
    const styles = useChipStyles();
    return ( 
        props.type === "basic" ?
        <div className={styles.basicChip} style={{background: props.color ? props.color : "#888888", }}>
            <div className={styles.basicText}>{props.children}</div>
        </div>
        :
        props.type === "avatar" ? 
        <div className={styles.avatarChip} style={{background: props.color ? props.color : "#888888", }}>
            {props.avatar ? 
                <div className={styles.avatarImageDiv}>
                    <img src={props.avatar} className={styles.avatarImage}></img>
                </div> : 
                <div className={styles.avatarLetterDiv}>
                    <div className={styles.avatarLetter}>{props.children[0]}</div>
                </div>
            }
            <div className={styles.avatarText}>{props.children}</div>
        </div> 
        : 
        <div>lmao</div>
    );
}
 
export default Chip;