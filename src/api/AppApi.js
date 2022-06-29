import ApiService from "../services/ApiService";

const Service = new ApiService();

export const getCities = async () => Service.getData("/cities");

export const loginUser = async (data) => Service.postData("/login", data);

export const registerUser = async (data) => Service.postData("/register", data);