function element (){
    let colors = ['rgba(30, 150, 201, 0.185)','rgba(167, 30, 201, 0.156)','rgba(190, 201, 30, 0.156)','rgba(30, 201, 36, 0.164)'];
    let width_height = Math.floor(Math.random() * Math.floor(60)) + 'px'
    let X =  parseInt(document.documentElement.clientWidth);
    let Y =  parseInt(document.documentElement.clientHeight);
    let el =  document.createElement('div');
    el.classList.add("circle");
    el.style.width = width_height;
    el.style.height = width_height;
    this.positionX = Math.floor(Math.random() * Math.floor(X-1370));
    this.positionY = Math.floor(Math.random() * Math.floor(Y-970));
    el.style.left = this.positionX + 'px';
    el.style.top =  this.positionY + 'px';
    el.style.zIndex = Math.floor(Math.random() * Math.floor(999));
    el.style.backgroundColor = colors[Math.floor(Math.random() * Math.floor(colors.length))];
    this.create = () =>{
        document.body.appendChild(el);
    }
    this.way = () => {
        let krokX =  this.getWay();
        let krokY =  this.getWay();
        setInterval(() => {
            
            this.positionX += krokX;
            this.positionY += krokY;
            el.style.left = parseInt(this.positionX) + 'px';
            el.style.top = parseInt(this.positionY) + 'px';
            if(this.positionX > X) {
                document.body.removeChild(el);
            }
            if(this.positionY > Y) {
                document.body.removeChild(el);
            }
        }, 40);
    }
    this.getWay = () => {
        let a = Math.floor(Math.random() * Math.floor(5));
        if (a == 0) a = 3;
        return a;
    }
    
}
setInterval(() => {
    let el = new element;
    el.create();
    el.way();
}, 300);

