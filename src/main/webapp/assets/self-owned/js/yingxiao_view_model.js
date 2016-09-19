function YingXiaoViewModel() {
    var self = this;
    self.code = ko.observable(1001);
    self.name = ko.observable("张三");
    self.level = ko.observable();
    self.total_income = ko.observable(10);
    self.other_income_percent = ko.observable("10");
    self.level_array = ko.observableArray(["一级","二级","三级"]);

    self.person = new Person();
    
    self.group = new Group();
    self.part = new Part();
}

function Person() {
    var self = this;
    self.increasing_num = ko.observable(8);
    self.level = ko.observable();
    self.level_array = ko.observableArray(["一级","二级","三级"]);
    
    self.insurances = ko.observableArray([new Insurance()]);
    
    self.initial_commission = ko.observable(10000);
    self.tainning_allowance = ko.observable(10000);
    
    self.achievement_allowance = ko.observable(10000);
    self.increasing_num_bonus = ko.observable(10000);
    
    self.addInsurance = function() {
        self.insurances.push(new Insurance());
    };
 
    self.removeInsurance = function() {
        self.insurances.remove(this);
    }
}

function Group() {
    var self = this;
    self.human_resource = ko.observable(5);
    self.per_capita_achievement = ko.observable(10000);
    self.manage_allowance = ko.observable(50000);
    self.budget = ko.observable(100000);
}

function Insurance(){
    var self = this;
    self.insurance_cost = ko.observable(0);
    self.commission = ko.observable(0);
}

function Part() {
    var self = this;
    self.human_resource = ko.observable(5);
    self.per_capita_achievement = ko.observable(10000);
    self.manage_allowance = ko.observable(50000);
    self.budget = ko.observable(100000);
    self.total_budget = ko.observable(100000);
}