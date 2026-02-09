// import Papa from 'papaparse';

// export const fetchSheetData = async (url: string) => {
//     const response = await fetch(url);
//     const reader = response.body?.getReader();
//     const result = await reader?.read();
//     const decoder = new TextDecoder('utf-8');
//     const csv = decoder.decode(result?.value);

//     Papa.parse(csv, {
//         header: true, 
//         complete: (results) => results
//     });
// }