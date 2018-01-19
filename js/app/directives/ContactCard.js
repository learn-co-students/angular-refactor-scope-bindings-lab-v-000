function ContactCard() {
	return {
		scope: {},
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
		restrict: 'E',
                controller: function(){},
                controllerAs: 'card',
                bindToController:{
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
