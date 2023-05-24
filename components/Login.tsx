import { useQuery, useQueryClient } from '@tanstack/react-query';

function Login() {
	const queryClient = useQueryClient();
	const myHeaders = new Headers();
	myHeaders.append('x-rapidapi-key', '34a656229dc723ad5220f76b5598142e');
	myHeaders.append('x-rapidapi-host', 'v3.football.api-sports.io');

	const requestOptions = {
		method: 'GET',
		headers: myHeaders,
	};

	async function getUser() {
		const response = await fetch(
			'https://v3.football.api-sports.io/status',
			requestOptions
		);
		return response.json();
	}

	const { isLoading, isError, data, error } = useQuery({
		queryKey: ['todos'],
		queryFn: getUser,
	});
	console.log(data.response.account.firstname);
	if (isLoading) {
		return <div>Carregando...</div>;
	}
	return <div>{data.response.account.firstname}</div>;
}
export default Login;
