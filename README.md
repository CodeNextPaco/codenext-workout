# Workout

### Exercise Four: Storing data in Firestore
1. Use Firestore api and write a request to [Get](https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document) a document from the exercises collection. The code should go in [exerciseCard.component.js](https://github.com/encomp/codenext-workout/blob/05-branch/src/components/exercise_card/exerciseCard.component.js#L103)
   ```javascript
       return firestore.collection("exercises").doc(userEmail).collection("dates").doc(newDate);
   ```
   
2. Will add this content.