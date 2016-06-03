function ContactCard() {
	return {
		scope: {},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ cont.name }}',
				'<label>Email:</label>',
				'{{ cont.email }}',
				'<label>Phone:</label>',
				'{{ cont.phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ cont.username }}</span>',
			'</div>'
		].join(''),
		controller: function () {
			//nothing here
		},
		controllerAs: 'cont',
		bindToController: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		restrict: 'E'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);
