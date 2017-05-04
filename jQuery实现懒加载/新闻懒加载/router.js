
app.get('/loadMore', function(req, res){
  var curIdx = req.query.pageIndex;
  var data = [];
  for(var i=0; i<5; i++){
     data.push('新闻' + (parseInt(curIdx) + i));
  }
    res.send(data);
 
});
