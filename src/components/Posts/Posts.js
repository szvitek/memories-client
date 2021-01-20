import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';

function Posts() {
	const classes = useStyles();
	return (
		<>
			<h1>POSTS</h1>
			<Post />
			<Post />
			<Post />
		</>
	);
}

export default Posts;