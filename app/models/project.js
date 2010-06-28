
var Project = function () {
  /*
  this.property('login', 'string', {required: true});
  this.property('password', 'string', {required: true});
  this.property('lastName', 'string');
  this.property('firstName', 'string');

  this.validatesPresent('login');
  this.validatesFormat('login', /[a-z]+/, {message: 'Subdivisions!'});
  this.validatesLength('login', {min: 3});
  // Use with the name of the other parameter to compare with
  this.validatesConfirmed('password', 'confirmPassword');
  // Use with any function that returns a Boolean
  this.validatesWithFunction('password', function (s) { 
      return s.length > 0;
  });
  
  // Can define methods for instances like this
  this.someMethod = function () {
    // Do some stuff
  };
  */
    this.property('name','string', {required:true});
    this.property('github_user_id','string');
    this.property('github_token','string');
    this.property('github_project_id','string');
    this.property('pivitol_project_id','string');
    this.property('pivitol_api_key','string');


};

//Project.prototype.github_project_data = function(fn){
//    var connection = http.createClient(443, 'github.com');
//    var request = connection.request('POST', '/api/v2/json/user/show/'+user,{'host': 'github.com'});
//    request.addListener('response', fn);
//    request.close();
//}

/*
// Can also define them on the prototype
Project.prototype.someOtherMethod = function () {
  // Do some other stuff
};
// Can also define static methods and properties
Project.someStaticMethod = function () {
  // Do some other stuff
};
Project.someStaticProperty = 'YYZ';
*/

exports.Project = Project;

