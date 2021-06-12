//This is a simple code on Promises in JavaScript
//Date - 31-March-2021
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Promise</h2>

<p id="demo"></p>

<script>
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}
//The promise is resolved when it becomes success.
//The promise is rejected when it fails.
let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// some code (try to change x to 5)
//producing code:may take some time
  if (x == 0) {
    myResolve("OK");//success
  } else {
    myReject("Error");//failure
  }
});
//consuming code
myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
</script>

</body>
</html>
