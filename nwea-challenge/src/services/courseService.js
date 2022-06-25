import { http } from './httpService'
const apiEndpoint = 'http://localhost:5000/data'

/* 
	Fetch and parse data (no real parsing in this case). Axios will
	try to parse based on the response's Content-Type header, so
	for `application/json`, it will try to parse to a JS object.  
*/ 

export const getCourses = async () => {
	const { data } = await http.get(apiEndpoint)
	return data
}
