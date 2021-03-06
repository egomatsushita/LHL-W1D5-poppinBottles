/*
  - for every two empy bottles, you can get one free (full) bottle of pop
  - for every four bottle caps, you can get one free (full) bottle of pop
  - each bottle of pop costs $2 to purchase
  - how many total bottles of pop can be redeemed given a customer investment.
*/

/* Task 1 */
/*
 - $20 -> 10 full bottles
  # 10 empty bottles -> 5 full bottles
  # 10 caps --> 2 full bottles + 2 caps
- 7 full bottles + 2 caps
  # 7 empty bottles --> 3 full bottles + 1 empty bottle
  # 9 caps --> 2 full bottles + 1 cap
- 5 full bottles + 1 empty bottle + 1 cap
  # 6 empty bottles --> 3 full bottles
  # 6 caps --> 1 full bottle + 2 caps
- 4 full bottles + 2 caps
  # 4 empty bottles --> 2 full bottles
  # 6 caps --> 1 full bootle + 2 caps
- 3 full bottles + 2 caps
  # 3 empty bottles = 1 full bottle + 1 empty bottle
  # 5 caps --> 1 full bottle + 1 cap
- 2 full bottles + 1 empty bottle + 1 caps
  # 3 empty bottles = 1 full bottle + 1 empty bottle
  # 3 caps -->
- 1 full bottles + 1 empty bottle + 3 caps
  # 2 empty bottles = 1 full bottle
  # 4 caps --> 1 full bottle
- 2 full bottle
  # 2 empty bottles --> 1 full bottle
  # 2 caps
- 1 full bottle
  # 1 empty bottle
  # 3 caps

*/

var args = process.argv.slice(2);
var totalSpent = args;

function redeemedBottles(aPurchase, aPopCost=2) {
  var purchase = aPurchase;
  var popCost = aPopCost;
  var fullBottles = purchase / popCost;
  var emptyBottles = 0;
  var caps = 0;
  var totalRedeemedBottles = 0;
  var totalFromRecyclingBottles = 0;
  var totalFromRecyclingCaps = 0;
  var info = ""

  // console.log(`Inicial Purchase: ${fullBottles} bottles`);
  while(fullBottles > 0) {
    emptyBottles += fullBottles;
    caps += fullBottles;
    fullBottles = Math.trunc(emptyBottles / 2);
    fullBottles += Math.trunc(caps / 4);
    totalFromRecyclingBottles += Math.trunc(emptyBottles / 2);
    totalFromRecyclingCaps += Math.trunc(caps / 4);
    caps %= 4;
    emptyBottles = emptyBottles % 2;
    totalRedeemedBottles += fullBottles;
    // console.log(`full bottles: ${fullBottles}\nempty bottles: ${emptyBottles}\ncaps: ${caps}\n`);
  }

  // return `You might redeem ${totalRedeemedBottles} bottles.`;
  info += `\n*** Inicial purchase: ${purchase} bottles ***\n`;
  info += `# Total redeemed bottles: ${totalRedeemedBottles} bottles\n`;
  info += `  - From recycling bottles: ${totalFromRecyclingBottles} bottles\n`;
  info += `  - From recycling caps: ${totalFromRecyclingCaps} bottles\n`;
  info += `  - Left over empty bottles: ${emptyBottles} bottles\n`;
  info += `  - Left over caps: ${caps} caps\n`;
  info += `*** Hey! Wanna to redeem more pops? We have special offers!!! ***\n`;

  return info;
}

console.log(redeemedBottles(totalSpent, 2));

