import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
	const responseData = {
		email: "isaacomenuche@gmail.com",
		current_datetime: new Date().toISOString(),
		github_url: "<" + "https://github.com/iflames1/hng_stage_0" + ">",
	};

	res.status(200).json(responseData);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
})
