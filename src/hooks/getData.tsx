import React, { createContext, useContext, useState } from "react";
import axios from "axios";

type GetDataProviderProps = {
  children: React.ReactNode;
};


type GetDataContextProps = {
  vehicle: string;
  brand: any;
  brands: Array<[]>;
  model: string;
  year: string;
  getBrands: (vehicle: string) => Promise<any>;
  getModels: (model: string) => Promise<any>;
  getYear: () => Promise<any>;
  getDetails: () => Promise<any>;
};

export const GetDataContext = createContext({} as GetDataContextProps);

function GetDataProvider({ children }: GetDataProviderProps) {
  const [vehicle, setVehicle] = useState("");
  const [brand, setBrand] = useState({});
  const [brands, setBrands] = useState([]);
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  async function getBrands(vehicle: string) {
    setVehicle(vehicle);
    try {
      const data = await axios.get(
        `https://parallelum.com.br/fipe/api/v1/${vehicle.toLowerCase()}/marcas`
      );
      setBrands(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getModels(model: string) {
    setBrand(model);
  }
  async function getYear() {}
  async function getDetails() {}

  return (
    <GetDataContext.Provider
      value={{
        vehicle,
        brand,
        brands,
        model,
        year,
        getBrands,
        getModels,
        getYear,
        getDetails,
      }}
    >
      {children}
    </GetDataContext.Provider>
  );
}

function getData() {
  const context = useContext(GetDataContext);

  return context;
}

export { GetDataProvider, getData };
