export async function fetchCars(){
    const headers = {
        'X-RapidAPI-Key': '56163eff12msh71ad6d88cbc4ce6p17a2dbjsn4ae0b41f38d3',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers: headers,
    });

    const result = await response.json();

    return result;
}
