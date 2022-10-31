import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const EtlCurrentInCare = objectType({
    name: "EtlCurrentInCare", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
        t.nullable.int("patient_id"); 
        t.nullable.int("mfl_code");
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


let count =1;
export const EtlCurrentInCareMutationPost = extendType({  // 1
    
    type: "Mutation",    
    definition(t) {
        t.nullable.field("postCurrentInCare", {
            type: "EtlCurrentInCare",
             args: {
                patient_id: nullable(intArg()),
                mfl_code: nullable(intArg()),
                latest_enrolment_date: nullable(stringArg()),
                gender: nullable(stringArg()),
                dob: nullable(stringArg()),
                disc_patient: nullable(stringArg()),
                enroll_date: nullable(stringArg()),
                latest_vis_date: nullable(stringArg()),
                latest_tca: nullable(stringArg()),
                stability: nullable(stringArg()),
                effective_disc_date: nullable(stringArg()),
                date_discontinued: nullable(stringArg()),
                started_on_drugs: nullable(intArg()),
            }, 

            resolve(parent, args, context) { 
                console.log(args);
                try {

                    const newIncarePost = context.prisma.etlCurrentInCare.create({  
                    
                        data:
                        {
                            patient_id: args.patient_id ,
                            latest_enrolment_date: args.latest_enrolment_date,
                            gender:  args.gender,
                            mfl_code: 12904,
                            dob: args.dob != null ? (new Date(args.dob * 1).toISOString()) : null,
                            disc_patient:  args.disc_patient,
                            enroll_date:  args.enroll_date != null ? (new Date(args.enroll_date * 1).toISOString()) : null,
                            latest_vis_date:  args.latest_vis_date,
                            latest_tca:  args.latest_tca,
                            stability:  args.stability,
                            effective_disc_date:  args.effective_disc_date,
                            date_discontinued:  args.date_discontinued,
                            started_on_drugs:  args.started_on_drugs,
                            
                        }, 

                        
                    });
                    console.log("The records count is:: " + count++)
                    return newIncarePost;
                    
                } catch (error) {
                    console.log(error)
                }

               
            },
        });
    },
});
