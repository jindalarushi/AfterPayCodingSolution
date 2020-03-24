module.exports={
    test: function(req, res, next){
        console.log("Hello world.");
        res.status(200).end();
    }
};