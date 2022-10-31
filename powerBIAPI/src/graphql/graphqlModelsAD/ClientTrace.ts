import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const ClientTrace = objectType({
    name: "ClientTrace", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
       t.nullable.string("uuid");
       t.nullable.int("client_id"); 
       t.nullable.int("mfl_code");
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



export const ClientTraceMutation = extendType({  // 1
    
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("postClientTrace", {
            type: "ClientTrace",
             args: {
                uuid : nullable(stringArg()),
                date_created : nullable(stringArg()),
                mfl_code: nullable(intArg()),
                date_last_modified: nullable(stringArg()),
                encounter_date : nullable(stringArg()),
                client_id : nullable(intArg()),
                contact_type : nullable(stringArg()),
                status : nullable(stringArg()),
                unique_patient_no: nullable(stringArg()),
                facility_linked_to : nullable(stringArg()),
                health_worker_handed_to : nullable(stringArg()),
                remarks : nullable(stringArg()),
                appointment_date: nullable(stringArg()),
                voided : nullable(stringArg()),
            }, 

            resolve(parent, args, context) { 
                console.log(args);

                const post = context.prisma.clientTrace.create({  
                    
                    data:args
                });
                return post;
            },
        });
    },
});
