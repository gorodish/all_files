// var app = function() {
//   // var element = document.getElementById('tagline');
//   // // console.log(element);
//   // debugger;
// //   var elements = document.getElementsByClassName('quote');
// // debugger;
//   // var elements = document.getElementsByTagName('p');
//   // debugger;
//   // var cite = document.getElementsByTagName('cite');

//   // var aside = document.getElementsByTagName('aside');
//   // debugger;
// // var elements = document.querySelectorAll('.quote');
// //   debugger;

// // var element = document.querySelector("#sign-up");
// // var children = element.children;
// // for(var i = 0; i < children.length; i ++){
// //   console.log(children[i]);
// // }

// // var tagline = document.getElementById("tagline");
// // // tagline.innerText = "New tagline";
// // tagline.innerHTML = '<a href="#"><h2>New tagline</h2>';

// // var quotes = document.getElementsByTagName('article');
// // var articleClass = quotes[0].className;
// // quotes[0].className = 'red-quote';

// // var tagline = document.getElementById('tagline');
// // tagline.style.backgroundColor = "yellow";
// // };

// // var hide = document.getElementById('quote-of-the-day');
// // hide.style.visibility = "hidden";
// // // document.getElementById("myP").style.visibility = "hidden";

  
// // var quotes = document.querySelectorAll('quote');
// // // colour.style.backgroundColor = "orange";
// // for(var quote of quotes){
// //   quote.style.backgroundColor = "orange"; 
// // }

// // create the parent container (article)
//   var quoteArticle = document.createElement('article');
//   quoteArticle.classList.add('quote');

// //create the first child(blockquote)
//   var blockquote = document.createElement('blockquote');
//   blockquote.innerText = "Our new quote text";

// // create the blockquotes child(cite)
//   var quotee = document.createElement('cite');
//   quotee.innerText = "Some person";

// //append cite to the blockquote
//   blockquote.appendChild(quotee);

//   //append the blockquote to the article
//   quoteArticle.appendChild(blockquote);

// //add everything to the quote list
//   var quotes = document.querySelector('#quotes');
//   quotes.appendChild(quoteArticle);

// };

var createQuoteArticle = function(){
  var quoteArticle = document.createElement('article');
  quoteArticle.classList.add('quote');
  return quoteArticle;
}

var createBlockQuote = function(quote){
  var blockquote = document.createElement('blockquote');
  blockquote.innerText = quote + ".  ";
  return blockquote;
}

  var createCite = function(author){
    var quotee = document.createElement('cite');
    quotee.innerText = author;
    return quotee;
}

var appendElements = function(quotes, quoteArticle, blockquote, cite){
    blockquote.appendChild(cite);
    quoteArticle.appendChild(blockquote);
    quotes.appendChild(quoteArticle);
}

var addQuote = function(author, quote){
  var quoteArticle = createQuoteArticle();
  var blockquote = createBlockQuote(quote);
  var cite = createCite(author);

  var quotes = document.querySelector('#quotes');
  appendElements(quotes, quoteArticle, blockquote, cite);
}

var quotesArray = [
{quote: "Willy nilly", author: "John"},
{quote: "Ahhhhhhhhh", author: "John Daly"},
{quote: "Jam", author: "Keir"},
{quote: "Oh farts", author: "Last man on earth"}

];

var app = function() {
  for(var quote of quotesArray){
    addQuote(quote.author, quote.quote);
  }
};


window.onload = app;
