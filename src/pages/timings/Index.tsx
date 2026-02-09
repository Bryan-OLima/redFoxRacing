import { useEffect, useState } from "react";
import ReferenceLapsFilter from "../../components/referenceLapsFilter";
import ReferenceLapsTable from "../../components/referenceLapsTable/Index";
import { MOCK_REFERENCE_LAPS } from "../../mock/mockData";
import './index.modules.css';
import Papa from "papaparse";

export interface FilterReferenceLaps {
  track: string;
  carClass: string;
}

interface InternalSheetData {
  track: string,
  patch: string,
  car: string,
  percentage: {
    100: string,
    101?: string,
    102: string,
    103: string,
    104: string,
    105: string,
    106?: string,
    107: string
  }
}


export function TimingsPage() {
  const [filter, setFilter] = useState<FilterReferenceLaps>({track:"", carClass:""});
  const [data, setData] = useState<InternalSheetData[]>([]);

  const handleChangeFilter = (filter: FilterReferenceLaps) => {
    setFilter(filter);
  }

useEffect( () => {
    const loadSheetData = async () => {
      const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTN03UvJDm99byA6vQPZHKOCYVvfxLu1zkJAzdaKyROykzEKY2-Xl1rl1q5znZEf36m88dxMKsY2eaO/pub?output=csv";
      const response = await fetch(url);
      const reader = response.body?.getReader();
      const result = await reader?.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result?.value);
  
      Papa.parse(csv, {
          header: true, 
          complete: (results) => {
            console.log(results.data)
            const rowsWithData = results.data.filter((row:any) => row["_13"] !== "");

            const minedData: InternalSheetData[] = rowsWithData.map((row:any) => {
              return {
                track: row[""],
                patch: row["_1"],
                car: row["_9"],
                percentage: {
                  100: row["_3"],
                  102: row["_4"],
                  103: row["_5"],
                  104: row["_6"],
                  105: row["_7"],
                  107: row["_8"],
                }
              }
            })
              console.log("mined data: ", minedData);
              setData(() => minedData);       
          }
      });
  }

  loadSheetData();
},[]);

    return(
        // <div className="bg-[#121212] p-6 min-h-screen text-gray-300">
        //   <ReferenceLapsFilter
        //     filter={filter}
        //     handleChangeFilter={handleChangeFilter}
        //   />
          
        //   <ReferenceLapsTable 
        //       referenceLapData={MOCK_REFERENCE_LAPS}
        //   />
        // </div>

        <>
        </>
    )
}