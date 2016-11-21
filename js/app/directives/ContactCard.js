function ContactCard($filter) {
	return {
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
				'{{ ctrl.name }}',
				'<label>Email:</label>',
				'{{ ctrl.email }}',
				'<label>Phone:</label>',
				'{{ ctrl.phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ ctrl.username }}</span>',
			'</div>'
		].join(''),
		controller: function () {
			this.username = $filter('lowercase')(this.username)
		},
		controllerAs: 'ctrl',
		restrict: 'E'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);
