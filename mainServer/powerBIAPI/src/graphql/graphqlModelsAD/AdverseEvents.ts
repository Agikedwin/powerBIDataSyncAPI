import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const AdverseEvents = objectType({
    name: "AdverseEvents", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
        t.nullable.string("uuid")
        t.nullable.int("patient_id"); 
        t.nullable.string("form"); 
        t.nullable.int("provider"); 
        t.nullable.int("action_taken")
        t.nullable.int("visit_id"); 
        t.nullable.string("visit_date"); 
        t.nullable.int("location_id"); 
        t.nullable.int("encounter_id"); 
        t.nullable.int("obs_id"); 
        t.nullable.int("cause"); 
        t.nullable.int("adverse_event"); 
        t.nullable.int("severity"); 
        t.nullable.string("start_date"); 
        t.nullable.int("voided"); 
        t.nullable.string("date_created"); 
        t.nullable.string("date_last_modified"); 

    },
});

let resData:any ;


export const AdverseEventsQuery = extendType({
    type: "Query",
    definition(t) {
        t.nullable.list.nullable.field("getAdverseEvents", {
            type: "AdverseEvents",
            resolve(parent, args, context) {  
                
               context.prisma.adverseEvents.findMany().then(data =>{
                    resData = data;
                    console.log(data)
                    
                    

                });  
               
                return resData;
            },
        });
    },
});
