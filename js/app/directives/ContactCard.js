function ContactCard() {
	return {
		scope: {},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ contactCtrl.name }}',
				'<label>Email:</label>',
				'{{ contactCtrl.email }}',
				'<label>Phone:</label>',
				'{{ contactCtrl.phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ contactCtrl.username }}</span>',
			'</div>'
		].join(''),
		restrict: 'E',
		controller: 'ContactController as contactCtrl',
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