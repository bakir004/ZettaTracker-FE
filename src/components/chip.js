import React from 'react';
import {useChipStyles} from "../styles/chipStyles"

const Chip = (props) => {
    const styles = useChipStyles();
    return ( 
        <div className={styles.chip}>
            {props.avatar ? 
                <div className={styles.avatarImageDiv}>
                    <img src={props.avatar} className={styles.avatarImage}></img>
                </div> : 
                <div className={styles.avatarLetterDiv}>
                    <div className={styles.avatarLetter}>Z</div>
                </div>
            }
            <div className={styles.text}>{props.children}</div>
        </div>
    );
}
 
export default Chip;