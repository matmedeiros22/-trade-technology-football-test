'use client';
import { FormEvent, useState } from 'react';

export default function Home() {
	const [apiKey, setApiKey] = useState<string>();

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const target = e.target as typeof e.target & {
			elements: {
				login: { value: string };
			};
		};

		setApiKey(target.elements.login.value);
	}

	return (
		<main className='flex flex-col items-center justify-between min-h-screen p-24'>
			<form onSubmit={handleSubmit}>
				<label htmlFor='login'> Login(API KEY): </label>
				<input type='text' id='login' />
				<button type='submit'>Logar</button>
				<br />
				ApIKey: {apiKey}
			</form>
		</main>
	);
}
