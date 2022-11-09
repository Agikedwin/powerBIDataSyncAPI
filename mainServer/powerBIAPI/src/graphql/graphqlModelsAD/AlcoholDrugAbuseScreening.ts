import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const AlcoholDrugAbuseScreening = objectType({
    name: "AlcoholDrugAbuseScreening", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
       t.nullable.string("uuid")
       t.nullable.int("patient_id"); 
       t.nullable.int("provider"); 
       t.nullable.int("visit_id"); 
       t.nullable.int("provider"); 
       t.nullable.string("visit_date"); 
       t.nullable.int("location_id"); 
       t.nullable.int("encounter_id"); 
       t.nullable.string("alcohol_drinking_frequency"); 
       t.nullable.string("smoking_frequency"); 
       t.nullable.string("drugs_use_frequency"); 
       t.nullable.int("voided"); 
       t.nullable.string("date_created"); 
       t.nullable.string("date_last_modified"); 

    },
});

let resData:[] ;


export const AlcoholDrugAbuseScreeningQuery = extendType({
    type: "Query",
    definition(t) {
        t.nullable.list.nullable.field("getAlcoholDrugAbuseScreening", {
            type: "AlcoholDrugAbuseScreening",
            resolve(parent, args, context) {  
                
              try {
                console.log("Fetching AlcoholDrugAbuseScreening...")
                return context.prisma.alcoholDrugAbuseScreening.findMany();
                
              } catch (error) {
                
              } 
               console.log(" AdverseEvents Fetched ...")
               
            },
        });
    },
});