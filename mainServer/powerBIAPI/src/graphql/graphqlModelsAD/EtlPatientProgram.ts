import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   

export const EtlPatientProgram = objectType({
    name: "EtlPatientProgram", // <- Name of your type
    definition(t) {
        t.nonNull.int("id"); 
        t.nonNull.string("uuid"); 
        t.nonNull.int("patient_id"); 
        t.nonNull.int("location_id"); 
        t.nonNull.string("program"); 
        t.nonNull.string("date_enrolled"); 
        t.nonNull.string("date_completed"); 
        t.nonNull.string("date_created"); 
        t.nonNull.string("outcome");
        t.nonNull.string("date_last_modified"); 
        t.nonNull.string("voided"); 


    },
});


export const EtlPatientProgramQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("get", {
            type: "EtlPatientProgram",
            resolve(parent, args, context) {  
                return context.prisma.link.findMany();  // 1
            },
        });
    },
});


export const EtlPatientProgramMutation = extendType({  // 1
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("postProgram", {
            type: "EtlPatientProgram",
            args: {
                uuid: nonNull(stringArg()),
                patient_id: nonNull(intArg()),
                location_id: nullable(intArg()),
                program: nullable(stringArg()),
                date_created: nullable(stringArg()),
                date_enrolled: nullable(stringArg()),
                date_modified: nullable(stringArg()),
                date_completed: nullable(stringArg()),
                date_last_modified: nullable(stringArg()),
                outcome: nullable(stringArg()),
                voided: nullable(stringArg()),


            },
            resolve(parent, args, context) { 
                console.log(args.uuid);
                const newProgram = context.prisma.etlPatientProgram.create({   // 2
                    
                    data:
                     {
                        uuid: args.uuid,
                        patient_id: args.patient_id,
                        location_id: args.location_id,
                        program: args.program,
                        date_created: args.date_created,
                        date_enrolled: args.date_enrolled,
                        date_modified: args.date_modified,
                        date_last_modified: args.date_last_modified,
                        date_completed: args.date_completed,
                        outcome: args.outcome,
                        voided: args.voided,
                        
                    }, 
                });
                return newProgram;
            },
        });
    },
});