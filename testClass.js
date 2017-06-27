/*
 * test for Immediately-Invoked Function Expression
 * 一些流行的库也是这样，比如jQuery
 * 
	(function( window, undefined ) {
			// code here
	}) ( window );
 */

/**
 *	 「自执行匿名函数」（self-executing anonymous function），
 *   「立即执行函数表达式」（Immediately-Invoked Function Expression，以下简称IIFE）
 *    笔者倾向于第二种叫法
 */

(function (window) {

	console.log("this is a class");
})(window);

/**
 * this way can not be work
 */
// function() {console.log("error");}();  // this will be error------------------------------------------(f1)

/**
 * this will be ok
 * format like:  ()();
 */

(function () { console.log("this is right!"); })(); // -----------------------------------------------(f2)

/**
 * why f1 can not work:
 * Javascript interpretor will conside function key
 * --- like:   function(param, param2, ...) {};
 * --- so, 函数是需要上面这样声明的，自然 f1 是符和约定的了
 * --- but, javasript can be do as this:    (1===1), you can try on Chrome maybe.
 * ------ so, javascript 的解释器会把它当做一个表达式来看待（express）
 * ------ then, 那就可以在 （）里面填入匿名函数了，JS will consider it a express. :)
 * ----------- so, 再括号里面的code，就是一个表达式了，你输入 function(){};  因为是表达式啊，所以你得到了一个匿名函数
 * ------------ then： 既然你得到了一个匿名函数，在函数后面加一个刮号，不就是执行了吗 -：）
 */

// example:
(function testFunction() { console.log("test"); });   // this will get one function. like below:
function test() { console.log("test"); }
// you can on Chrome to do the testing
var testFun = (function test() { console.log("test"); });
// >>undefined
testFun();
// >>test

// -------------------------既然是函数了，那当然可以传入参数了啦
(function testFunction(param1) { console.log(param1); })("param test");

// --------------------------既然是函数了，那把一个类似于class 里的东西都写到里面去，不就是c++ 里的namespace了吗
// -----------还是不懂的话，请你google吧。  aisnote@gmail.com

// -----------------------请思考以下语句 -- copy from http://weizhifeng.net/immediately-invoked-function-expression.html

// 如果本身就是expression，那么根本不需要做任何处理
var i = function () { return 10; }();
true && function () { /* code */ }();
0, function () { /* code */ }();

// 如果你不在乎返回值，可以这么做
!function () { /* code */ }();
~function () { /* code */ }();
-function () { /* code */ }();
+function () { /* code */ }();

// 还有更奇葩的方式，但是不知道性能如何，来自
// http://twitter.com/kuvos/status/18209252090847232
new function () { /* code */ }
new function () { /* code */ }()


