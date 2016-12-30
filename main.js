function randomQuote() {
  var quotes = [{
      content: '真理惟一可靠的标准就是永远自相符合。',
      author: '欧文'
    },
    {
      content: '时间是一切财富中最宝贵的财富。',
      author: '德奥弗拉斯多'
    },
    {
      content: '这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯。',
      author: '歌德'
    },
    {
      content: '你要知道科学方法的实质，不要去听一个科学家对你说些什么，而要仔细看他在做什么。',
      author: '爱因斯坦'
    },
    {
      content: '伟大的思想能变成巨大的财富。',
      author: '塞内加'
    },
    {
      content: '快乐，是人生中最伟大的事！',
      author: '高尔基'
    }
  ];

  var randomIdx = Math.floor(Math.random() * quotes.length);
  return quotes[randomIdx];
}

$(document).ready(function() {
  $('#quote')
    .on('click', function() {
      var rq = randomQuote();
      $('blockquote p')
        .html(rq.content);
      $('blockquote footer')
        .html(rq.author);
    });
});
