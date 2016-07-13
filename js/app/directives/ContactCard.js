function ContactCard() {
	return {
		scope: {

		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ contact.name }}',
				'<label>Email:</label>',
				'{{ contact.email }}',
				'<label>Phone:</label>',
				'{{ contact.phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ contact.username }}</span>',
			'</div>'
		].join(''),
		restrict: 'E',
		controller: function () {
	    },
		controllerAs: 'contact',
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


// 	function TwitterCard() {
//     return {
//         template: [
//             '<div class="twitter">',
//                 '<a href="{{ twitter.twitterLink }}/{{ twitter.handle }}">Follow @{{ twitter.handle }} on Twitter!</a>',
//             '</div>'
//         ].join(''),
//         scope: {},
//         controller: function () {
//             // this.handle === 'billgates'
//
//             this.twitterLink = 'https://twitter.com';
//         },
//         controllerAs: 'twitter',
//         bindToController: {
//             handle: '='
//         },
//         restrict: 'E'
//     };
// }
//
// angular
//     .module('app')
//     .directive('twitterCard', TwitterCard);
