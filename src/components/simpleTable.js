import React from 'react';
import { useSimpleTableStyles } from "../styles/simpleTableStyles"

const SimpleTable = (props) => {
    const styles = useSimpleTableStyles();
    return ( 
        props.rows ? props.rows.map((row,i) => {
            return (
                <div className={styles.mainInfoRow}>
                    <div className={styles.mainInfoField}>{row.field}</div>
                    <div className={styles.mainInfoValue}>{row.value}</div>
                </div>
            )
        }) : null
    );
}
 
export default SimpleTable;