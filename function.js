function Anime(name,air_date,genre,recommendedFor){
    this.name = name;
    this.air_date = air_date;
    this.genre = genre;
    this.recommendedFor = recommendedFor;   

    // this.name = function(){
    //     return this._name;
    // }
    // this.name = () => {
    //     return this._name;
    // }
    // this.name = () => this.name_;
}

function seeMore(){
    window.location.href = 'demonSlayerDetail.html';
}