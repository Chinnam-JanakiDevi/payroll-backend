const oracledb = require('oracledb');
const dbConfig = {
  user: "system",
  password: "manager",
  connectString: "localhost:/orcl",
};
const Query = async (sql) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql);
    await connection.commit();
    return result;
  } catch (error) {
    console.error(error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
};

const Result = async (...Parameters) => {
  let Sql, Message;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
  // if(typeof Parameters[2] === 'string') {
  //   Details = eval(`(${Parameters[2]})`);  
  // }
  switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.catg}','${Details.wef_date}',${Details.hra_per})`;
      Message = "Inserted Successfully";
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set hra_per = '${Parameters[3].hra_per}', wef_date= '${Parameters[3].wef_date}' where catg = '${Details}'`;
      Message = `Succes Updating from ${Details.wef_date, Details.hra_per} to ${Parameters[3].wef_date, Parameters[3].hra_per}`;
      break;
    case "Delete":
      //Details=Number(Details);
      Sql = `delete from ${Parameters[0]} where catg = '${Details}'`;
      Message = `Success deleting ${Details}`;
      break;
    case "Read":
      Sql = `select * from ${Parameters[0]} where catg = '${Details}'`;
      Message = `Showing all the values in the database ${Parameters[0]}`;
      // if(Details.catg){
      //   Sql = `select * from ${Parameters[0]} where catg = '${Details.catg}'`;
      //   Message = `${Details.catg} Retrived`
      // }
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  result.Message = Message;
  return result;
};


const empfun = async (...Parameters) => {
  let Sql, Message;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
  if (typeof Parameters[2] === 'string') {
    Details = eval(`(${Parameters[2]})`);
  }
  switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.emp_code}','${Details.emp_name}','${Details.emp_qual}','${Details.emp_join_date}','${Details.emp_resign_date}','${Details.emp_pan_no}','${Details.emp_aadhar_no}','${Details.emp_pf_flag}','${Details.emp_pf_no}','${Details.emp_esi_no}','${Details.emp_est_flag}','${Details.emp_gst_no}','${Details.emp_basic}','${Details.emp_dept}','${Details.emp_hno}','${Details.emp_street}','${Details.emp_city}','${Details.emp_pincode}','${Details.emp_state}','${Details.emp_ph_no}','${Details.emp_email_id}','${Details.emp_cons_res_flag}','${Details.emp_spl_pay}','${Details.emp_bank_ifsc}','${Details.emp_bank_ifsc}','${Details.emp_bank_account_no}')`;
      Message = "Inserted Successfully";
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set RollNumber = '${Parameters[3].RollNumber}', Name = '${Parameters[3].Name}' where RollNumber = '${Details.RollNumber}'`;
      Message = `Succes Updating from ${Details.RollNumber, Details.Name} to ${Parameters[3].RollNumber, Parameters[3].Name}`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where emp_code = '${Details.emp_code}'`;
      Message = `Success deleting ${Details.catg}`;
      break;
    case "Read":
      Sql = `select * from ${Parameters[0]}`;
      Message = `Showing all the values in the database ${Parameters[0]}`;
      if (Details.RollNumber) {
        Sql = `select * from ${Parameters[0]} where emp_code = '${Details.emp_code}'`;
        Message = `${Details.emp_code} Retrived`
      }
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  result.Message = Message;
  return result;
};


const pffun = async (...Parameters) => {
  let Sql, Message;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];

  // if(typeof Parameters[2] === 'string') {
  //   Details = eval(`(${Parameters[2]})`); 
  // }
  switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.catg}','${Details.wef_date}','${Details.pf_per}','${Details.fpf_per}','${Details.epf_per}')`;
      Message = "Inserted Successfully";
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set catg = '${Parameters[3].catg}', wef_date= '${Parameters[3].wef_date}',pf_per= '${Parameters[3].pf_per}',fpf_per= '${Parameters[3].fpf_per}',epf_per= '${Parameters[3].epf_per}' where catg = '${Details.catg}'`;
      Message = `Succes Updating from ${Details.RollNumber, Details.Name} to ${Parameters[3].RollNumber, Parameters[3].Name}`;
      break;
    case "Delete":
      //Details=Number(Details);
      Sql = `delete from ${Parameters[0]} where catg = ${Details}`;
      Message = `Success deleting ${Details}`;
      break;
    case "Read":
      Sql = `select * from ${Parameters[0]}`;
      Message = `Showing all the values in the database ${Parameters[0]}`;
      if (Details.RollNumber) {
        Sql = `select * from ${Parameters[0]} where catg = '${Details}'`;
        Message = `${Details.catg} Retrived`
      }
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  result.Message = Message;
  return result;
};


const example = async (...Parameters) => {
  let Sql, Message;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
  switch (Parameters[1]) {
    case "Read":
     
        Sql = `select * from ${Parameters[0]} where season= '${Details}'`;
        Message = `${Details} Retrived`
      
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  result.Message = Message;
  return result;
};

module.exports = {
  Result: Result,
  pffun: pffun,
  empfun: empfun,
  example: example,
}