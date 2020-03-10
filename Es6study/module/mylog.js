

// export default function log(data){
//     console.log(data);
// }



// export const getTime = () => {
//     return Date.now();
// }



//class

export default class MyLogger{
    constructor(props){
        this.lectures = ['java','ios'];
    }
    getLectures(){
        return this.lectures;
    }
    getCurrentHour = () => {
        return (new Date).getHours();
    }
    
    getTime(){
        return Date.now();
    }
}