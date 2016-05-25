(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 375,
	height: 667,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.TryAgain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993333").s().p("AggBVQgLgCgHgCQgGgCgFgDQgFgDgDgEQgDgFgBgFQgCgFAAgGQAAgJAFgJQAEgIAJgIQAIgGASgIQgFgPgJgpIgEgNIAQgDQAAAIAFAYQAGAYAEALIAugSIANgGIAGAQQgqAMgQAFQgNAFgJAGQgJAEgGAFQgGAGgDAFQgDAGAAAHQAAAGADAFQADAFAHADQAGADAKABQALACAPAAQAPAAAPgCQAQgCAJgDIABARIgGAAIgCAAIgGABQgfACgMABQgPgBgLgBgAAhg3IgKgPIAKgEIALAPIAJAPIgKAGIgKgRgAAthQIAKgFQAOASAHAMIgKAGQgFgJgQgWg");
	this.shape.setTransform(46.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993333").s().p("AgSBQQgNgCgMgEIAAgDIAAgBIgBgLQAMAFANACQAMADAMAAQALAAAKgDQAJgCAIgEQAGgEAEgGQAEgGAAgHQAAgGgDgFQgCgEgGgDQgEgEgHgBQgIgCgJAAQgLAAgKADQgNADgKAFIgKAGIgHAHIgOgGQAHgKAHgTQAHgQAGgSIghgCIgGAAIgCAAIAAgOIASADIAaABQAEgQADgUIAPABIgDANIgGAWQAdgBATgDQAUgCAJgDIABAOIgJABQgsAFgcABIgKAdQgFAOgEAHIAAAAIALgHQAIgEAHgBIAOgEIAQgBQAMAAAKACQAJADAHAFQAGAFAEAGQADAIAAAIIgBAJIgDAJQgFAIgJAHQgJAGgMADQgRADgKAAQgLAAgMgCg");
	this.shape_1.setTransform(22.6,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#993333").s().p("AgtBBQgEgCgEgDQgEgEgDgGQgDgFgCgIQgEgJgEgbIgDg3IgBgMIARAAQgBAJgBAOIACAjQABAQADAKQAFASAEAHIAFAHQADACADAAQADAAACgCQADgDACgFQAFgKAFgYIAMALIgHAXIgIAOQgDAHgFACQgFADgFAAQgEAAgEgDgAA7AUQgDgNgFgLQgFgMgIgLQgHgMgIgLIALgFQALALAGAKQAGALAGANQAGALADAMQADALADASIgOAFQgBgOgEgNg");
	this.shape_2.setTransform(1.6,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#993333").s().p("AgfBDQAKgBAUgEQAHgDARgIIAKgHIAHgHQAFgHADgHQACgHAAgGQAAgIgDgEQgDgGgGgDQgEgCgHgBQgGgBgIAAQgXABgPADQgcAGgIADIgEgQIAUgDQAUgEAPgCQAMgCAMAAQAMAAAIACQAIACAHAEQAIAFAEAIQAFAIAAAIQAAAIgDAIQgCAHgEAIQgFAGgGAGQgGAHgJAEQgLAHgMAFQgKADgXAFQgDgJgDgGgAgBg6QgagFgNgEIAEgOQAKAEAaAFQAMACAgACIgCAOQgfgCgMgCg");
	this.shape_3.setTransform(-21.3,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993333").s().p("AAABQIgMgDQgGgDgEgEIgIgIQgCgFgCgHQgCgHAAgJIABgNIAAgFQgQgCgOgDIgGgBIACgMQAGACAJABIAVADIAEgiQgPgCgOgDIgHgCIACgNQAGADAKACIAUADQAFgdAAgJIAAgBIAQABIgEAOIgCANIgBAMIALAAQANAAAWgEIgBAPIgOABIgSABIgPgBIgFAiIANABQAMgBAXgDIAAANIgGABQgOACgMgBIgRAAIAAAEIgBAPQAAAIACAGQADAGAEAEQAFAEAHADQAFACAJAAQAKgBAIgCQAJgCAGgFQAFgEADgHQADgGABgJQAAgJgGgJQgEgIgJgHQAHAAAHgDQAHAGAHAMQADAFABAEIABAKQAAALgFAJQgEAIgHAHQgIAGgLAEQgLADgNAAQgHAAgGgCg");
	this.shape_4.setTransform(-43.2,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCCCC").s().p("AsZDCQg3AAAAg2IAAkWQAAg3A3AAIYzAAQA3AAAAA3IAAEWQAAA2g3AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.9,-19.5,170,39);


(lib.OmikujiKyou = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003366").s().p("ACRC3IAAgcIkhAAIAAAcIggAAQADgUAAgiIAAj5QAAgZgDgUIAhAAQgBAOAAAfIAAD5IEhAAIAAj5QAAgfgCgOIAiAAQgDATAAAaIAAD6QAAAjADASgAh9BXQAagTAngiQASgRAjgpQg7g1gxgjIAUgUQAvAlA2AxQAOgWAagyQAMgYAMgoIAeAMIgKAWQgMAegSAgQgRAggRAbQAdAbA+BDIgVAWQg3hCgfgdQgeAogRARQgnAigcAWQgNgQgIgEg");
	this.shape.setTransform(0,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CCCC").s().p("AtDGtQhnABAAhoIAAqLQAAhnBnAAIaHAAQBnAAAABnIAAKLQAABohngBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.9,-43,188,86);


(lib.OmikujiKiti = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3333").s().p("ABnDAIAAgWIjMAAIAAAWIgfAAQADgTAAgWIAAhUQAAgUgCgPIAfABIDKAAIAfgBQgCANAAAWIAABUQAAAWACATgAhlCRIDMAAIAAhWIjMAAgAB1gLIjqAAQgXgBgRADIAAgdQAOACAaAAIBlAAIAAhDIh6AAQgdAAgQACIAAgeQASACAbABIB6AAIAAgZQAAgagCgMIAeAAQgDAQAAAWIAAAZICCAAQAagBATgCIAAAeQgSgCgbAAIiCAAIAABDIBsAAQAaAAAOgCIAAAdQgRgDgXABg");
	this.shape.setTransform(0,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCCC").s().p("AtDGtQhnABAAhoIAAqLQAAhnBnAAIaHAAQBnAAAABnIAAKLQAABohngBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.9,-43,188,86);


(lib.OmikujiDaikiti = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3333").s().p("ABbDJIAAgRIi1AAIAAARIhEAAQACgUAAgiIAAhTQAAgegCgPIApACIDsAAQAZAAAQgCQgDAPAAAeIAABTQAAAjADATgAhaB9IC2AAIAAgtIi2AAgAB3gBIjtAAIg1ABIAAg/QARACAkAAIBSAAIAAgjIhkAAQgjAAgWACIAAhBQAWACAjAAIBkAAIAAgDQAAgXgCgSIBHAAQgDAQAAAZIAAADIBrAAQAnAAASgCIAABBQgWgCgjAAIhrAAIAAAjIBZAAQAlAAAPgCIAAA/QgWgBgeAAg");
	this.shape.setTransform(33.6,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3333").s().p("ABvCnQgVgQgWgUQgWgVgQgXQgQgXgOgdQgHAXgMASQgMATgPASQgRASgSAQQgTAQgTALQgSALgbAMIgTgiIgXgeQAZgKAogXQASgLAegeQAOgOARghQAIgPAJgnIhXAAQgoABgVACIAAhIQAYACAkABIBdAAIAAgqQAAgcgDgSIBNAAQgCARgCA3IAAAQIBiAAQAkgBAZgCIAABIQgXgCglgBIhgAAQAJAbAQAYQAQAbAWAWQAPAPAhAYQASALAtAUQgPASgJAPQgKAPgJAVQgegPgXgPg");
	this.shape_1.setTransform(-37.3,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCCCC").s().p("AtDGtQhnABAAhoIAAqLQAAhnBnAAIaHAAQBnAAAABnIAAKLQAABohngBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.9,-43,188,86);


(lib.OmikujiBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCCC").s().rr(-94,-43,188,86,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.9,-43,188,86);


(lib.BtnTryAgain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start:|":0,"@click:s.start":1});

	// レイヤー 1
	this.instance = new lib.TryAgain();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.05},8,cjs.Ease.get(1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.9,-19.5,170,39);


// stage content:



(lib.ExtensionSample = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start:|":0,"@click:#select(daikiti,kiti,kyou)":6,"daikiti:|":29,"kiti:|":34,"kyou:|":39});

	// timeline functions:
	this.frame_0 = function() {
		NbLabelAction.init()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44));

	// おみくじ
	this.text = new cjs.Text("クリックで\nおみくじを\n引けるよ！", "15px 'Futura'", "#993333");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 164;
	this.text.setTransform(188,279);

	this.instance = new lib.OmikujiBack();
	this.instance.setTransform(190,310);

	this.instance_1 = new lib.OmikujiDaikiti();
	this.instance_1.setTransform(190,310,0.043,1);
	this.instance_1._off = true;

	this.instance_2 = new lib.OmikujiKiti();
	this.instance_2.setTransform(190,310,0.043,1);
	this.instance_2._off = true;

	this.instance_3 = new lib.OmikujiKyou();
	this.instance_3.setTransform(190,310,0.043,1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({scaleX:0.04},4).to({scaleX:1},5).to({scaleX:0.04},4).to({scaleX:1},5).to({_off:true,scaleX:0.04},5).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},5).to({scaleX:1},4).to({_off:true,scaleX:0.04},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},1).to({scaleX:1},4).to({_off:true,scaleX:0.04},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38).to({_off:false},1).to({scaleX:1},4).wait(1));

	// もういちど
	this.instance_4 = new lib.BtnTryAgain();
	this.instance_4.setTransform(189,431.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(283.5,600.5,188,86);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;