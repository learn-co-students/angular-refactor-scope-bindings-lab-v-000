function ContactCard() {
	return {
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ c.contact.name }}',
				'<label>Email:</label>',
				'{{ c.contact.email }}',
				'<label>Phone:</label>',
				'{{ c.contact.phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ c.contact.username }}</span>',
			'</div>'
		].join(''),
		scope: {},
		controller: function (){

		},
		controllerAs: 'c',
		bindToController: {
			contact: '='
		}
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);