//This is a simple code on async in JavaScript
//Date - 31-March-2021
<!DOCTYPE html>

<body>

<h2>JavaScript async / await</h2>

<p id="demo"></p>

<script>
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some
}
//keyword async before a function makes the function return a promise:
async function myFunction() {
  return "Hello";
}

myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);</script>

</body>
</html>
