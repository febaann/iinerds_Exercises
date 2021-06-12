//This is a simple code on await in JSON stringify
//Author - Feba
//Date - 31-March-2021
<!DOCTYPE html>
<html>
<body>

<h2>Create JSON string from a JavaScript object.</h2>

<p id="demo"></p>

<script>
var obj = { name: "John", age: 30, city: "New York" };
//JSON.stringify() to convert it into a string.
var myJSON = JSON.stringify(obj);//myJSON is now a string, and ready to be sent to a server:
document.getElementById("demo").innerHTML = myJSON;
</script>

</body>
</html>
