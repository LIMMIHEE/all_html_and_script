///Proxy

//const myobj = {neme:"crong", changedValue:0};
const proxy = new Proxy({neme:"crong", changedValue:0}, {
    get : function(target, property, receiver){
        console.log('get value');
        
        // return    target[property];    
        // return    Reflect.get(target,property);  
        return   (property in target) ? target[property] : "anoymous";  
    },
    set : function(target, property,value){
        console.log('set value');
        target['changedValue']++;
        target[property] = value;
    }
});


