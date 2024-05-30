import { titleCase } from "../../../../utilities/misc";

interface _Input {
	input: string;
	label: string;
	icon: string;
}

interface _AuthForm {
	key: string;
	label: string;
	inputs: _Input[];
}

export const AuthForm = ({ key, label, inputs }: _AuthForm) => {
	return (
		<div className="auth-form-con">
			<div className="inner-con">
				<div className="form-label-text-con">
					<p className="form-label">
						{key}
					</p>
					<p className="form-text">
						{label}
					</p>
				</div>
				<div className="form-con">
					<form action="post">
						<div className="inputs-con">
							{
								inputs.map((item, index) => <Input item={item} key={index} />)
							}
						</div>
						<div className="submit-con">
							<button className="submit-btn">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

const Input = ({ item }: { item: _Input }) => {
	const { label, input, icon  } = item

	return (
		<div className="input-con">
			<div className="inner-con">
				<div className="icon-con">
					<i className={icon}></i>
				</div>
				<input type={label} placeholder={titleCase(label)} />				
			</div>
		</div>
	)
}