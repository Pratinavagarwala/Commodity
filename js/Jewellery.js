class Jewellery {

    constructor() {
      this.g=createElement('h4');
      this.s=createElement('h4');
      this.p=createElement('h4');
      this.d=createElement('h4');
    }
    display(){
        this.g.html("The Current Value of GOLD per gram :57,000 ");
        this.g.position(200,200);
        this.s.html("The Current Value of SILVER per gram :10,000 ");
        this.s.position(300,200);
        this.p.html("The Current Value of PLATINNUM per gram :5,000 ");
        this.p.position(400,200);
        this.d.html("The Current Value of DIAMOND per gram :5,70,000 ");
        this.d.position(500,200);
    }
}