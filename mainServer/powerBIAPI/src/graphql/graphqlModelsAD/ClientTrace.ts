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
       t.nullable.string("remarks"); 
       t.nullable.string("appointment_date");
       t.nullable.string("date_created"); 
       t.nullable.string("date_last_modified"); 

    },
});

let resData:any ;


export const ClientTraceQuery = extendType({
    type: "Query",
    definition(t) {
        t.nullable.list.nullable.field("getClientTrace", {
            type: "ClientTrace",
            resolve(parent, args, context) {  
                console.log("Fetching ClientTrace ...");
               return context.prisma.clientTrace.findMany();
            },
        });
    },
});