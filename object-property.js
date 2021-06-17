const student = [
{id: 21, name: 'Naiem'},
{id: 31, name:'Emon'},
{id: 41, name: 'Swadhin'},
{id: 34, name: 'lipu'}
]
const names = student.map( s => s.name);
const ids = student.map( s => s.id);
const bigger = student.filter( s => s.id>31);
const bigger2 = student.find( s => s.id>21);
console.log(bigger2);