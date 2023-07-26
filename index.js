const list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

// Function to get a unique set of users from List1 which are not in List2
function getUsersNotInList2(list1, list2) {
  const set1 = new Set(list1);
  const set2 = new Set(list2);
  const differenceSet = new Set([...set1].filter(user => !set2.has(user)));
  return Array.from(differenceSet);
}

// Function to get a unique set of users from List2 which are not in List1
function getUsersNotInList1(list1, list2) {
  const set1 = new Set(list1);
  const set2 = new Set(list2);
  const differenceSet = new Set([...set2].filter(user => !set1.has(user)));
  return Array.from(differenceSet);
}

// Function to get a set of users who are present in List1 and List2 both (intersection of list1 & list2)
function getCommonUsers(list1, list2) {
  const set1 = new Set(list1);
  const set2 = new Set(list2);
  const intersectionSet = new Set([...set1].filter(user => set2.has(user)));
  return Array.from(intersectionSet);
}

// Test the functions and display the output
console.log("Users in List1 but not in List2:", getUsersNotInList2(list1, list2));
console.log("Users in List2 but not in List1:", getUsersNotInList1(list1, list2));
console.log("Users common in List1 and List2:", getCommonUsers(list1, list2));
