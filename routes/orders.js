const express = require('express'),
      router = express.Router(),
      mongojs = require('mongojs'),
      db = mongojs("mongodb://admin:admin@ds123534.mlab.com:23534/mytasklist", ["orders", "dishes"]);

//get a list of orders
router.get('/orders', function(req, res, next){
  // res.render("tasks.html");
  db.orders.find(function(err,orders){
    if(err){
      res.send(err);
    }else{
      res.json(orders);
    }
  });
});

//get one order
router.get('/orders/:id', function(req, res, next){
  db.orders.findOne({_id: mongojs.ObjectID(req.params.id)},function(err,order){
    if(err){
      res.send(err);
    }else{
      res.json(order);
    }
  });
});

//add a new order
router.post('/orders', function(req, res, next){
  var order = req.body;
  if(!order.state || !order.clientName ||
    !order.paymentTipe || !order.total ||
    !order.detail){
    res.status(400);
    res.json({
      error: "Bad Data"
    });
  }else{
    var date = new Date();
    order.date= date;
    db.orders.save(order, function(err, order){
      if(err){
        res.send(err);
      }else{
        res.json(order);
      }
    });
  }
});

//update a order
router.put('/orders/:id', function(req, res, next){
  var updOrder = req.body;
  if(!updOrder.state || !updOrder.clientName ||
    !updOrder.paymentTipe || !updOrder.total ||
    !updOrder.detail){
    res.status(400);
    res.json({
      error: "Bad Data"
    });
  }else{
    db.orders.update({_id: mongojs.ObjectID(req.params.id)}, updOrder,{}, function(err, order){
      if(err){
        res.send(err);
      }else{
        res.json(updOrder);
      }
    });
  }

});

//delete a order
router.delete('/orders/:id', function(req, res, next){
  db.orders.remove({_id: mongojs.ObjectID(req.params.id)}, function(err, order){
    if(err){
      res.send(err);
    }else{
      res.json(order);
    }
  });
});

module.exports = router;
