function checkUsersValid(goodUsers) {
	return function(submittedUsers) {
		return submittedUsers.every(function (el) {
			return goodUsers.some(function (sel){
				return sel.id === el.id;
			});
		});
	};
}

module.exports = checkUsersValid;
