function ContactCard() {
	return {

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
		restrict: 'E',
		scope: {},
		controller: function() {

		},
		controllerAs: "vm",
		bindToController: {
				name: '=',
				email: '=',
				phone: '=',
				username: '='
			}
		}
	};

angular
	.module('app')
	.directive('contactCard', ContactCard);
