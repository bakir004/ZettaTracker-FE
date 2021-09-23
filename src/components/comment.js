import React from 'react';
import { useCommentStyles } from "../styles/commentStyles"
import TextField from '@material-ui/core/TextField'

const Comment = (props) => {
    const styles = useCommentStyles();

    const handleChange = (e) => {
        props.handleChange(e.target.value, props.index)
    }
    const handleKeyPress = (e) => {
        if(e.charCode === 13) {
            if(e.target.value.length > 0) {
                handleInputBlur()
            } else {
                e.preventDefault()
            }
        }
    }
    const handleInputBlur = () => {
        if(props.comment.text.length > 0) {
            props.disableCommentEditing(props.index)
            props.updateTicket()
        }
    }

    return ( 
        <div className={styles.container}>
            <div className={styles.avatarWrapper}>
                {props.comment.user.avatar ? 
                    <img alt="avatar" className={styles.avatar}></img> : 
                    <div className={styles.letter}>
                        {props.comment.user.firstName[0]}    
                    </div>}
            </div>
            <div className={styles.commentTextWrapper}>
                <div className={styles.commentHeader}>
                    <div className={styles.commentUsername}>{props.comment.user.firstName + " " + props.comment.user.lastName + " "}</div>
                    <div className={styles.timestamp}>{props.comment.timestamp.toString()}</div>
                    <div className={styles.commentActionsWrapper} onClick={() => props.handleRemoveComment(props.index)}>
                        Remove
                    </div>
                </div>
                {!props.comment.editing ? <div className={styles.commentText}>{props.comment.text}</div> :
                <TextField 
                    variant="outlined" 
                    autoFocus 
                    InputProps={{
                        classes: {root: styles.editingInput}
                    }}
                    color="primary"
                    classes={{root: styles.textFieldRoot}}
                    multiline
                    value={props.comment.text} 
                    onChange={e => handleChange(e)} 
                    onBlur={() => handleInputBlur()} 
                    onFocus={e => e.target.select()}
                    onKeyPress={e => handleKeyPress(e)}
                ></TextField>}
            </div>
        </div>
    );
}
 
export default Comment;