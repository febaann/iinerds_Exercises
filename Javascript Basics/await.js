//This is a simple code on await in JavaScript
//Author - Feba
//Date - 31-March-2021
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript async / await</h2>

<h1 id="demo"></h1>

<script>
async function myDisplay() {
  let myPromise = new Promise(function(myResolve, myReject) {
    myResolve("Hellooo !!");
  });
 // await before a function makes the function wait for a promise
 //await keyword can only be used inside an async function


  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
</script>

</body>
</html>
