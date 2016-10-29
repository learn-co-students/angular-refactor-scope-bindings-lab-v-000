function ContactCard() {
	return {
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
		scope: {},
		controllerAs: 'card',
		controller: function() {},
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
