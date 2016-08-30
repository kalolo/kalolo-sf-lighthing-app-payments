({
	doInit : function(component, event, helper) {
		helper.getPayments(component);

	},

	doAdd  : function(component, event, helper) {
		helper.addPayment(component);

	}
})
