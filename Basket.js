class Basket {
   constructor(){
      this.articles = []
      this.total = 0
   }

   addArticle(article){
      this.articles.push(article)
      this.total += article.getTotal()
   }

   consoleInfos(){
      console.log(`${this.articles.length} articles dans mon panier pour un total de ${this.total}€`)
   }
}

module.exports = Basket;