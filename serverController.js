module.exports = {
    
        addOrder(req, res) {
          const db = req.app.get("db");
          // console.log(req.body);
          db.addOrder([req.body.proteinBase, req.body.vegetable, req.body.fruit, req.body.size, req.body.twoweeksorder])
            .then(response => {
            res.json(response);
    
            // console.log(response);
          });
        },
    
        getAllOrders(req, res) {
            const db = req.app.get("db");
            db.getAllOrders().then(orders => {
              res.json(orders);
    
            });
          },
    
          addUser(req, res) {
            const db = req.app.get("db");
            // console.log(req.body);
            db.addUser([req.body.firstName, req.body.lastName, req.body.address, req.body.email])
              .then(response => {
              res.json(response);
      
              // console.log(response);
            });
          },

        //   stripeServer(req, res) {
        //     res.render('server', {

        //     });
        //   }
    
        };