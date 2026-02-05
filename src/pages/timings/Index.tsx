import { useState } from "react";
import ReferenceLapsFilter from "../../components/referenceLapsFilter";
import ReferenceLapsTable from "../../components/referenceLapsTable/Index";
import { MOCK_REFERENCE_LAPS } from "../../mock/mockData";
import './index.modules.css';

export interface FilterReferenceLaps {
  track: string;
  carClass: string;
}

export function TimingsPage() {
  const [filter, setFilter] = useState<FilterReferenceLaps>({track:"", carClass:""});
  const handleChangeFilter = (filter: FilterReferenceLaps) => {
    setFilter(filter);
  }

    return(
        <div className="bg-[#121212] p-6 min-h-screen text-gray-300">
          <ReferenceLapsFilter
            filter={filter}
            handleChangeFilter={handleChangeFilter}
          />
          
          <ReferenceLapsTable 
              referenceLapData={MOCK_REFERENCE_LAPS}
          />
        </div>
    )
}