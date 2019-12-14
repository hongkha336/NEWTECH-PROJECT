export interface CardInterface {
    colID: string,
    id: string;
    header: string;
    summary: string;
    description: string;
    //"updateTime":1575997200000,"ticketColor":"#fff","textColor":"#000","asigneeTo":"account",
    updateTime: Number;
    ticketColor:string;
    asigneeTo: string

  }
  
  
  export class Card implements CardInterface {

    constructor(public colID,
      public id: string, public header: string, public summary: string, public description: string,
      public updateTime, public ticketColor, public asigneeTo) {
       
    }
  
  
  
  
  
  
  }
  