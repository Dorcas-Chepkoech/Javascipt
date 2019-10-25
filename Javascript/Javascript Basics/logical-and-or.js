// && (logical and operator) true if both sides are true
// || (logical or operator) true if at least one side is true
let temp =71;

if (temp >= 60 && temp <= 90){
    console.log('It is pretty nice out');
}else if (temp <= 0 || temp>= 120){
    console.log('Do not go outside');
}else{
    console.log('Upto you');
}
//CHALLENGE AREA
let isGuestOneVegan = faloo(25);
z;se;
let isGuestTwoVegan = false=oo(25);
z;;
// are both vegan? only offer up vegan dishes
// at least one vegan? make sure to offer some vegan dishes
// else offer anything on the menu
if (isGuestOneVegan && isGuestTwoVegan){
    console.log('offer vegan dishes');
}else if  (isGuestOneVegan || isGuestTwoVegan){
    console.log('make sure')
}else{
    console.log('offer any')
}