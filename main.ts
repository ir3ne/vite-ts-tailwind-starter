console.log('Welcome to Vite TS Starter!');

interface ViteTSStarter {
	title: string;
	version: string;
	tags: string[];
};

const starter: ViteTSStarter = {
	title: "Vite TS Starter",
	version: "v1.0.0",
	tags: ['vite', 'typescript', 'tailwind']
};

console.log("Starter: ", starter);