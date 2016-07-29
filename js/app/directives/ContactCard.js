function ContactCard() {
	return {
		templateUrl: 'js/app/directives/contact_card.html',
		controller: function() {

		},
		scope: {},
		controllerAs: 'contact',
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
