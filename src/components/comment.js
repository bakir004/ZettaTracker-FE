import React from 'react';
import { useCommentStyles } from "../styles/commentStyles"

const Comment = (props) => {
    const styles = useCommentStyles();
    return ( 
        <div className={styles.container}>
            <div className={styles.avatarWrapper}>
                {props.user.avatar ? 
                    <img alt="avatar" className={styles.avatar}></img> : 
                    <div className={styles.letter}>
                        {props.user.firstName[0]}    
                    </div>}
            </div>
            <div className={styles.commentTextWrapper}>
                <div className={styles.commentUser}>
                    {props.user.firstName + " " + props.user.lastName + " "}
                    <span className={styles.timestamp}>August 25, 2018, 7:22 PM</span>
                </div>
                <div className={styles.commentText}>{props.children}</div>
            </div>
        </div>
    );
}
 
export default Comment;