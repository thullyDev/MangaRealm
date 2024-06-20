import type { _User } from "../../../services/MangaRealm.api/types";
import { formatKey, titleCase } from "../../../utilities/misc";

export const UserDetails = ({ user }: { user: _User }) => {
	const { email, username, createdAt } = user
	const udInpItems = [
		{ 
			type: "text", 
			name: "join_date", 
			value: createdAt, 
			isReadOnly: true,
		},
		{ 
			type: "text", 
			name: "email", 
			value: email, 
			isReadOnly: false,
		},
		{ 
			type: "text", 
			name: "username", 
			value: username, 
			isReadOnly: false,
		},
	]
	const inputs: JSX.Element[] =  []
	  for (let i = 0; i < udInpItems.length; i++) {
	  	const data = udInpItems[i]
	    const ele = (
	    	<UDInput key={i} {...data} />
	    );
	    inputs.push(ele);
	  }

	return (
		<div className="user-details-con">
			<div className="form-con">
				<form action="post" className="user-detailt-form">
					{inputs}
					<div className="change-password-text-con">
						<button className="change-password-btn">
							<i className="fas fa-lock"></i>
							<p className="change-password-text">
								change password
							</p>	
						</button>
					</div>
		            <div className="update-con w-full my-3">
		              <button
		                type="button"
		                className={`update-btn`}
		              >
		                Update
		              </button>
		            </div>
				</form>
			</div>
		</div>
	)
} 

interface _UDInput { type: string; name: string; value: string, isReadOnly: boolean }

const UDInput = ({ type, name, value, isReadOnly }: _UDInput) => {
	const label = formatKey(name)
	const key = name + "_input" 
	const input = ( 
		isReadOnly ? 
			<input value={value} name={key} type={type} readOnly /> : 
			<input value={value} name={key} type={type} />  
	)
	return (
		<div className="udinput-con">
			<div className="inner-con">
				<label htmlFor={key} className="udinput-label">{titleCase(label)}</label>
				{input}
			</div>
		</div>
	)
}