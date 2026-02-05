import type { ReferenceLap } from "../../mock/mockData";

type ReferenceLapsTableProps = {referenceLapData: ReferenceLap[]}

function ReferenceLapsTable({referenceLapData}:ReferenceLapsTableProps) {
    return(
        <>
            <div className="bg-[#121212] p-6 min-h-screen text-gray-300">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-[11px] uppercase tracking-wider text-gray-500 border-b border-gray-800">
                        <th className="pb-4 font-semibold">Pista</th>
                        <th className="pb-4 font-semibold text-center">Classe</th>
                        <th className="pb-4 font-semibold">Carro Mais Rápido</th>
                        <th className="pb-4 font-semibold text-center text-purple-400">100% <br/><span className="text-[9px]">Alien</span></th>
                        <th className="pb-4 font-semibold text-center text-green-400">101% <br/><span className="text-[9px]">Competitivo</span></th>
                        <th className="pb-4 font-semibold text-center text-blue-400">102% <br/><span className="text-[9px]">Good</span></th>
                        <th className="pb-4 font-semibold text-center text-yellow-500">103% <br/><span className="text-[9px]">Midpack</span></th>
                        <th className="pb-4 font-semibold text-center text-orange-400">105% <br/><span className="text-[9px]">Trail-Ender</span></th>
                        <th className="pb-4 font-semibold text-center text-red-500">107% <br/><span className="text-[9px]">Offline</span></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/50">
                        {referenceLapData.map((lap, index) => (
                        <tr key={index} className="hover:bg-white/5 transition-colors group">
                            <td className="py-3 text-sm font-medium text-gray-200">{lap.track}</td>
                            <td className="py-3 text-center">
                            <span className="text-[10px] px-2 py-0.5 rounded border border-orange-900/50 text-orange-500 bg-orange-950/20">
                                {lap.carClass}
                            </span>
                            </td>
                            <td className="py-3 text-sm text-gray-400">{lap.fastestCar}</td>
                            <td className="py-3 text-center text-sm font-mono text-purple-400/80">{lap.time100}</td>
                            <td className="py-3 text-center text-sm font-mono text-green-400/80">{lap.time101}</td>
                            <td className="py-3 text-center text-sm font-mono text-blue-400/80">{lap.time102}</td>
                            <td className="py-3 text-center text-sm font-mono text-yellow-500/80">{lap.time103}</td>
                            <td className="py-3 text-center text-sm font-mono text-orange-400/80">{lap.time105}</td>
                            <td className="py-3 text-center text-sm font-mono text-red-500/80">{lap.time107}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ReferenceLapsTable