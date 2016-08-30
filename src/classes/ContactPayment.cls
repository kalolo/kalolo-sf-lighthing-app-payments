public class ContactPayment {
	@AuraEnabled
	public static String addPayment(Decimal amount, String description) {

		ContactPayment__c payment = new ContactPayment__c();

		payment.Amount__c = amount;
		payment.Description__c = description;

		insert payment;

		return JSON.serialize('Amount added [' +amount+'] '+ description);
	}

	@AuraEnabled
	public static List<ContactPayment__c> getPayments() {
		List<ContactPayment__c> payments = [SELECT Amount__c,Description__c FROM ContactPayment__c];
		return payments;
	}
	
}
