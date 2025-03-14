import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { commentPost } from "../../actions/posts";

const CommentSection = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const commentsRef = useRef();

  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem('profile'));
  const handleClick = async() => {
    const finalComment = `${user.result.name}: ${comment}`;
    const newComments = await dispatch(commentPost(finalComment, post._id));
    setComments(newComments);
    setComment('');
    commentsRef.current.scrollIntoView({ behaviour: 'smooth'});
  };
  return (
    <div className={classes.commentsOuterContainer}>
      <div className={classes.commentsInnerContainer}>
        <Typography gutterBottom variant="h6">
          Comments
        </Typography>
        {comments.map((c, i) => (
          <Typography gutterBottom variant="subtitle1">
            <strong>{c.split(": ")[0]}</strong>:
            {c.split(":")[1]}
          </Typography>
        ))}
        <div ref={commentsRef} />
      </div>
      {user?.result?.name && (
        <div style={{ width: "60%" }}>
          <Typography gutterBottom variant="h6">
            Write a comment
          </Typography>
          <TextField
            fullWidth
            rows={4}
            variant="outlined"
            label="Comment"
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            style={{ marginTop: "10px" }}
            fullWidth
            disabled={!comment}
            color="primary"
            variant="contained"
            onClick={handleClick}
          >
            Comment
          </Button>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
