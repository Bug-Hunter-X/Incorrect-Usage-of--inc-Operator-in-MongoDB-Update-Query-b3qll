```javascript
//Correct usage of $inc operator in MongoDB update query.  Ensures field is a number before incrementing.
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field:1}});
//Alternative using $setOnInsert to handle non-existent fields
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{ $inc: { field: 1 }, $setOnInsert: { field: 0 } });
```