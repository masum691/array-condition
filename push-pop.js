
// add element : push 
var name = ['masum', 'kalam', 'nasrin', 'kobita', 'bobita'];
name.push('kabila');
name.push('sabana');
name.push('sadef');
name.push(664);
console.log(name);
console.log(name.length)


// remove element : pop and recover item
var age = [22, 44, 25, 664, 12];
age.push(555);
age.pop();
age.pop();
age.pop();
var lastItem = age.pop();
console.log(age);
console.log(lastItem);