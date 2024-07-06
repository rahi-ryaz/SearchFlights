const {Airplane} = require("../models/index");

class AirplaneRepository {
    async getAirplane(id) {
        try{
            const airplane = await Airplane.findByPk(id);
            console.log("from repo airplane",airplane);
            console.log("from repo id",id)
            return airplane;

        } catch(error){
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports= AirplaneRepository;