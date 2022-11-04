import { uiActions } from "./ui-slice";
import { productActions } from "./product-slice";
import * as  graphqlQuery from "../graphql/graphqlQueries"
import * as graphQlMutations  from "../graphql/graphqlMutations"


var graphqlQueryEntries = Object.entries(graphqlQuery);
console.log(graphqlQueryEntries);


var graphQlMutationsEntries = Object.entries(graphQlMutations);
//console.log("my mutes",graphQlMutations.postAlcoholDrugAbuseScreening);

let fetchedData ={}
let   fetchedDataValues =  [];
let   mutationName = "";
export const fetchProductData = () => {
    return async (dispatch) => {

     // loops thru all the graphql queries 
      for (let i = 12; i < 13; i++) { // graphqlQueryEntries.length
        for (let j = 12; j < 13; j++) { //graphqlQueryEntries[i].length
          console.log("Query deff  ---- ", graphqlQueryEntries[i][1])
          
        
        await fetch("http://localhost:3001/graphql",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            // extract the query name entries from the sraphqlQuery object.
            query: graphqlQueryEntries[i][1],
          })
        }).then(res => {
          return res.json();
        // eslint-disable-next-line no-loop-func
        }).then(res => {

         fetchedDataValues = Object.values(res.data);
         console.log(res);

          
        const fetchedDataKeys = Object.keys(fetchedData);


          dispatch(productActions.fetchProductData(res))

          // convert the get graphql name to post to passed to sendToGraphQLMutationCallback.
          

          mutationName = graphqlQueryEntries[i][0].replace("get", "post")
          /*Mutatuin name  and data to be posted*/
        })

      }   
      
             sendToGraphQL(mutationName, fetchedDataValues);
        
        
      }
           try {

        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success...",
            message: "Sent  product data successfully",
          })

        );
            
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error!...",
                  message: "Fetching   product data failed",
                })
              );
            
        }
    }

}
const sendToGraphQL = async (mutationName, variableName) => {
 

  console.log("-------AGIK---------start ", mutationName)
  const postMutation = graphQlMutations[mutationName];
  console.log(postMutation)
  
    for (let i = 0; i < variableName[0].length; i++) { //variableName[0].length
   
      
  await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
     query: postMutation,
     // 2 dimensions array with all the elements at index 0, then loop the rest using i
      variables: variableName[0][i],
    })
  })
    .then(r => r.json())
    .then(data => {
     // console.log(data)
      console.log('Successfully posted :',mutationName)
      
    })
    .catch(error => {
      console.log(error)
    });

    break;
 
  }
 
 }

 // }; 
  




export const sendProductData =  (product) => {
}