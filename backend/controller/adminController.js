import adminModel from "../model/adminModel.js";



  const adminData=async(req,res)=>{
    const admindata = await adminModel.find();
    res.status(201).json({ message: "get all the data", admindata })
  }

  const authentication=async(req,res)=>{
    const {username,password}=req.body;
    
    try{
      const admin=await adminModel.findOne({username,password});

      if(admin){
        res.status(200).json({"success": true,message:'Login Successfully'})
      }else{
        res.status(201).json({"success": false,message:'Login Failed'})
      }
    }catch (error) {
     
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }




  export {adminData,authentication};