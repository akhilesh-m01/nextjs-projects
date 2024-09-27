"use client"
import { motion } from "framer-motion";
interface Params{
  params:{
    name:string
  };
}

const getPredictedAge = async(name:string)=>{
  const res = await fetch(`https://api.agify.io/?name=${name}`)
  return res.json()
}

const getPredictedGender = async(name:string)=>{
  const res = await fetch(`https://api.genderize.io/?name=${name}`)
  return res.json()
}

const getPredictedCountry = async(name:string)=>{
  const res = await fetch(`https://api.nationalize.io/?name=${name}`)
  return res.json()
}



const page = async({params}:Params) => {
  const ageData = getPredictedAge(params.name)
  const genderData = getPredictedGender(params.name)
  const countryData = getPredictedCountry(params.name)

  const [age,gender,country] = await Promise.all([ageData,genderData,countryData])
  return (
    <motion.div 
    initial={ { opacity: 1, scale: 0 } }
    animate={{opacity:1,scale:1}}
    className="min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-2 p-16 shadow-lg transition-transform duration-300 ease-in-out hover:scale hover:transi bg-gradient-to-r from-slate-600 to-slate-800 text-white">
        <div>Personal info</div>
        <div>Age:{age?.age}</div>
        <div>Country:{country?.country[0]?.country_id}</div>
        <div>Gender:{gender?.gender}</div>
      </div>
    </motion.div>
  )
}

export default page
