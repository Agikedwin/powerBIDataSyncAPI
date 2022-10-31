import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   

export const EtlCurrentInCare1234 = objectType({
    name: "EtlCurrentInCare", // <- Name of your type
    definition(t) {
        t.nonNull.int("patient_id"); 
        t.nullable.string("gender"); 
        t.nullable.string("dob"); 
        t.nullable.string("disc_patient"); 
        t.nullable.string("enroll_date"); 
        t.nullable.string("latest_enrolment_date"); 
        t.nullable.string("latest_vis_date"); 
        t.nullable.string("latest_tca"); 
        t.nullable.string("stability"); 
        t.nullable.string("effective_disc_date"); 
        t.nullable.string("date_discontinued"); 
        t.nullable.int("started_on_drugs"); 

    },
});

let resData:any ;


export const EtlCurrentInCareQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("getCurrentInCare", {
            type: "EtlCurrentInCare",
            resolve(parent, args, context) {  
                
               context.prisma.etlCurrentInCare.findMany().then(data =>{
                    resData = data;             
                    
                });  
                console.log(resData)
                console.log("we are at current in care")
               
                return resData;
            },
        });
    },
});

