import { FC } from "react";
import { DataGrid, Columns, RowsProp } from "@material-ui/data-grid";

import "./MyTable.scss";

const fixData = (data: object): RowsProp => {
	// Make the id in the actual object
	const aa: RowsProp = [];
	for (const [key, value] of Object.entries(data)) {
		aa.push({
			id: key,
			...value
		});
	}
	return aa;
};

const MyTable: FC<{data: object}> = (props) => {
	const headers: Columns = [
		// { field: "id", headerName: "ID", width: 400 },
		{ field: "teamName", headerName: "Team Name" },
		{ field: "teamNumber", headerName: "Team Number" },
		{ field: "teamTest", headerName: "Team Test" },

		{ field: "a_wobble", headerName: "Autonomous \nWobble" },
		{ field: "a_parkingLaunchLine", headerName: "Autonomous \nParking Launch Line" },
		{ field: "a_lowGoal", headerName: "Autonomous \nLow Goal" },
		{ field: "a_mediumGoal", headerName: "Autonomous \nMedium Goal" },
		{ field: "a_highGoal", headerName: "Autonomous \nHigh Goal" },
		{ field: "a_powershot", headerName: "Autonomous \nNumber of Powershots" },
		{ field: "a_penalty", headerName: "Autonomous \nPenalty" },
		
		{ field: "t_lowGoal", headerName: "TeleOp \nLow Goal" },
		{ field: "t_mediumGoal", headerName: "TeleOp \nMedium Goal" },
		{ field: "t_highGoal", headerName: "TeleOp \nHigh Goal" },
		{ field: "t_lowGoalAccuracy", headerName: "TeleOp \n Low Goal Accuracy" },
		{ field: "t_mediumGoalAccuracy", headerName: "TeleOp \n Medium Goal Accuracy" },
		{ field: "t_highGoalAccuracy", headerName: "TeleOp \n High Goal Accuracy" },
		{ field: "t_penalty", headerName: "TeleOp \nPenalty" },

		{ field: "e_Powershot", headerName: "Endgame \nNumber of Powershot" },
		{ field: "e_ringsOnWobble", headerName: "Endgame \nRings on Wobble" },
		{ field: "e_wobbleDropzone", headerName: "Endgame \nWobble Dropzone" },
		{ field: "e_penalty", headerName: "Endgame \nPenalty" },

		{ field: "score", headerName: "Score" },
	];
	const rows = fixData(props.data);

	return (
		<div>
			<DataGrid columns={headers} rows={rows} autoHeight />
		</div>
	);
};

export default MyTable;
