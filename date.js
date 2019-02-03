//jshint esversion:6
exports.getDate = function(){
    const date=new Date();
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString("en-US", options);
  };


exports.getDay=function(){
    const date=new Date();
    const options = {
      weekday: 'long',
    };
    return date.toLocaleDateString("en-US", options);
  };
// module.exports={
//   getDate: function(){
//       const date=new Date();
//       const options = {
//         weekday: 'long',
//         month: 'long',
//         day: 'numeric'
//       };
//
//       return date.toLocaleDateString("en-US", options);
//   },
//   getDay: function(){
//       const date=new Date();
//       const options = {
//         weekday: 'long',
//       };
//
//       return date.toLocaleDateString("en-US", options);
//   }
// };
