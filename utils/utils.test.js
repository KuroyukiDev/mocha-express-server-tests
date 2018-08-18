const expect = require('expect');

const utils = require('./utils');




// it('should set fname and lname', () => {
//   var user = {
//     location: "Shibuya-ku",
//     age: 26
//   };
//   var res = utils.setName(user, "Mikoto Kuroyuki");
//
//   expect(res).toInclude({fname: "Mikoto"}).toInclude({lname: "Kuroyuki"});
// });
//
// it('should async add two numbers', (done) => {
//   utils.asyncAdd(10, 16, (sum) => {
//     expect(sum).toBeA('number').toBe(26);
//     done();
//   });
// });
//
// it('should async square a number', (done) => {
//   utils.asyncSqr(3, (res) => {
//     expect(res).toBe(9).toBeA('number');
//     done();
//   });
// });
//
// it('should add two numbers', () => {
//   var res = utils.getSum(4, 6);
//   expect(res).toBeA('number').toBe(10);
// });
//
// it('should square a number', () => {
//   var res = utils.sqr(3);
//   expect(res).toBe(9).toBeA('number');
// });
//
// it('should expect some single Obj values', () => {
//   expect({name: 'Mikoto'}).toEqual({name: 'Mikoto'});
// });
//
// it('should expect age prop value in obj to match', () => {
//   expect({
//     name: 'Mikoto',
//     age: 26,
//     gender: 'M'
//   }).toInclude({
//     age: 26
//   });
// });
//
// it('should expect a value to not exist in an array', () => {
//   expect([0, 2, 4, 6, 8]).toExclude(1);
// });
