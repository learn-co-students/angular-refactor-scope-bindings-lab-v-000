function ContactCard() {
	return {
		scope: {
		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ card.name }}',
				'<label>Email:</label>',
				'{{ card.email }}',
				'<label>Phone:</label>',
				'{{ card.phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ card.username }}</span>',
			'</div>'
		].join(''),
		controller: function ($scope) {
			
		},
		bindToController: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		controllerAs: 'card',
		restrict: 'E'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);