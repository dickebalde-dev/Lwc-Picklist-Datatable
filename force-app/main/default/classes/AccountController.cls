public with sharing class AccountController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id, Name, Type, Phone, Fax, Industry, Rating FROM Account];
    }
}