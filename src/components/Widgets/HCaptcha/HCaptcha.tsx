export const HCaptcha = ({ captchaId }: { captchaId: string }) => {
	return (
		<div className="captcha-con">
			<div id={`captcha-${captchaId}`} className="captcha-widgets flex justify-center mt-5"></div>
		</div>
	)
}