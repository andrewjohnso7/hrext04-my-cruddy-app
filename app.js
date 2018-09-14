$(document).ready(function() {
// write a function that loads all of local storage and puts it into saved container
  $(".saved-container").on("click", function(){
    // write a function that populates the saved container with every key on load
    // console.log("AMIRITE");
    // 
    for(var i = 0; i < localStorage.length; i++){
      $(".saved-container").append();
    }
    
    
  })
  let inputKeyArray = [];
  let inputValArray = [];
  
  $(".add-text-btn").on("click", function(){

    // store values
    let inputKey = $(".user-input-title").val();
    let inputValue = $(".user-input-body").val();
    // clear values
    $(".user-input-title").val("");
    $(".user-input-body").val("");

    console.log(inputKey, inputValue);
    // localStorage.setItem('items',JSON.stringify(inputArray))
    // let data = JSON.parse(localStorage.getItem('items'))
    // data.forEach(element => {
    //   $(".saved-content").append(element);
    // });
    inputKeyArray.push(inputKey);
    inputValArray.push(inputValue);
    localStorage.setItem(inputKey, inputValue);

let countWords = function(string){
  var str = string.split(' ');
  var count = 0
  for(var i = 0; i < str.length; i++){
    count++
  }
  return count;
}
console.log(countWords(inputValue));
    // data-
    // let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + inputKey + ' ' +  localStorage.getItem(inputKey) + '</div>';
    let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + inputKey + '</div>';
    $(".saved-container").append(itemHtml);
    //console.log(localStorage);
    // how can we delegate this event to the outer html node?
    // https://learn.jquery.com/events/event-delegation/

    $(".display-item").on("click", function(e){
      // plop the key:value back into the input boxes

      // get the values from the the divs?
      console.log("key=> ", e.target.dataset.storageKey); // user-input-title
      localStorage.getItem(e.target.dataset.storageKey); // user-input-body

      // set those values in the form fields
      $(".user-input-title").val(e.target.dataset.storageKey);
      $(".user-input-body").val(localStorage.getItem(e.target.dataset.storageKey));
    });

  });



   // TODO add back in later
   // $(".user-input").on("keyup", function(){
   //   let inputValue = $(".user-input").val();
   //   localStorage.setItem("testStorage", inputValue);
   //   $(".display").text(localStorage.getItem("testStorage"));
   // });

   $(".del-text-btn").on("click", function() {
    //  alert('item deleted? check the console'); // maybe change to a window.confirm
     window.confirm('Are you sure?');
    // localStorage.clear();
      localStorage.removeItem( $('.user-input-title').val() ); // grab the title and plop here
     $(".user-input-title").val("");
     $(".user-input-body").val("");
     // clearing display? what if I have multiple items?
     // after item is removed from local storage, redisplay items from local storage
     // refresh from storage?
   });

   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys


/* 
make the input go into the saved-container area √
make the input got into the saved-container, in an individual container. √
I want to display all of the local storage in saved-container 


// write a function that counts the number of words in a string. inputValue is the string. √
*/
// write a function that counts the number of words in a string and returns an nested array of
// the top 5 words and how many times those words are counted. the first item in the array
// should be a name, the second the number of times that word appears. 
/* 
  create an object? 
  check the object to see if the array[i] exists inside of the object 
   if it doesn't 
     create it inside the object and store 1 at it
   if it does, 
     add one to the value
  exit loop
*/
let collections = function(string){
  str = string.split(' ');
  let obj = {};
  for(var i = 0; i < str.length; i++){
    if(!obj.hasOwnProperty(str[i])){
      obj[str[i]] = 1;
    } else{
      obj[str[i]]++;
    }
  }
  // return obj;
// }
// let allOfEm = function(object){
  let bigArr =[];
    for(var element in obj){
      arr = [];
      arr.push(element);
      arr.push(object[element]);
      bigArr.push(arr)
    }
    return bigArr;
}
// preData = collections(inputValue)

var chart = c3.generate({
  data: {
    columns: [ [ 'This', 1 ],
    [ 'is', 2 ],
    [ 'a', 5 ],
    [ 'story', 1 ],
    [ 'all', 3 ],
    [ 'about', 2 ],
    [ 'how', 2 ],
    [ 'my', 6 ],
    [ 'life', 1 ],
    [ 'got', 3 ],
    [ 'flipped,', 1 ],
    [ 'turned', 1 ],
    [ 'upside', 1 ],
    [ 'down.', 1 ],
    [ 'And', 1 ],
    [ 'I\'d', 1 ],
    [ 'like', 1 ]
  ],
    type: 'donut',
    // colors:{
    //   sleep: '#D81159',
    //   eat: '#8F2D56',
    //   code: '#218380',
    //   relax: '#FBB13C',
    //   other: '#726DA8'
    // }
},
pie: {
    label: {
        format: function (value, ratio, id) {
            return d3.format()(value) + ' hours';
        }
    }
}
});
});