import { formatKey, titleCase, trans500 } from "../../../utilities/misc";

interface _Input {
	input: string;
	label: string;
	icon: string;
}

interface _AuthForm {
	authType: string;
	label: string;
	inputs: _Input[];
	redirect: JSX.Element;
}


export const AuthForm = ({ authType, label, inputs, redirect }: _AuthForm) => {
	return (
		<div className="auth-form-con flex justify-center ">
			<div className="inner-con px-5 py-1 w-96">
				<div className="form-label-text-con flex flex-col gap-2 mb-2">
					<p className="form-label text-2xl">
						{formatKey(authType)}
					</p>
					<p className="form-text text-zinc-500 text-xs">
						{label}
					</p>
				</div>
				<div className="form-con">
					<form action="post">
						<div className="inputs-con flex flex-col gap-5">
							{
								inputs.map((item, index) => <Input item={item} key={index} />)
							}
						</div>
						<div className="captcha-con">
						</div>
						<div className="submit-con w-full my-3">
							<button onClick={authHandler} type="button" className={ `submit-btn text-sm flex justify-center bg-red-600 hover:bg-zinc-700 rounded w-full ${trans500} py-2` } data-type={authType} >
								Submit
							</button>
						</div>
						<div className="redirect-con w-full my-3">
							{redirect}
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
			<div className="inner-con flex gap-5 bg-zinc-800 py-1 px-2 border border-zinc-700 rounded">
				<div className="icon-con">
					<i className={ "text-zinc-600 " + icon }></i>
				</div>
				<input className="bg-inherit text-zinc-600 text-xs border-none outline-none w-full" type={input} placeholder={titleCase(label)} />				
			</div>
		</div>
	)
}

function authHandler(event: React.MouseEvent<HTMLButtonElement>) {
	const eventEle = $(event.currentTarget);
}