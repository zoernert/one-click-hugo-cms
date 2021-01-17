(function() {
   $('.chkout').click(function() {
     var stripe = Stripe('pk_live_rWnhwGfKnwm2aMYyQ50SbZrl');
     stripe.redirectToCheckout({
      items: [
        {sku: 'prod_ImIVb0GHvfilNJ', quantity: 1}
      ],
      successUrl: 'https://corrently.de/service/stromkonto.html',
      cancelUrl: 'https://corrently.de/service/stromkonto.html',
      clientReferenceId: 'blog'
    }).then(function (result) {
    });
});
});
});
