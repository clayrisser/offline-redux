export const userLogin = (username, password) => (dispatch) => {
	dispatch({
		type: 'USER_LOGIN',
		payload: {
			username,
			password
		}
	});
};
