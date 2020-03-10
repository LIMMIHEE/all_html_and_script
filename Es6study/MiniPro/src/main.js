class Blog {
    constructor(){
        //console.log('Blog is stated!');
        const dataURL = "/data/data.json";
        this.setInitData(dataURL);
    }
    setInitData(dataURL){
        this.getData(dataURL);
        //do somrthing
    }
    getData(dataURL){
        const dReq = new XMLHttpRequest();

        dReq.addEventListener("load",() =>{
            console.log(dReq.responseText);
        });
        dReq.open('GET',dataURL);
        dReq.send();
    }
}

export default Blog;