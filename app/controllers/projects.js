var sys = require('sys');
var inspect_object = function(params){
  sys.puts('\n\n\nOBJECT['+(typeof params)+']:\n----------\n'+sys.inspect(params)+'\n----------\n\n')
}

var Projects = function () {
  var _this = this;
  this.respondsWith = ['html', 'json', 'txt'];

  this.index = function (params) {
    Project.all(function (err, items) {
      if (err) throw err;
      params.items = items;
      _this.respond({params: params});
    });
  };

  this.add = function (params) {
    this.respond({params: params});
  };

  this.create = function (params) {
    var item = Project.create(params);
    item.save(function (err, res) {
      if (err) {
        params.errors = err;
        _this.transfer('add');
      }
      else {
        _this.redirect({controller: _this.name});
      }
    });
  };

  this.show = function (params) {
    Project.find(params.id, function (err, items) {
      if (err) throw err;
//      inspect_object(items[0])
      params.item = items[0];
      _this.respond({params: params});
    });
  };

  this.edit = function (params) {
    Project.find(params.id, function (err, items) {
      if (err) throw err;
      geddy.util.meta.mixin(params, items[0]);
      _this.respond({params: params});
    });
  };

  this.update = function (params) {
    Project.update(params.id, params, function (err, res) {
      if (err) {
        params.errors = err;
        _this.transfer('edit');
      }
      else {
        _this.redirect({controller: _this.name});
      }
    });
  };

  this.remove = function (params) {
    Project.remove(params.id, function (err, items) {
      if (err) throw err;
      _this.redirect({controller: _this.name});
    });
  };

};

exports.Projects = Projects;

