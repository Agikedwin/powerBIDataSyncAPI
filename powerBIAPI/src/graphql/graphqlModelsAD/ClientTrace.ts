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
       t.nullable.string("remarks"); 
       t.nullable.string("appointment_date");
       t.nullable.string("date_created"); 
       t.nullable.string("date_last_modified"); 

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
                voided : nullable(intArg()),
            }, 

            resolve(parent, args, context) { 
                console.log(args);

                const post = context.prisma.clientTrace.create({  
                    
                    data:{
                        uuid : args.uuid,
                        date_created :args.date_created != null ? (new Date(args.date_created * 1).toISOString()) : null,
                        mfl_code: 12905,
                        date_last_modified: args.date_last_modified != null ? (new Date(args.date_last_modified * 1).toISOString()) : null,  
                        encounter_date :args.encounter_date != null ? (new Date(args.encounter_date * 1).toISOString()) : null,  
                        client_id : args.client_id,
                        contact_type : args.contact_type,
                        status : args.status,
                        unique_patient_no: args.unique_patient_no,
                        facility_linked_to : args.facility_linked_to,
                        health_worker_handed_to : args.health_worker_handed_to,
                        remarks : args.remarks,
                        appointment_date: args.appointment_date != null ? (new Date(args.appointment_date * 1).toISOString()) : null,  
                            }
                });
                return post;
            },
        });
    },
});
