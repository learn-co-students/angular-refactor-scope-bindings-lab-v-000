function ContactCard() {
	return {
		scope: {},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ vm.name }}',
				'<label>Email:</label>',
				'{{ vm.email }}',
				'<label>Phone:</label>',
				'{{ vm.phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ vm.username }}</span>',
			'</div>'
		].join(''),
		controller: function(){},
		controllerAs: 'vm',
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
