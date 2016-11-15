function ContactCard() {
	return {
		scope: {},
		controller: function() {
			this.hi = "hello";
		},
		controllerAs: 'hey',
		bindToController: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ hey.name }}',
				'<label>Email:</label>',
				'{{ hey.email }}',
				'<label>Phone:</label>',
				'{{ hey.phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ hey.username }}</span>',
			'</div>'
		].join(''),
		restrict: 'E'
};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);