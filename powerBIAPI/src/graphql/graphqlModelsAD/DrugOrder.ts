import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const DrugOrder = objectType({
    name: "DrugOrder", // <- Name of your type
    definition(t) {
        
            t.nullable.string("visit_id")
            t.nullable.string("provider")
            t.nullable.string("order_id")
            t.nullable.string("encounter_id")
            t.nullable.string("order_group_id")
            t.nullable.string("patient_id")
            t.nullable.string("location_id")
            t.nonNull.string("mfl_code")
            t.nullable.string("voided")

            t.nullable.string("uuid")
            t.nullable.string("urgency")
            t.nullable.string("drug_concept_id")
            t.nullable.string("drug_short_name")
            t.nullable.string("drug_name")
            t.nullable.string("frequency")
            t.nullable.string("enc_name")
            t.nullable.string("dose")
            t.nullable.string("dose_units")
            t.nullable.string("quantity")
            t.nullable.string("quantity_units")
            t.nullable.string("dosing_instructions")
            t.nullable.int("duration")
            t.nullable.string("duration_units")
            t.nullable.string("instructions")
            t.nullable.string("route")

            t.nullable.string("visit_date")
            t.nullable.string("date_voided")
            t.nullable.string("date_created")
            t.nullable.string("date_last_modified")
    },
});



export const DrugOrderMutation = extendType({  // 1
    
    type: "Mutation",    
    definition(t) {
        t.nullable.field("postDrugOrder", {
            type: "DrugOrder",
             args: {
                uuid : nullable(stringArg()), 
                encounter_id : nullable(intArg()),
                order_group_id : nullable(intArg()),
                mfl_code : nullable(intArg()),
                patient_id : nullable(intArg()),
                location_id : nullable(intArg()),
                visit_date:  nullable(stringArg()), 
                visit_id : nullable(intArg()),
                provider : nullable(intArg()),
                order_id : nullable(intArg()),
                urgency  : nullable(stringArg()), 
                drug_concept_id : nullable(stringArg()), 
                drug_short_name : nullable(stringArg()), 
                drug_name : nullable(stringArg()), 
                frequency : nullable(stringArg()), 
                enc_name : nullable(stringArg()), 
                dose : nullable(stringArg()), 
                dose_units : nullable(stringArg()), 
                quantity : nullable(stringArg()), 
                quantity_units : nullable(stringArg()), 
                dosing_instructions : nullable(stringArg()), 
                duration : nullable(intArg()),
                duration_units : nullable(stringArg()), 
                instructions : nullable(stringArg()), 
                route : nullable(stringArg()), 
                voided : nullable(intArg()),
                date_voided : nullable(stringArg()), 
                date_created : nullable(stringArg()), 
                date_last_modified : nullable(stringArg()), 
            }, 

            resolve(parent, args, context) { 
                console.log(args);

                try {
                    const post = context.prisma.drugOrder.create({  
                    
                        data:{
                            
                            uuid: args.uuid ,
                            encounter_id: args.encounter_id,
                            mfl_code: 12905,
                            order_group_id: args.order_group_id,
                            patient_id: args.patient_id,
                            location_id: args.location_id,
                            visit_date: args.visit_date  != null ? (new Date(args.visit_date * 1).toISOString()) : null,
                            visit_id: args.visit_id,
                            provider: args.provider,
                            order_id: args.order_id,
                            urgency: args.urgency  ,
                            drug_concept_id: args.drug_concept_id ,
                            drug_short_name: args.drug_short_name ,
                            drug_name: args.drug_name ,
                            frequency: args.frequency ,
                            enc_name: args.enc_name ,
                            dose: args.dose ,
                            dose_units: args.dose_units ,
                            quantity: args.quantity ,
                            quantity_units: args.quantity_units ,
                            dosing_instructions: args.dosing_instructions ,
                            duration: args.duration,
                            duration_units: args.duration_units ,
                            instructions: args.instructions ,
                            route: args.route ,
                            date_voided: args.date_voided != null ? (new Date(args.date_voided * 1).toISOString()) : null,
                            date_created: args.date_created != null ? (new Date(args.date_created * 1).toISOString()) : null,
                            date_last_modified: args.date_last_modified != null ? (new Date(args.date_last_modified * 1).toISOString()) : null,
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
