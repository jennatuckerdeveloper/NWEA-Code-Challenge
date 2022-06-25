import { http } from './httpService'
const apiEndpoint = 'http://localhost:5000/data'

export const getCourses = async () => {
	const { data } = await http.get(apiEndpoint)
	return data
}
