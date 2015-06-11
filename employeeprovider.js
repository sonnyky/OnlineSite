
var mongo = require('mongodb');
var connect = require('connect');
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;
var mongouri = "mongodb://sonny_yap:mongolabpa55@ds039421.mongolab.com:39421/userdb"

//placeholder for app instance
var app;

//When instantiating provider class, pass the app instance as well
//So we don't lose the app scope
EmployeeProvider = function(appInstance) {
  var my=this; 
  mongo.connect(mongouri, function(err, database){
    this.db = database;
   appInstance.db = database;
   app = appInstance;
    if(err) throw err;
  });
};

EmployeeProvider.prototype.getCollection= function(callback) {
var my = this;
console.log(app.db);
  app.db.collection('employees', function(error, employee_collection) {
    if( error ) {
     console.log("Something happened. Could not getCollection");
      console.log(error); 
      callback(error);
    }
    else callback(null, employee_collection);
  });
  
};

//find all employees
EmployeeProvider.prototype.findAll = function(callback) {
    this.getCollection(function(error, employee_collection) {
      if( error ) callback(error)
      else {
        employee_collection.find().toArray(function(error, results) {
          if( error ) callback(error)
          else callback(null, results)
        });
      }
    });
};

//find an employee by ID
EmployeeProvider.prototype.findById = function(id, callback) {
    this.getCollection(function(error, employee_collection) {
      if( error ) callback(error)
      else {
        employee_collection.findOne({_id: employee_collection.db.bson_serializer.ObjectID.createFromHexString(id)}, function(error, result) {
          if( error ) callback(error)
          else callback(null, result)
        });
      }
    });
};


//save new employee
EmployeeProvider.prototype.save = function(employees, callback) {
    this.getCollection(function(error, employee_collection) {
      if( error ) callback(error)
      else {
        if( typeof(employees.length)=="undefined")
          employees = [employees];

        for( var i =0;i< employees.length;i++ ) {
          employee = employees[i];
          employee.created_at = new Date();
        }

        employee_collection.insert(employees, function() {
          callback(null, employees);
        });
      }
    });
};

// update an employee
EmployeeProvider.prototype.update = function(employeeId, employees, callback) {
    this.getCollection(function(error, employee_collection) {
      if( error ) callback(error);
      else {
        employee_collection.update(
					{_id: employee_collection.db.bson_serializer.ObjectID.createFromHexString(employeeId)},
					employees,
					function(error, employees) {
						if(error) callback(error);
						else callback(null, employees)       
					});
      }
    });
};

//delete employee
EmployeeProvider.prototype.delete = function(employeeId, callback) {
	this.getCollection(function(error, employee_collection) {
		if(error) {
      console.log("Something happened. Could not delete");
      console.log(error);
      callback(error);
    }
		else {
			employee_collection.remove(
				{_id: employee_collection.db.bson_serializer.ObjectID.createFromHexString(employeeId)},
				function(error, employee){
					if(error) callback(error);
					else callback(null, employee)
				});
			}
	});
};

exports.EmployeeProvider = EmployeeProvider;