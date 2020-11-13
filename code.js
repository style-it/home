
const strReg1 = /"(.*?)"/g,
strReg2 = /'(.*?)'/g,
numReg = /\b(\d+)/g,
jsReg1 = /\b(new|if|else|do|while|switch|for|foreach|in|continue|break|return|typeof)(?=[^\w])/g,
jsReg2 = /\b(document|window|Array|String|Object|Number|Function|function|var|const|let|\.length|\.\w+)(?=[^\w])/g,
funcReg = /\b(function<\/span>)(\s+\w+)(\()(.*?)(?=[\)])(?=[^\w])/g,
commentReg = /(\/\/.*)/g;

function highlight(){
$.each($('code'),function(){
    var string = this.innerText, parsed = string.replace(/[ \t]/g, '&nbsp;');
    parsed = parsed.replace(strReg1,'<span class="string">"$1"</span>');
    parsed = parsed.replace(strReg2,"<span class=\"string\">'$1'</span>");
    parsed = parsed.replace(jsReg1,'<span class="js1">$1</span>');
    parsed = parsed.replace(jsReg2,'<span class="js2">$1</span>');
    parsed = parsed.replace(numReg,'<span class="js-num">$1</span>');
    parsed = parsed.replace(funcReg,'$1<span class="func-name">$2</span>$3<span class="func-args">$4</span>');
    parsed = parsed.replace(commentReg,'<span class="comment">$1</span>');
    parsed = parsed.split('\n').join('<br>');
    this.innerHTML = parsed;
});
};




// --- DOC READY ---
$(document).ready(function(){ 
var el = document.getElementById('code');
highlight(); highlight();

});