import { LightningElement } from 'lwc';
import LightningDatatable from 'lightning/datatable';
import picklistTemplate from './picklistTemplate.html';
import {
    loadStyle
} from 'lightning/platformResourceLoader';
import CustomDataTableResource from '@salesforce/resourceUrl/CustomDatatable';

export default class CustomDatatable extends LightningDatatable {

    static customTypes = {
        picklist : {
               template : picklistTemplate,
               typeAttributes: ['label','placeholder','options','parentrecord'],
           }
    }
    constructor(){
        super();
        Promise.all([
            loadStyle(this, CustomDataTableResource),
        ]).then( ()=>{} )
    }
    
}