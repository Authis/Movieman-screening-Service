const screening = require("../schema/screening");

const insertScreeningData = async (screeningData) => {
  screeningData.insertedDate = new Date();
  screeningData.updatedDate = new Date();
  const data = new screening(screeningData);
  try {
    await data.save();
    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
    };
  }
};
 

const getScreenings = async () => {
  try {
    const data = await screening.aggregate([
   
      {
        $project:  
        {
           screeningID: true,
           movieID: true,
           theatreID: true,
           screeningTime:true,
           ticketPrice:true,
           pocName: true,
           pocNo: true,
           minBids:true,
           maxBids: true,
           totalBids:true
         }
      },{ $lookup:
              {
                from: "movies",
                localField: "movieID",
                foreignField: "_id",
                as: "movieDetail"
              }
            },{
              $lookup:
              {
               from: "theatres",
               localField: "theatreID",
               foreignField: "_id",
               as: "theatreDetail"
             }
            }
           ])
    return data;
  } catch (e) {
    return null;
  }
};

 
 

const editScreeninghData = async (screeningData) => {
  const { id } = screeningData;
  screeningData.updatedDate = new Date();
  try {
    await movie.findByIdAndUpdate({ _id: id }, screeningData);
    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
    };
  }
};

const deleteScreeningData = async (id) => {
  try {
    await movie.findByIdAndDelete(id);
    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
    };
  }
};

module.exports = {
  insertScreeningData,
  getScreenings,
  editScreeninghData,
  deleteScreeningData,
};
