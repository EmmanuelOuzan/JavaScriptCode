let cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}
cat.weight = 10;
cat.height = 3;
cat.name = 'Fluffyy'
// logs catFriends activites
// Can you do a for loop? 
console.log(cat.catFriends[0].activities)
console.log(cat.catFriends[1].activities);
console.log(cat.catFriends[0].name);
console.log(cat.catFriends[1].name);
console.log(`cat Friends weight: ${(cat.catFriends[0].weight) + (cat.catFriends[1].weight)}`);

// Total activites Hard coded
console.log(cat.activities.length + cat.catFriends[0].activities.length + cat.catFriends[1].activities.length);
// Total acitives loop
let total_activites = 0;
total_activites += cat.activities.length;
for (i in cat.catFriends){
   total_activites += cat.catFriends[0].activities.length;
}
console.log(total_activites);