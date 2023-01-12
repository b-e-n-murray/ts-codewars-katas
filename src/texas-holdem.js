function hand(holeCards, communityCards) {
    let result = {type: '', ranks: []}
    let combinedHand = []
    for(let card of holeCards) {
      communityCards.push(card)
    }
    combinedHand = communityCards
    console.log("full river + hand: ", combinedHand)
    
    //combinedHand now represents the full river plus the two cards in hand
    
    let occurrences = {}
  //   console.log(countOccurrences(combinedHand, 'A'))
    
    //checking for pairs, 3OAK, 4OAK
    for(let card of combinedHand) {
      if(countOccurrences(combinedHand, card[0]) > 1) {
       occurrences[card[0]] = countOccurrences(combinedHand, card[0])
      }
      }
    console.log("occurrences: ", occurrences)
    
    //if pair...
    if(Object.keys(occurrences).length === 1  && occurrences[Object.keys(occurrences)[0]] === 2) {
      //if the occurrences obj has only one key/val pair, and its value is 2
      result.type = 'pair'
    }
    //if two pair...
    if(Object.keys(occurrences).length === 2
       && occurrences[Object.keys(occurrences)[0]] === 2
       && occurrences[Object.keys(occurrences)[1]] === 2
      ) {
      //if the occurrences obj has two key/val pairs, and both values are 2
      result.type = 'two pair'
    }
    //if 3OAK...
    if(Object.keys(occurrences).length === 1 
       && occurrences[Object.keys(occurrences)[0]] === 3) {
  //     && checkForStraight(combinedHand) === false
      //if the occurrences obj has only one key/val pair, and its value is 3
      result.type = 'three-of-a-kind'
    }
    //if 4OAK...
    if(Object.keys(occurrences).length === 1  && occurrences[Object.keys(occurrences)[0]] === 4) {
      //if the occurrences obj has only one key/val pair, and its value is 4
      result.type = 'four-of-a-kind'
    }
    console.log(checkForStraight(combinedHand))
    return result
  
  
  // function to be used for checking hand for Straight combinations
  function checkForStraight(combinedHand) {
    let removeSuits = combinedHand.map((card) => {
      return card.length === 2 ? card[0] : card.slice(0, 1)
    })
    console.log("removed suits: ", removeSuits)
    let values = removeSuits.map((card) => {
      return card === 'A' ? card = 14 :
      card === 'K' ? card = 13 :
      card === 'Q' ? card = 12 :
      card === 'J' ? card = 11 :
      Number(card)
    })
    let sortedArr = values.sort((a, b) => a - b)
    console.log(sortedArr)
    //full river + hand now sorted by numerical value in asc order
    //checking for any run of five...
    //start at first value - is next value +1? if yes, add one, and continue - if get to 5, return true
    function checkRun(sortedArr) {
    let run = 0
    let current = values[run]
    while(run !== 5 || current === values[values.length]) {
      current === values[run + 1] ? run++ : current += 1
    }
    return run === 5 ? true : false
    console.log(checkRun(values))
    }
    return checkRun(sortedArr)
    }
  
    //function to be used for checking pairs/3-of-a-kind/4-of-a-kind
  function countOccurrences(combinedHand, target) {
    let occurrences = 0
    for(let card of combinedHand) {
      if(card.includes(target)) {
        occurrences += 1
        }
       }
    return occurrences
     }
  }
  /*
  
  Nothing conditions:
  - countOccurrences returns 0  for all values
  - checkForFullHouse returns false
  - checkForFlush returns false
  - checkForStraight returns false
  
  Pair conditions:
  - countOccurrences returns 2 for only one value in hand
  - checkForFullHouse returns false
  - checkForFlush returns false (player can have a pair but creating a flush is a better score - kata may keep these separate)
  
  Two Pair conditions: 
  - countOccurrences returns 2 for two different values in hand
  - checkForFullHouse returns false
  
  3-of-a-kind conditions:
  - countOccurrences returns 3 for only one value in hand
  
  Straight conditions:
  - checkForFlush returns false
  
  Flush conditions:
  - checkForFlush returns true
  - checkForStraight returns false
  
  Full house condtions:
  - countOccurrences returns 2 for one value, and 3 for another
  
  4-of-a-kind conditions:
  - countOccurrences returns 4 for only one value in hand
  
  Straight flush condtions:
  - checkForFlush returns true
  - checkForStraight returns true
  
  ranks - refers to each unique value in the final river after players hand has been inserted
  */
  
  
  