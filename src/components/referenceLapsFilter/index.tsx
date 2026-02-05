import type { FilterReferenceLaps } from "../../pages/timings/Index"

type ReferenceLapsFilterProps = {filter: FilterReferenceLaps, handleChangeFilter: (filter: FilterReferenceLaps) => void}

function ReferenceLapsFilter({filter, handleChangeFilter}: ReferenceLapsFilterProps) {
    return(
        <>
            <div className="flex gap-4 mb-6">
            <div className="flex items-center gap-2 bg-[#1e1e1e] px-3 py-2 rounded border border-gray-800">
                <span className="text-xs uppercase text-gray-500 font-bold">Filtrar dados</span>
                <select className="bg-transparent text-sm outline-none cursor-pointer">
                <option>Todas as Pistas</option>
                </select>
            </div>
            <div className="bg-[#1e1e1e] px-3 py-2 rounded border border-gray-800">
                <select className="bg-transparent text-sm outline-none cursor-pointer">
                <option>Todas as Classes</option>
                </select>
            </div>
            </div>
        </>
    )
}

export default ReferenceLapsFilter