var ErrorListener = require('./parser/antlr4/error/ErrorListener').ErrorListener;

function JPErrorListener(errorCallback) {
	ErrorListener.call(this);
	this.errorCallback = errorCallback;
	this.lines = [];
	return this;
}

JPErrorListener.prototype = Object.create(ErrorListener.prototype);
JPErrorListener.prototype.constructor = JPErrorListener;

JPErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
	if (this.errorCallback) this.errorCallback({line:line, column:column, msg:msg, content:this.lines[line - 1]})
};

JPErrorListener.prototype.reportAmbiguity = function(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
};

JPErrorListener.prototype.reportAttemptingFullContext = function(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
};

JPErrorListener.prototype.reportContextSensitivity = function(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
};

exports.JPErrorListener = JPErrorListener;