class Slider {
  constructor() {
    this.slideIndex = 1;
    // this.showSlide(this.slideIndex);
    this.showSlideTimer(1);
  }
  
  // n - slideNumber
  // displays each image switches in one second
  showSlideTimer(n) {
    let images = document.getElementsByClassName("display-container");
    let len = images.length;
    for (let i=0; i<len; i++) {
      // call style, which has a 'display' method
      images[i].style.display = 'none';
    }
    // if (this.slideIndex > images.length) {this.slideIndex = 1;}
    // if (this.slideIndex < 1) {this.slideIndex = images.length;}
    setInterval(
      ()=>{    
        images[this.slideIndex-1].style.display = "none";
        this.slideIndex++;
         if (this.slideIndex > images.length) {this.slideIndex = 1;}
        images[this.slideIndex-1].style.display = "block";
      },
    3000);
  }
}

new Slider();

