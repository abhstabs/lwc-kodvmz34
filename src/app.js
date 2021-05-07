import { LightningElement, track, api } from "lwc";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class App extends LightningElement {

  @track
  splitByYear = false;

  @api initiative_value;

  @api close_year;

  no_of_rows = 0;

  value_to_split = 0;




  splitByYearEnable(){
    
    if (this.splitByYear == true){
      this.splitByYear = false;
    }
    else {
      this.splitByYear = true;
    }

  }

  close_year_change(event){
    this.close_year = event.target.value;
    this.no_of_rows = this.close_year - new Date().getFullYear() ;
  }

  initiative_value_change(event){
    this.initiative_value = event.target.value;
  }

  showToast() {
    console.log("ERROR!");
    // const event = new ShowToastEvent({
    //     title: 'Error',
    //     message: '̉Split by Year is not valid. Please check and try again.',
    //     variant: 'error',
    //     mode: 'dismissable'
    // });
    // this.dispatchEvent(event);

  }
  
  
}
