({
  getPayments : function(component) {

		var getPaymentsAction = component.get("c.getPayments");

		getPaymentsAction.setCallback(this, function(response){
			component.set("v.paymentList", response.getReturnValue());
		});

		$A.enqueueAction(getPaymentsAction);

	},


	addPayment  : function(component) {
		var amount           = component.find("amount").get("v.value"),
	      description      = component.find("description").get("v.value"),
		    addPaymentAction = component.get("c.addPayment");

		addPaymentAction.setParams({
				"amount":   amount,
				"description": component.find("description").get("v.value")
		});

		addPaymentAction.setCallback(this, function(response) {
				this.updateLayout(response, component);
				this.getPayments(component);
				this.showToast('Success!', 'Payment added successfully');
		});

		$A.enqueueAction(addPaymentAction);
	},

	updateLayout: function(response, component) {
			var data = JSON.parse(response.getReturnValue());
	},

	showToast : function(title, message) {
    var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "title": title,
        "message": message
    });
    toastEvent.fire();
}
})
