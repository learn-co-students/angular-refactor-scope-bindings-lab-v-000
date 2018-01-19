function ContactCard() {
	return {
		scope: {},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ ctrl.name }}',
				'<label>Email:</label>',
				'{{ ctrl.email }}',
				'<label>Phone:</label>',
				'{{ ctrl.phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ ctrl.username }}</span>',
			'</div>'
		].join(''),
		restrict: 'E',
		controllerAs: 'ctrl',
		controller: function() {

		},
		bindToController: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		}
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);