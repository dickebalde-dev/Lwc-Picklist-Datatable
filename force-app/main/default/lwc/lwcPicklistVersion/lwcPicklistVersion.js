import { api, LightningElement } from 'lwc';

export default class LwcPicklistVersion extends LightningElement {

    @api label;
    @api placeholder;
    @api parentrecord;
    @api options;
    @api value;

    handleChange(event){
        this.value = event.detail.value;
        var selectedEvent = new CustomEvent('picklistchanged',{
           composite: true, bubbles: true, cancelable: true,
           detail : {
               data: {context: this.parentrecord, value : this.value}
           }
        });
        this.dispatchEvent(selectedEvent);
        console.log(' ###### test 3 ', this.parentrecord);
    }
}