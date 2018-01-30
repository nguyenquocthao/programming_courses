var course = new Object();

var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course);

function CreateObject(val){
	this.value = val;
	this.add = function(b){
		this.value += b;
		return this.value;
	}
}
var obj = new CreateObject(10);
obj.add(5);
console.log(obj);