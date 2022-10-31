import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const ClientTrace = objectType({
    name: "ClientTrace", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
       t.nullable.string("uuid");
       t.nullable.int("client_id"); 
       t.nullable.string("encounter_date"); 
       t.nullable.string("contact_type"); 
       t.nullable.string("status"); 
       t.nullable.string("unique_patient_no"); 
       t.nullable.int("facility_linked_to"); 
       t.nullable.string("health_worker_handed_to"); 
       t.nullable.int("remarks"); 
       t.nullable.int("appointment_date");
       t.nullable.int("date_created"); 
       t.nullable.int("date_last_modified"); 

    },
});

let resData:any ;


export const ClientTraceQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("getAdverseEvents", {
            type: "AdverseEvents",
            resolve(parent, args, context) {  
                
               context.prisma.clientTrace.findMany().then(data =>{
                    resData = data;
                    console.log(data)
                    
                    

                });  
               
                return resData;
            },
        });
    },
});