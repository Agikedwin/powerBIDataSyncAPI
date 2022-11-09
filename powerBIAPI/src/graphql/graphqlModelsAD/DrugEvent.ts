import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const DrugEvent = objectType({
    name: "DrugEvent", // <- Name of your type
    definition(t) {
        t.nullable.int("visit_id")
        t.nullable.int("provider")
        t.nullable.int("encounter_id")
        t.nullable.int("patient_id")
        t.nonNull.int("mfl_code")
        t.nullable.int("voided")

        t.nullable.string("uuid")
        t.nullable.string("program")
        t.nullable.string("regimen")
        t.nullable.string("regimen_name")
        t.nullable.string("regimen_line")
        t.nullable.int("discontinued")
        t.nullable.string("regimen_discontinued")
        t.nullable.string("reason_discontinued")
        t.nullable.string("reason_discontinued_other")

        t.nullable.string("date_discontinued")
        t.nullable.string("date_started")
        t.nullable.string("visit_date")
        t.nullable.string("date_voided")
        t.nullable.string("date_created")
        t.nullable.string("date_last_modified")
    },
});



export const DrugEventMutation = extendType({  // 1
    
    type: "Mutation",    
    definition(t) {
        t.nullable.field("postDrugEvent", {
            type: "DrugEvent",
             args: {
                
               // id_auto : nullable(intArg()),
                uuid : nullable(stringArg()), 
                patient_id : nullable(intArg()),
                date_started : nullable(stringArg()),
                visit_date : nullable(stringArg()),
                provider : nullable(intArg()),
                mfl_code : nullable(stringArg()),
                encounter_id: nullable(intArg()),
                
                program : nullable(stringArg()), 
                regimen : nullable(stringArg()), 
                regimen_name : nullable(stringArg()), 
                regimen_line : nullable(stringArg()), 
                discontinued  : nullable(intArg()),
                regimen_discontinued : nullable(stringArg()), 
                date_discontinued : nullable(stringArg()), 
                reason_discontinued : nullable(intArg()),
                reason_discontinued_other : nullable(stringArg()), 
                date_created : nullable(stringArg()), 
                date_last_modified : nullable(stringArg()), 
                voided  : nullable(intArg()),
            }, 

            resolve(parent, args, context) { 
                console.log(args)


                try {
                    const post = context.prisma.drugEvent.create({  
                    
                        data: {
                            
                            //id_auto : args.id_auto,
                            uuid : args.uuid, 
                            patient_id : args.patient_id,
                            mfl_code : 12905,
                            date_started : args.date_started != null ? (new Date(args.date_started * 1).toISOString()) : null,
                            visit_date : args.visit_date != null ? (new Date(args.visit_date * 1).toISOString()) : null,
                            provider : args.provider,
                            encounter_id : args.encounter_id,
                            
                            program : args.program, 
                            regimen : args.regimen, 
                            regimen_name : args.regimen_name, 
                            regimen_line : args.regimen_line, 
                            discontinued  : args.discontinued,
                            regimen_discontinued : args.regimen_discontinued, 
                            date_discontinued : args.date_discontinued != null ? (new Date(args.date_discontinued * 1).toISOString()) : null,
                            reason_discontinued : args.reason_discontinued,
                            reason_discontinued_other : args.reason_discontinued_other, 
                            date_created : args.date_created != null ? (new Date(args.date_created * 1).toISOString()) : null, 
                            date_last_modified : args.date_last_modified != null ? (new Date(args.date_last_modified * 1).toISOString()) : null, 
                            voided  : args.voided,

                        }
                    });
                    return post;
                    
                } catch (error) {
                    console.log(error)
                }
            },
        });
    },
});
