import { api, LightningElement } from 'lwc';

export default class LwcPicklist extends LightningElement {
    @api label;
    @api placeholder;
    @api parentrecord;
    @api options;
    @api value;


}