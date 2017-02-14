function ContactCard() {
	return {
		scope: {
			//name: '=',
			//email: '=',
			//phone: '=',
			//username: '='
		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ contactCard.name }}',
				'<label>Email:</label>',
				'{{ contactCard.email }}',
				'<label>Phone:</label>',
				'{{ contactCard.phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ contactCard.username }}</span>',
			'</div>'
		].join(''),
		restrict: 'E',
		controller: function() {

		},
		controllerAs: 'contactCard',
		bindToController: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);
