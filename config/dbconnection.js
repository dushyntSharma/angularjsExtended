(function(db) {
    var mysql = require('mysql');
    var Q = require('q');
    
    var con,config,pool;
    
    db.init = function(configParam) {
        config = configParam;
        pool = mysql.createPool({
            'host' : 'transporter.cltztkbthuok.us-west-2.rds.amazonaws.com',
            'user' : 'minuser',
            'password' : 'p0rtQii123',
            'database' : 'Omeda_Dev',
        });
    }
    
    db.init();
    db.query = function(queryStatement,params,resultantFunction,largeConnectionStatus) {
        var deferred = Q.defer();
        var parameters = [];
        pool.getConnection(function(err, con)
        {
        parameters = params;
        if(params && params.length > 0){
        if(typeof(queryStatement) == 'string' && typeof(resultantFunction) == 'function'){
        con.query(queryStatement, parameters,function (err, result) {
        if(err){
        console.error(new Date()+': While running the query '+queryStatement+' Error in database',err);
        deferred.reject(err);
        return;
        }
        resultantFunction(result,err,con);
        con.release();
        });
        }else if(typeof(queryStatement) == 'string'){
        con.query(queryStatement,parameters, function (err, result1) {
        if(err){
        console.error(new Date()+': Error in database',err);
        deferred.reject(err);
        return;
        }
        deferred.resolve(result1);
        con.release();
        });
        }
        }
        else{
        if(typeof(queryStatement) == 'string' && typeof(resultantFunction) == 'function'){
        con.query(queryStatement, function (err, result) {
        if(err){
        console.error(new Date()+': While running the query '+queryStatement+' Error in database',err);
        deferred.reject(err);
        return;
        }
        resultantFunction(result,err,con);
        con.release();
        });
        }else if(typeof(queryStatement) == 'string'){
        con.query(queryStatement, function (err, result1) {
        if(err){
        console.error(new Date()+': Error in database',err);
        deferred.reject(err);
        return;
        }
        deferred.resolve(result1);
        con.release();
        });
        }
        }
        });
        return deferred.promise;
    }
    })(module.exports);