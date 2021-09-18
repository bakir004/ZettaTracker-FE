import React from 'react';
import { useSubtitleStyles } from "../styles/subtitleStyles"
import Tooltip from '@material-ui/core/Tooltip';

const Subtitle = (props) => {
    const styles = useSubtitleStyles();
    return ( 
        <div className={styles.subtitle} style={!props.dependentBool ? {marginTop: "11px"} : {marginTop: "16px"}}>
            <div className={styles.subtitleText}>{props.children}</div>
            <div className={styles.subtitleActions}>
                {props.actions ? props.actions.map((item, i) => {
                    return (
                        <div key={i} className={styles.subtitleActionWrapper}>
                            <Tooltip title={item.tooltip} arrow onClick={() => item.onClickFunction()}>
                                {item.icon}
                            </Tooltip>
                        </div>
                    )
                }) : null}
            </div>
        </div>
    );
}
 
export default Subtitle;