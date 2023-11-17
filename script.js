var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const utcDate1 = Date.UTC(
    parseInt(date1.substring(0, 4)),
    parseInt(date1.substring(5, 7)) - 1, 
    parseInt(date1.substring(8))
  );

  const utcDate2 = Date.UTC(
    parseInt(date2.substring(0, 4)),
    parseInt(date2.substring(5, 7)) - 1,
    parseInt(date2.substring(8))
  );

  const timeDifference = utcDate2 - utcDate1;

  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
