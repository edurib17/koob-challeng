import React, { createContext, useContext, useState } from "react";
import axios from "axios";

type GetDataProviderProps = {
  children: React.ReactNode;
};

type GetDataContextProps = {
  vehicle: string;
  brand: any;
  brands: Array<[]>;
  model: any;
  models: Array<[]>;
  year: object;
  years: Array<[]>;
  getBrands: (vehicle: string) => Promise<any>;
  getModels: (brand: object) => Promise<any>;
  getYear: (model: object) => Promise<any>;
  getDetails: () => Promise<any>;
};

export const GetDataContext = createContext({} as GetDataContextProps);

function GetDataProvider({ children }: GetDataProviderProps) {
  const [vehicle, setVehicle] = useState("");
  const [brand, setBrand] = useState({} as any);
  const [brands, setBrands] = useState([]);
  const [model, setModel] = useState("");
  const [models, setModels] = useState([]);
  const [year, setYear] = useState({});
  const [years, setYears] = useState([]);

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
  async function getModels(brand: any) {
    setBrand(brand);
    try {
      const data = await axios.get(
        `https://parallelum.com.br/fipe/api/v1/${vehicle.toLowerCase()}/marcas/${
          brand.codigo
        }/modelos`
      );
      setModels(data.data.modelos);
    } catch (error) {
      console.log(error);
    }
  }
  async function getYear(model: any) {
     setModel(model)
    try {
      const data = await axios.get(
        `https://parallelum.com.br/fipe/api/v1/${vehicle.toLowerCase()}/marcas/${
          brand.codigo
        }/modelos/${model.codigo}/anos`
      );
      setYears(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getDetails() {}

  return (
    <GetDataContext.Provider
      value={{
        vehicle,
        brand,
        brands,
        model,
        models,
        year,
        years,
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
