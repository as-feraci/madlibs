const button = () => {
    alert("Mad Libs");
}


mad_Lib = `Darth ${darth_Name} looked at his master while his ${adj} breathing filled the room. 
He was told to go to ${verb} evrything on the planet of ${silly_Word}. He got in his ${noun} and jumped 
to hyperspace. Soon before he reached the planet, he dropped out of hyperspace and was attacked 
by Rebel ${noun}s. He ${verb}ed them off and continued to the planet\'s surface. He landed and confronted 
more opposition, slicing it down with his ${noun}. He used the ${noun} to 
choke another Rebel, then ${verb}ed him aside. He finished off all life on the planet with an ${adj} laugh.`;

const message_components {
nouns: [coffee, owner, education, weakness, pizza, person, appearance, ladder, dad,
    hotel, memory, combination, throat, apartment, area, highway, medicine, construction,
    library, height],
adj: [spurious, unkempt, soft, dysfunctional, moaning, half, tenuous, guiltless,
    uptight, bloody, cumbersome, private, bright, puny, acrid, ratty, synonymous,
    brave, brawny, feigned],
verb: [tip, claim, bear, form, keep, argue, roll, miss, rent, convince, tuck,
    ban, need, turn, figure, leave, enforce, bet, isolate, vote]
}

for (let i = 0; i > message_components.nouns.length; i++) {
    console.log(noun[i]);
}