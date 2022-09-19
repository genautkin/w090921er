export class Card {
    name:string;
    url:string;
    date:number;
    likes:number;
    id:string;
    constructor(name:string,
        url:string,
        id:string = Date.now().toString(36) + Math.random().toString(36).substr(2),
        date:number = new Date().getTime(),
        likes:number = 0) {

        this.id = id
        this.name = name;
        this.url = url;
        this.date = date ;
        this.likes = likes;
    }

    setLikes(likes:number) {
        if (likes>5){
            this.likes = 5;
        }
        else {
            this.likes = likes;
        }
    }
}