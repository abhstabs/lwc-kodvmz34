import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {
  @api
  label = "";

  @api no_of_rows;

  @api value_to_split;

  rows;

  connectedCallback(){
    this.value_to_split = parseInt(this.value_to_split);
    this.rows = [];
    for(let i=0; i<this.no_of_rows+1; i++){
      this.rows.push((new Date().getFullYear() + i).toString());
    }
    console.log(this.no_of_rows, this.value_to_split);
    console.log(this.rows);
  }

  checkInitiativeSplit(){
    let sum = 0;
    let temp = this.template.querySelectorAll('lightning-input');
    console.log(typeof(temp));
    console.log(temp);
    temp.forEach(function(item, index){
      sum += parseInt(item.value);
    })

    console.log(sum);
    if (sum!=this.value_to_split){
      this.dispatchEvent(new CustomEvent("spliterror"));
      return;
    }
  }

}
