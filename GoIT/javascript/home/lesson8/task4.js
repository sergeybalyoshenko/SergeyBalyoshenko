function Article() {
    this.created = new Date();
    Article.counter++;
    Article.date = this.created;
}

Article.counter = 0;

Article.showStats = function(){
    return 'Всего: ' + this.counter + ', Последняя: ' + this.date;
};

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

console.log(Article.showStats());

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)

console.log(Article.showStats());
