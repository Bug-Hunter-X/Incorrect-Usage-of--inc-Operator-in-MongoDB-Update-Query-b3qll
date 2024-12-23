# Incorrect Usage of $inc Operator in MongoDB
This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries. The `$inc` operator is designed to increment or decrement a numerical value within a document.  Using it incorrectly can lead to unexpected results or errors. The solution provided shows the correct way to use the `$inc` operator.

**Problem:**

Attempting to increment a field that does not exist or is not a number.  

**Solution:**

Ensure that the field exists and is of numerical type before using `$inc`.  Consider using `$setOnInsert` if you want to initialize a field to a default value on the first insertion.