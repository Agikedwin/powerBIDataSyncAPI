import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const AdverseEvents = objectType({
    name: "AdverseEvents", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
        t.nullable.string("uuid")
        t.nullable.int("patient_id"); 
        t.nullable.int("mfl_code");
        t.nullable.string("form"); 
        t.nullable.int("provider"); 
        t.nullable.int("visit_id"); 
        t.nullable.int("provider"); 
        t.nullable.string("visit_date"); 
        t.nullable.int("location_id"); 
        t.nullable.int("encounter_id"); 
        t.nullable.int("obs_id"); 
        t.nullable.int("cause"); 
        t.nullable.int("adverse_event"); 
        t.nullable.int("severity"); 
        t.nullable.string("start_date"); 
        t.nullable.int("voided"); 
        t.nullable.int("date_created"); 
        t.nullable.int("date_last_modified"); 

    },
});


export const AdverseEventsMutation = extendType({  // 1
    
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("postAdverseEvents", {
            type: "AdverseEvents",
             args: {
                uuid:  nullable(stringArg()),
                form:  nullable(stringArg()),
                mfl_code: nullable(intArg()),
                provider:  nullable(intArg()),
                patient_id:  nullable(intArg()),
                visit_id:  nullable(intArg()),
                visit_date:  nullable(stringArg()),
                location_id:  nullable(intArg()),
                encounter_id:  nullable(intArg()),
                obs_id:  nullable(intArg()),
                cause:  nullable(intArg()),
                adverse_event:  nullable(intArg()),
                severity:  nullable(intArg()),
                start_date:  nullable(stringArg()),
                action_taken:  nullable(intArg()),
                voided:  nullable(intArg()),
                date_created:    nullable(stringArg()),
                date_last_modified:  nullable(stringArg())


            }, 

            resolve(parent, args, context) { 
                console.log(args);

                const newIncarePost = context.prisma.adverseEvents.create({  
                    
                    data:args
                });
                return newIncarePost;
            },
        });
    },
});
