import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
const COLUMNS = [
              { label: 'Account Name', fieldName:'Name'},
              {label: 'Phone Number', fieldName:'Phone'},
              {
                  label:'Rating', type:'picklist', fieldName:'Rating',
                  typeAttributes : 
                        {
                            label : 'Chose Rating',
                            placeholder : 'Chose Rating',
                            options : [
                                            { label : 'Hot', value: 'Hot'},
                                            { label : 'Warm', value: 'Warm'},
                                            { label : 'Cold', value: 'Cold'},
                                        ],
                            parentrecord: {fieldName: 'Id'},
                        }
            }
];

export default class LightningDatatableDemo extends LightningElement {
    columns = COLUMNS;
    @track accounts = [];

    @wire(getAccounts)
    wiredgetAccounts({error, data}){
        if(data){
            this.accounts = data;
        }
        else if (error){
            console.log(' ####### error #### ',error);
        }
    }

    handlePicklistChange(event){
        event.stopPropagation();
        console.log(' ####### handlePickList change ');
    }

}