export const mobileNoInput = (hook, e) => {
  const numberOnly = e.target.value.replace(/[^0-9]/g, "");
  return hook((prev) => ({ ...prev, [e.target.name]: numberOnly }));
};
export const emailInput = (hook, e) => {
  return hook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};

// export const inputFieldErrorHandling = (fieldsObj, hookFunc) => {
//   // const [cname, name, phn, email] = arr;
//   var index = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == "") {
//       index.push(i);
//     }
//     // const getEmppty = arr.indexOf("");
//   }
//   isFilled({});
//   // const filterValuedInput = arr.filter((value, id) => );
//   console.log(index, "render check", arr, "...............");
// };
