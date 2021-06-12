//This is a simple code on await in JSON object
//Author - Feba
//Date - 31-March-2021
<!DOCTYPE html>
<html>
<body>

<p>Use bracket notation to access the property values.</p>

<p id="demo"></p>

//JSON objects are written in key/value pairs.
<script>
var myObj, x;
myObj = {"name":"John", "age":30, "car":null};//JSON objects are surrounded by curly braces {}.
//the key values are represented in" "
for (x in myObj) {
  document.getElementById("demo").innerHTML += myObj[x] + "<br>";
}
</script>

</body>
</html>
