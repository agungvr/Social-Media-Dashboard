import apisauce from 'apisauce';

const create = (baseURL = 'https://jsonplaceholder.typicode.com/') => {
	const api = apisauce.create({
		baseURL,
		headers: {
			'Content-Type': 'application/json',
		},
		timeout: 30000,
	});

	const GET_USERS = () => api.get('users');
  const GET_ID_USERS = ({userId}) => api.get(`users/${userId}`);
  const GET_ID_USER_ALBUMS = ({userId}) => api.get(`albums?userId=${userId}`);
  const GET_ID_USER_POSTS = ({userId}) => api.get(`posts?userId=${userId}`);
  const GET_ID_USER_POSTS_COMMENTS = ({postsId}) => api.get(`posts/${postsId}/comments`);


	return {
		api,
		GET_USERS,
    GET_ID_USERS,
    GET_ID_USER_ALBUMS,
    GET_ID_USER_POSTS,
    GET_ID_USER_POSTS_COMMENTS
	};
};

export default {
	create,
};
