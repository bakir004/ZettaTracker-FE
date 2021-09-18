import React from 'react';
import { useSimpleTableStyles } from "../styles/simpleTableStyles"

const SimpleTable = (props) => {
    const styles = useSimpleTableStyles();
    return ( 
        props.rows ? props.rows.map((row,i) => {
            return (
                <div key={i} className={styles.tableRow}>
                    <div className={styles.tableField}>{row.field ? row.field : ""}</div>
                    <div className={styles.tableValue}>{row.value ? row.value : ""}</div>
                </div>
            )
        }) : null
    );
}
 
export default SimpleTable;