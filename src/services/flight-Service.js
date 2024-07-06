const {FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {

    constructor(){
        this.airplaneRepository=new AirplaneRepository();
        this.flightrepository=new FlightRepository();
     }

    async createFlight(data) {
        try{
            if(!compareTime(data.arrivalTime,data.departureTime)){
                    throw {error: 'Arrival Time cannot be less than departure time'};
                }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            console.log(airplane);
            console.log("flight-Service AirplaneId",)
            const flight= await this.flightrepository.createFlight({
                ...data, totalSeats:airplane.capacity
            });
           return flight;
        } catch(error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    
    

    async getFlightData(){
         //todo
    }
}

module.exports = FlightService;