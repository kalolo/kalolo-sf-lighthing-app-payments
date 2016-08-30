public with sharing class AccountHandler {

    public AccountHandler() { }

	  public static Account insertNewAccount(String name) {
        Account account = new Account(Name=name);

		    try {
            insert account;
		    } catch (DmlException e) {
            System.debug('Excpetion found when creating account' + e.getMessage());
            return null;
		    }
        return account;
	    }
}
